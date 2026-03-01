import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: "Building Services",
  description:
    "Complete building services in Brighton, Sussex and London. Property renovations, refurbishments, garage conversions, kitchens, bathrooms and more.",
};

const services = [
  { title: "Property Renovations", description: "Breathe new life into your property with a comprehensive renovation. From updating tired interiors to reconfiguring layouts, we transform properties into modern, functional spaces while respecting their original character.", imageSrc: "/images/building-renovations.webp" },
  { title: "House Refurbishments", description: "Complete refurbishment services covering all aspects of your property — rewiring, replumbing, plastering, flooring, kitchens, bathrooms and decoration. Ideal for properties that need a full refresh or for newly purchased homes.", imageSrc: "/images/building-refurbishments.webp" },
  { title: "Garage Conversions", description: "Convert your garage into valuable living space — a home office, playroom, extra bedroom or self-contained annexe. Garage conversions are a cost-effective way to add usable space without extending your property's footprint.", imageSrc: "/images/building-garage.webp" },
  { title: "Kitchen & Bathroom Fitting", description: "From complete kitchen installations to luxury bathroom refurbishments, we manage all aspects including plumbing, electrics, tiling and finishing. We work with your chosen suppliers or can recommend trusted partners.", imageSrc: "/images/building-kitchen.webp" },
  { title: "General Building & Maintenance", description: "We also handle smaller building projects and maintenance work — from repointing and rendering to chimney repairs and damp proofing. No job is too small when it comes to maintaining and improving your home.", imageSrc: "/images/building-maintenance.webp" },
];

export default function BuildingServicesPage() {
  return (
    <>
      <Hero
        title="Building Services"
        subtitle="Renovations, refurbishments, garage conversions and more — comprehensive building services for your home."
        imageSrc="/images/hero-building.webp"
        primaryCTA={{ text: "Get a Free Quote", href: "/contact" }}
        compact
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">Complete Building Services</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            Beyond extensions and loft conversions, Into Build provides a full range of building services to help you maintain, improve and transform your home. From property renovations and garage conversions to kitchen fitting and general repairs, our skilled team handles it all.
          </p>
        </div>
      </section>

      <section className="bg-cream-light py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={service.title} className="grid items-center gap-8 lg:grid-cols-2">
                <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                  <h3 className="text-2xl font-bold text-navy">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-gray-700">{service.description}</p>
                  <a href="/contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber transition-colors hover:text-amber-dark">
                    Enquire About This Service
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                <div className={`relative h-64 overflow-hidden rounded-lg bg-gradient-to-br from-cream-dark to-cream ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <img src={service.imageSrc} alt={service.title} className="h-full w-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBar />
      <CTABanner title="Need Building Services?" subtitle="Whatever your project, get in touch for a free consultation and quote." />
    </>
  );
}
