import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: "Loft Conversions",
  description:
    "Expert loft conversions in Brighton, Sussex and London. Dormer, hip-to-gable, mansard and Velux conversions. Unlock your home's full potential.",
};

const conversionTypes = [
  { title: "Dormer Loft Conversions", description: "The most common type of loft conversion, a dormer extends out from the existing roof slope to create additional headroom and floor space. Ideal for most property types, dormers provide a practical, cost-effective way to add a bedroom, bathroom or home office.", imageSrc: "/images/loft-dormer.webp" },
  { title: "Hip-to-Gable Conversions", description: "Perfect for semi-detached and detached homes with hipped roofs. By extending the hip to a vertical gable wall, you significantly increase the usable loft space. Often combined with a rear dormer for maximum room.", imageSrc: "/images/loft-hip-to-gable.webp" },
  { title: "Mansard Conversions", description: "A mansard conversion alters the roof structure to create an almost vertical wall with a flat roof on top, maximising the internal space. Popular in terraced properties and conservation areas, mansard conversions typically require planning permission.", imageSrc: "/images/loft-mansard.webp" },
  { title: "Velux / Roof Light Conversions", description: "The simplest and most affordable option, a Velux conversion doesn't alter the roof structure — instead, roof windows are installed to bring in light and ventilation. Ideal when your loft already has good headroom and you want to keep costs down.", imageSrc: "/images/loft-velux.webp" },
];

const galleryImages = [
  { src: "/images/gallery-loft-1.webp", alt: "Dormer conversion exterior" },
  { src: "/images/gallery-loft-2.webp", alt: "Loft bedroom with en-suite" },
  { src: "/images/gallery-loft-3.webp", alt: "Loft home office with Velux windows" },
  { src: "/images/gallery-loft-4.webp", alt: "Staircase leading to converted loft" },
  { src: "/images/gallery-loft-5.webp", alt: "Hip-to-gable conversion exterior" },
  { src: "/images/gallery-loft-6.webp", alt: "Loft bathroom with skylight" },
];

export default function LoftConversionsPage() {
  return (
    <>
      <Hero
        title="Loft Conversions"
        subtitle="Unlock your home's potential with a bespoke loft conversion — extra space without extending your footprint."
        imageSrc="/images/hero-loft.webp"
        primaryCTA={{ text: "Get a Free Quote", href: "/contact" }}
        compact
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-navy">Loft Conversions in Sussex &amp; London</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                A loft conversion is one of the smartest ways to add valuable living space to your home. By converting your unused loft into a bedroom, bathroom, home office or playroom, you can transform dead space into your favourite room.
              </p>
              <p className="mt-3 text-lg leading-relaxed text-gray-700">
                Into Build specialises in all types of loft conversions, from straightforward Velux installations to complex mansard and hip-to-gable conversions. We manage the entire project including structural calculations, building regulations and all trades.
              </p>
              <p className="mt-3 text-lg leading-relaxed text-gray-700">
                Many loft conversions can be carried out under permitted development without the need for planning permission. We&apos;ll advise you on the best options for your property.
              </p>
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg bg-gradient-to-br from-cream-dark to-cream lg:h-96">
              <img src="/images/loft-overview.webp" alt="Spacious converted loft with en-suite" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-light py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-navy md:text-4xl">Types of Loft Conversion</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-gray-600">We build every type of loft conversion, recommending the best option based on your property, budget and requirements.</p>
          <div className="mt-12 space-y-12">
            {conversionTypes.map((type, index) => (
              <div key={type.title} className="grid items-center gap-8 lg:grid-cols-2">
                <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                  <h3 className="text-2xl font-bold text-navy">{type.title}</h3>
                  <p className="mt-3 leading-relaxed text-gray-700">{type.description}</p>
                </div>
                <div className={`relative h-64 overflow-hidden rounded-lg bg-gradient-to-br from-cream-dark to-cream ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <img src={type.imageSrc} alt={type.title} className="h-full w-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-lg border border-amber/20 bg-amber/5 p-8">
            <div className="flex gap-4">
              <svg className="h-8 w-8 shrink-0 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              <div>
                <h3 className="text-xl font-bold text-navy">Planning Permission &amp; Building Regulations</h3>
                <p className="mt-2 leading-relaxed text-gray-700">
                  Many loft conversions fall under permitted development and don&apos;t require planning permission, but all conversions need building regulations approval. We handle the entire process for you — from structural calculations and party wall agreements to building control sign-off — so you can focus on choosing your finishes and furnishings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-light py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-navy md:text-4xl">Our Loft Conversions</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img) => (
              <div key={img.src} className="relative h-56 overflow-hidden rounded-lg bg-gradient-to-br from-cream-dark to-cream">
                <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBar />
      <CTABanner title="Thinking About a Loft Conversion?" subtitle="Book a free consultation to discuss your options and get a no-obligation quote." />
    </>
  );
}
