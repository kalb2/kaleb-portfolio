"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { site } from "@/data/site";
import { buildInquiryPayload, formspreeEndpoint, inquiryTypes, type InquiryType } from "@/lib/inquiry";

const linkedin = "https://www.linkedin.com/in/kalebjensen";
type InquiryFormProps = { defaultType?: InquiryType };
const inputClass = "mt-2 block w-full rounded-none border border-black bg-white p-3 text-base font-normal normal-case tracking-normal";
const labelClass = "block font-mono text-xs uppercase tracking-widest";

export function InquiryForm({ defaultType = "Job opportunity" }: InquiryFormProps) {
  const id = useId();
  const pending = useRef(false);
  const [selectedType, setSelectedType] = useState<InquiryType>(defaultType);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [invalidFields, setInvalidFields] = useState<Array<"name" | "message">>([]);
  const endpoint = formspreeEndpoint(site.formspreeFormId);
  const errorId = `${id}-error`;
  const statusId = `${id}-status`;
  const noteId = `${id}-note`;

  if (!endpoint) {
    return <p className="leading-relaxed">To discuss a role or side project, <a href={linkedin} className="underline underline-offset-4">connect with me on LinkedIn</a>.</p>;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const type = String(data.get("type")) as InquiryType;
    setSuccess(false);
    const missing: Array<"name" | "message"> = [];
    if (!name) missing.push("name");
    if (!message) missing.push("message");
    if (missing.length) {
      setInvalidFields(missing);
      setError("Please add your name and a message, not just spaces.");
      (form.elements.namedItem(missing[0]) as HTMLElement)?.focus();
      return;
    }
    setInvalidFields([]);
    if (!inquiryTypes.includes(type)) return;
    const honeypot = String(data.get("_gotcha") ?? "");
    if (honeypot) {
      setError("We could not submit this inquiry. Please refresh and try again.");
      return;
    }
    pending.current = true;
    setSending(true);
    setError("");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15_000);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(buildInquiryPayload({ name, email, type, message }, honeypot)),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error("Submission rejected");
      form.reset();
      setSelectedType(defaultType);
      setSuccess(true);
    } catch {
      setError("Your inquiry could not be sent. Please try again or connect on LinkedIn.");
    } finally {
      window.clearTimeout(timeout);
      pending.current = false;
      setSending(false);
    }
  }

  const describedBy = [noteId, error ? errorId : null, success || sending ? statusId : null]
    .filter(Boolean)
    .join(" ");

  return (
    <form
      action={endpoint}
      method="post"
      aria-label="Send an inquiry"
      aria-describedby={describedBy}
      aria-busy={sending}
      onSubmit={handleSubmit}
      onChange={() => { setSuccess(false); setError(""); setInvalidFields([]); }}
      className="space-y-6"
    >
      <p id={noteId} className="text-sm leading-relaxed">
        Your inquiry is delivered securely through Formspree. Use this form for
        hiring conversations or a focused side project. Please avoid sharing sensitive information.
      </p>
      <fieldset disabled={sending} className="space-y-6">
        <legend className="sr-only">Inquiry details</legend>
        <div hidden aria-hidden="true">
          <label htmlFor={`${id}-gotcha`}>Leave this field empty</label>
          <input id={`${id}-gotcha`} name="_gotcha" tabIndex={-1} autoComplete="off" />
        </div>
        <input type="hidden" name="_subject" value={`kalebjensen.com inquiry: ${selectedType}`} />
        <div className="grid gap-6 sm:grid-cols-2">
          <label className={labelClass} htmlFor={`${id}-name`}>
            Name (required)
            <input
              className={inputClass}
              id={`${id}-name`}
              name="name"
              autoComplete="name"
              required
              maxLength={100}
              aria-invalid={invalidFields.includes("name") || undefined}
              aria-describedby={invalidFields.includes("name") ? errorId : undefined}
            />
          </label>
          <label className={labelClass} htmlFor={`${id}-email`}>
            Email (required)
            <input className={inputClass} id={`${id}-email`} name="email" type="email" autoComplete="email" required maxLength={254} />
          </label>
        </div>
        <label className={labelClass} htmlFor={`${id}-type`}>
          Inquiry type
          <select className={inputClass} id={`${id}-type`} name="type" value={selectedType} onChange={(event) => setSelectedType(event.target.value as InquiryType)}>
            {inquiryTypes.map((type) => <option key={type}>{type}</option>)}
          </select>
        </label>
        <label className={labelClass} htmlFor={`${id}-message`}>
          Message (required)
          <textarea
            className={inputClass}
            id={`${id}-message`}
            name="message"
            rows={5}
            required
            maxLength={3000}
            aria-invalid={invalidFields.includes("message") || undefined}
            aria-describedby={invalidFields.includes("message") ? errorId : undefined}
          />
        </label>
        <button type="submit" disabled={sending} className="border border-black bg-black px-5 py-3 font-mono text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black disabled:cursor-wait disabled:opacity-60">
          {sending ? "Sending..." : "Send inquiry"}
        </button>
      </fieldset>
      <div aria-live="assertive" aria-atomic="true">
        {error ? (
          <p id={errorId} role="alert" className="text-sm">
            {error} <a href={linkedin} className="underline">Connect on LinkedIn</a>.
          </p>
        ) : null}
      </div>
      <div aria-live="polite" aria-atomic="true">
        <p id={statusId} role="status" className="text-sm leading-relaxed">
          {success ? "Thanks. Your inquiry has been sent. I will be in touch." : sending ? "Sending your inquiry..." : ""}
        </p>
      </div>
    </form>
  );
}
