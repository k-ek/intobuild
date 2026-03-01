import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: "Residential Building",
  description:
    "Professional residential building services in Brighton, Sussex and London. New builds, structural work and quality construction by accredited local builders.",
};

const services = [
  { title: "New Builds", description: "Complete residential new builds from foundations to finish, working with architects and planners to deliver your dream home." },
  { title: "Structural Alterations", description: "Removing load-bearing walls, installing steels and reconfiguring layouts to open up your living space safely and effectively." },
  { title: "Groundworks & Foundations", description: "Expert groundwork services including foundations, drainage, underpinning and all below-ground construction work." },
  { title: "Brickwork & Blockwork", description: "Quality brickwork and blockwork for extensions, garden walls, boundary walls and all types of masonry construction." },
];

const process = [
  { step: "01", title: "Initial Consultation", description: "We visit your property, discuss your requirements and provide expert advice on the best approach for your project." },
  { step: "02", title: "Design & Planning", description: "We work with architects and handle planning applications where needed, ensuring everything is in order before work begins." },
  { step: "03", title: "Detailed Quotation", description: "You receive a clear, itemised quote with no hidden costs so you know exactly what to expect." },
  { step: "04", title: "Construction", description: "Our skilled team carries out the work to the highest standards, keeping you informed at every stage." },
  { step: "05", title: "Completion & Handover", description: "We ensure everything meets your expectations and all sign-offs are in place before handover." },
];

const galleryImages = [
  { src: "/images/gallery-residential-1.webp", alt: "Modern new build exterior" },
  { src: "/images/gallery-residential-2.webp", alt: "Structural alteration with steel beams" },
  { src: "/images/gallery-residential-3.webp", alt: "Completed residential project" },
];

export default function ResidentialBuildingPage() {
  return (
    <>
      <Hero
        title="Residential Building"
        subtitle="Professional construction services for new builds, structural work and residential projects across Sussex and London."
        imageSrc="/images/hero-residential.webp"
        primaryCTA={{ text: "Get a Free Quote", href: "/contact" }}
        compact
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-navy">Quality Residential Construction</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Whether you&apos;re building from the ground up or making significant structural changes to your existing property, Into Build delivers professional residential construction services you can rely on.
              </p>
              <p className="mt-3 text-lg leading-relaxed text-gray-700">
                Our experienced team handles everything from foundations and groundwork through to brickwork, roofing and internal finishing — managing the entire process so you don&apos;t have to.
              </p>
              <p className="mt-3 text-lg leading-relaxed text-gray-700">
                As accredited members of the Federation of Master Builders and Trading Standards approved, you can trust that every project meets the highest standards of quality and compliance.
              </p>
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg bg-gradient-to-br from-cream-dark to-cream lg:h-96">
              <img src="/images/residential-overview.webp" alt="Completed residential building project" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-light py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-navy md:text-4xl">What We Offer</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="rounded-lg bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-navy">{service.title}</h3>
                <p className="mt-2 leading-relaxed text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-3xl font-bold text-navy md:text-4xl">Our Process</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-gray-600">From first contact to project completion, here&apos;s how we work.</p>
          <div className="mt-12 space-y-8">
            {process.map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber text-lg font-bold text-white">{item.step}</div>
                <div>
                  <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                  <p className="mt-1 leading-relaxed text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-light py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-navy md:text-4xl">Our Work</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img) => (
              <div key={img.src} className="relative h-64 overflow-hidden rounded-lg bg-gradient-to-br from-cream-dark to-cream">
                <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBar />
      <CTABanner title="Planning a Residential Building Project?" subtitle="Get in touch for a free consultation and detailed quote." />
    </>
  );
}
