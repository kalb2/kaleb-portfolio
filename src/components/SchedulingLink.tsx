import { site } from "@/data/site";

export function SchedulingLink() {
  if (!site.schedulingUrl) return null;
  return (
    <p className="mb-6">
      Prefer to talk? <a href={site.schedulingUrl} className="underline underline-offset-4">Book a call</a>.
    </p>
  );
}
