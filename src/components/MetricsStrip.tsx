const metrics = [
  { value: "$2.15M", label: "Enterprise portfolio", detail: "Across 30 clients" },
  { value: "105%", label: "Net revenue retention", detail: "NRR" },
  { value: "96%", label: "Gross revenue retention", detail: "GRR" },
  { value: "99%", label: "Logo retention", detail: "Client retention" },
];

export function MetricsStrip() {
  return (
    <section aria-labelledby="metrics-heading" className="border-b border-black">
      <h2
        id="metrics-heading"
        className="border-b border-black px-3 py-2 font-mono text-xs uppercase tracking-widest"
      >
        Connecteam / Enterprise customer success
      </h2>
      <dl className="grid grid-cols-2 md:grid-cols-4">
        {metrics.map((metric, index) => (
          <div
            key={metric.label}
            className={`flex flex-col px-4 py-6 md:px-6 ${index % 2 === 0 ? "border-r border-black" : ""} ${index < 2 ? "border-b border-black md:border-b-0" : ""} ${index === 1 ? "md:border-r md:border-black" : ""}`}
          >
            <dt className="order-2 mt-2 text-sm uppercase tracking-tight">{metric.label}</dt>
            <dd className="order-1 text-4xl tracking-tighter sm:text-5xl lg:text-6xl">{metric.value}</dd>
            <dd className="order-3 mt-1 font-mono text-xs uppercase">{metric.detail}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
