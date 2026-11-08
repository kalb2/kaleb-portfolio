"use client";

import { useId, useState, type FormEvent } from "react";
import { site } from "@/data/site";
import { buildInquiryMailto, inquiryTypes, type InquiryType } from "@/lib/inquiry";

type InquiryFormProps = { defaultType?: InquiryType };
const inputClass = "mt-2 block w-full rounded-none border border-black bg-white p-3 text-base font-normal normal-case tracking-normal";
const labelClass = "block font-mono text-xs uppercase tracking-widest";

export function InquiryForm({ defaultType = "Job opportunity" }: InquiryFormProps) {
  const id = useId();
  const [draftHref, setDraftHref] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const type = String(data.get("type")) as InquiryType;
    if (!name || !message) {
      setError("Please add your name and a message, not just spaces.");
      (form.elements.namedItem(!name ? "name" : "message") as HTMLElement)?.focus();
      return;
    }
    if (!inquiryTypes.includes(type)) return;
    setError("");
    const href = buildInquiryMailto({ name, email, type, message });
    setDraftHref(href);
    window.location.assign(href);
  }

  return (
    <form
      action={`mailto:${site.email}`}
      method="get"
      aria-label="Send an inquiry"
      aria-describedby={`${id}-note`}
      onSubmit={handleSubmit}
      onChange={() => { setDraftHref(""); setError(""); }}
      className="space-y-6"
    >
      <p id={`${id}-note`} className="text-sm leading-relaxed">
        This opens a draft in your email app. Nothing is sent or stored by this site.
        Review the draft and send it there. An email app must be set up on your device.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className={labelClass} htmlFor={`${id}-name`}>
          Name (required)
          <input className={inputClass} id={`${id}-name`} name="name" autoComplete="name" required maxLength={100} />
        </label>
        <label className={labelClass} htmlFor={`${id}-email`}>
          Email (required)
          <input className={inputClass} id={`${id}-email`} name="email" type="email" autoComplete="email" required maxLength={254} />
        </label>
      </div>
      <label className={labelClass} htmlFor={`${id}-type`}>
        Inquiry type
        <select className={inputClass} id={`${id}-type`} name="type" defaultValue={defaultType}>
          {inquiryTypes.map((type) => <option key={type}>{type}</option>)}
        </select>
      </label>
      <label className={labelClass} htmlFor={`${id}-message`}>
        Message (required)
        <textarea className={inputClass} id={`${id}-message`} name="message" rows={5} required maxLength={3000} />
      </label>
      {error ? <p role="alert" className="text-sm">{error}</p> : null}
      <button type="submit" className="border border-black bg-black px-5 py-3 font-mono text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black">
        Open email draft
      </button>
      <p role="status" className="text-sm leading-relaxed">
        {draftHref ? <>Draft prepared, not sent. If your email app did not open, <a href={draftHref} className="underline">open the prepared draft</a> or email <a href={`mailto:${site.email}`} className="underline">{site.email}</a>.</> : null}
      </p>
      <noscript><p>Email <a href={`mailto:${site.email}`} className="underline">{site.email}</a> directly. The draft builder needs JavaScript.</p></noscript>
    </form>
  );
}
