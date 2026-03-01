export default function TrustBar() {
  const accreditations = [
    {
      name: "Trading Standards Approved",
      src: "/images/accreditations/trading-standards.png",
    },
    {
      name: "TrustMark",
      src: "/images/accreditations/trustmark.png",
    },
    {
      name: "Federation of Master Builders",
      src: "/images/accreditations/fmb.png",
    },
  ];

  return (
    <section className="border-y border-cream-dark/50 bg-cream-light py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-navy/60">
          Accredited &amp; Trusted
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {accreditations.map((acc) => (
            <div key={acc.name} className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-28 items-center justify-center rounded border border-cream-dark bg-white">
                <img
                  src={acc.src}
                  alt={acc.name}
                  className="max-h-14 max-w-24 object-contain"
                />
              </div>
              <span className="text-xs text-navy/60">{acc.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
