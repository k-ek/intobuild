import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Areas We Cover",
  description:
    "Into Build serves Brighton & Hove, East Sussex, West Sussex and London. Quality house extensions, loft conversions and building services near you.",
};

const areas = [
  {
    name: "Brighton & Hove",
    tagline: "Our Home Base",
    imageSrc: "/images/area-brighton.webp",
    description:
      "As Brighton-based builders, we know the local area inside out. From the Regency architecture of Hove to the Victorian terraces of Kemptown, we understand the unique character of Brighton & Hove homes and the best ways to extend, convert and renovate them. We're fully familiar with Brighton & Hove City Council planning requirements and conservation area guidelines.",
    towns: ["Central Brighton", "Hove", "Kemptown", "Rottingdean", "Saltdean", "Woodingdean", "Patcham", "Preston", "Hangleton", "Portslade"],
  },
  {
    name: "East Sussex",
    tagline: "Across the County",
    imageSrc: "/images/area-east-sussex.webp",
    description:
      "We serve homeowners throughout East Sussex, from the county town of Lewes to the coast at Eastbourne. Whether you're in a countryside cottage needing a sympathetic extension or a modern home requiring a loft conversion, our experienced team delivers quality building services across the region.",
    towns: ["Lewes", "Eastbourne", "Hastings", "Seaford", "Newhaven", "Peacehaven", "Crowborough", "Uckfield", "Hailsham", "Bexhill-on-Sea"],
  },
  {
    name: "West Sussex",
    tagline: "From Coast to Countryside",
    imageSrc: "/images/area-west-sussex.webp",
    description:
      "Our services extend across West Sussex, covering towns from Worthing and Shoreham along the coast to Crawley and Horsham further north. We bring the same quality craftsmanship and attention to detail to every project, no matter where you are in the county.",
    towns: ["Worthing", "Shoreham-by-Sea", "Lancing", "Chichester", "Crawley", "Horsham", "Burgess Hill", "Haywards Heath", "East Grinstead", "Littlehampton"],
  },
  {
    name: "London",
    tagline: "Select Areas",
    imageSrc: "/images/area-london.webp",
    description:
      "We also take on selected projects across London, particularly in South London and surrounding areas. If you're based in London and looking for quality builders for your extension, loft conversion or renovation project, get in touch to discuss your requirements.",
    towns: ["Croydon", "Bromley", "Lewisham", "Greenwich", "Lambeth", "Southwark", "Wandsworth", "Kingston upon Thames"],
  },
];

export default function AreasPage() {
  return (
    <>
      <Hero
        title="Areas We Cover"
        subtitle="Serving homeowners across Brighton, Sussex and London with quality building services."
        imageSrc="/images/hero-areas.webp"
        compact
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-navy md:text-4xl">Trusted Builders Near You</h2>
            <p className="mt-4 text-lg text-gray-600">
              Based in Brighton, Into Build delivers quality house extensions,
              loft conversions, renovations and building services across a wide
              area. No matter where you are in Sussex or London, we bring the
              same commitment to quality and professionalism.
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {areas.map((area, index) => (
              <div key={area.name} className="grid items-start gap-10 lg:grid-cols-2">
                <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="inline-block rounded-full bg-amber/10 px-4 py-1.5 text-sm font-medium text-amber">
                    {area.tagline}
                  </div>
                  <h3 className="mt-3 text-2xl font-bold text-navy">{area.name}</h3>
                  <p className="mt-3 leading-relaxed text-gray-700">{area.description}</p>
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-navy/60">Areas include</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {area.towns.map((town) => (
                        <span key={town} className="rounded-full bg-cream-light px-3 py-1 text-sm text-navy">{town}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={`relative h-64 overflow-hidden rounded-lg bg-gradient-to-br from-cream-dark to-cream lg:h-80 ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <img src={area.imageSrc} alt={area.name} className="h-full w-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Based in Your Area?"
        subtitle="Contact us today for a free consultation and quote for your project."
        buttonText="Get a Free Quote"
      />
    </>
  );
}
