import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Locator } from "@playwright/test";

const port = Number(process.env.PORT ?? 3100);
const formBaseURL = process.env.E2E_FORM_BASE_URL ?? `http://localhost:${port + 1}`;
const endpoint = "https://formspree.io/f/e2e-test-form";

test.use({ baseURL: formBaseURL });

async function fillInquiry(form: Locator) {
  await form.getByLabel("Name (required)").fill(" Alex Example ");
  await form.getByLabel("Email (required)").fill("alex@example.com");
  await form.getByLabel("Inquiry type").selectOption("Side project");
  await form.getByLabel("Message (required)").fill("HubSpot & AI?\nLet's talk scope.");
}

for (const path of ["/contact", "/hire"]) {
  test.describe(`configured form ${path}`, () => {
    test.beforeEach(async ({ page }) => {
      // Block the entire service by default. Each scenario supplies its own response.
      await page.route("https://formspree.io/**", route => route.abort());
    });

    test("submits the expected payload, prevents duplicate sends and announces success", async ({ page }) => {
      let calls = 0;
      let release!: () => void;
      const gate = new Promise<void>(resolve => { release = resolve; });
      await page.route("https://formspree.io/**", async route => {
        const request = route.request();
        expect(request.url()).toBe(endpoint);
        expect(request.method()).toBe("POST");
        expect(request.headers().accept).toBe("application/json");
        expect(request.postDataJSON()).toEqual({
          name: "Alex Example", email: "alex@example.com", type: "Side project",
          message: "HubSpot & AI?\nLet's talk scope.",
          _subject: "kalebjensen.com inquiry: Side project", _gotcha: "",
        });
        calls++;
        await gate;
        await route.fulfill({ status: 200, json: { ok: true } });
      });
      await page.goto(path);
      expect(await page.content()).not.toMatch(/\u0040gmail|\u006dailto:/i);
      const form = page.getByRole("form", { name: "Send an inquiry" });
      await expect(form.getByLabel("Inquiry type")).toHaveValue(path === "/hire" ? "Side project" : "Job opportunity");
      await expect(form.locator('[name="_gotcha"]')).toBeHidden();
      await fillInquiry(form);
      await form.getByRole("button", { name: "Send inquiry" }).click();
      await expect(form.getByRole("button", { name: "Sending...", exact: true })).toBeDisabled();
      await expect(form).toHaveAttribute("aria-busy", "true");
      await expect.poll(() => calls).toBe(1);
      // A second programmatic submit is ignored while the first is pending.
      await form.evaluate(el => el.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true })));
      release();
      await expect(form.getByRole("status")).toContainText("Your inquiry has been sent");
      await expect(form.getByRole("button", { name: "Send inquiry" })).toBeEnabled();
      await expect(form.getByLabel("Name (required)")).toHaveValue("");
      expect(calls).toBe(1);
      const axe = await new AxeBuilder({ page }).analyze();
      expect(axe.violations.filter(v => v.impact === "serious" || v.impact === "critical")).toEqual([]);
    });

    test("validates required fields, email and whitespace without any submission", async ({ page }) => {
      let calls = 0;
      await page.route("https://formspree.io/**", route => { calls++; return route.abort(); });
      await page.goto(path);
      const form = page.getByRole("form", { name: "Send an inquiry" });
      const submit = form.getByRole("button", { name: "Send inquiry" });
      await submit.click();
      await expect(form.getByLabel("Name (required)")).toBeFocused();
      await fillInquiry(form);
      await form.getByLabel("Email (required)").fill("not-an-email");
      await submit.click();
      await expect(form.getByLabel("Email (required)")).toBeFocused();
      await form.getByLabel("Email (required)").fill("alex@example.com");
      await form.getByLabel("Message (required)").fill("   ");
      await submit.click();
      await expect(form.getByRole("alert")).toContainText("not just spaces");
      await expect(form.getByLabel("Message (required)")).toBeFocused();
      expect(calls).toBe(0);
    });

    test("rejects a filled honeypot without contacting the service", async ({ page }) => {
      let calls = 0;
      await page.route("https://formspree.io/**", route => { calls++; return route.abort(); });
      await page.goto(path);
      const form = page.getByRole("form", { name: "Send an inquiry" });
      await fillInquiry(form);
      const trap = form.locator('[name="_gotcha"]');
      await expect(trap).toBeHidden();
      await expect(trap).toHaveAttribute("tabindex", "-1");
      await trap.evaluate((el: HTMLInputElement) => { el.value = "spam"; });
      await form.getByRole("button", { name: "Send inquiry" }).click();
      await expect(form.getByRole("alert")).toContainText("could not submit");
      expect(calls).toBe(0);
    });

    for (const failure of ["server", "network"]) {
      test(`shows an accessible ${failure} error and permits retry`, async ({ page }) => {
        let calls = 0;
        await page.route("https://formspree.io/**", async route => {
          calls++;
          if (calls > 1) return route.fulfill({ status: 200, json: { ok: true } });
          if (failure === "network") return route.abort("failed");
          return route.fulfill({ status: 422, json: { errors: [{ message: "Invalid request" }] } });
        });
        await page.goto(path);
        const form = page.getByRole("form", { name: "Send an inquiry" });
        await fillInquiry(form);
        await form.getByRole("button", { name: "Send inquiry" }).click();
        await expect(form.getByRole("alert")).toContainText("could not be sent");
        await expect(form.getByRole("button", { name: "Send inquiry" })).toBeEnabled();
        await expect(form.getByLabel("Email (required)")).toHaveValue("alex@example.com");
        await form.getByRole("button", { name: "Send inquiry" }).click();
        await expect(form.getByRole("status")).toContainText("Your inquiry has been sent");
        expect(calls).toBe(2);
      });
    }
  });
}
