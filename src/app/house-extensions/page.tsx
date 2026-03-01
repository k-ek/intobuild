import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: "House Extensions",
  description:
    "Expert house extensions in Brighton, Sussex and London. Rear, side and wrap-around extensions to expand your living space. Free consultations available.",
};

const extensionTypes = [
  { title: "Rear Extensions", description: "The most popular choice for homeowners, rear extensions open up your ground floor living space, typically creating a larger kitchen-diner or open-plan family area that flows into the garden through bi-fold or sliding doors.", imageSrc: "/images/extensions-rear.webp" },
  { title: "Side Extensions", description: "Make use of unused side space to add a new room, utility area or expand your kitchen. Side extensions are often possible under permitted development, avoiding the need for full planning permission.", imageSrc: "/images/extensions-side.webp" },
  { title: "Wrap-Around Extensions", description: "Combining rear and side extensions for maximum impact. A wrap-around extension can dramatically transform your ground floor, creating a spacious, light-filled living area that changes how you use your home.", imageSrc: "/images/extensions-wraparound.webp" },
  { title: "Double-Storey Extensions", description: "Get the most from your investment with a double-storey extension, adding living space on two levels. Extra bedrooms, bathrooms or a home office above a new kitchen — the possibilities are endless.", imageSrc: "/images/extensions-double.webp" },
];

const benefits = [
  { title: "Add Living Space", description: "Create the room your family needs without the hassle and cost of moving house." },
  { title: "Increase Property Value", description: "A well-designed extension typically adds significant value to your home." },
  { title: "Tailored to You", description: "Every extension is designed around your lifestyle, needs and budget." },
  { title: "Planning Support", description: "We guide you through permitted development rules and planning applications." },
];

const galleryImages = [
  { src: "/images/gallery-extensions-1.webp", alt: "Rear extension with bi-fold doors" },
  { src: "/images/gallery-extensions-2.webp", alt: "Open-plan kitchen-diner in new extension" },
  { src: "/images/gallery-extensions-3.webp", alt: "Side extension on Victorian terrace" },
  { src: "/images/gallery-extensions-4.webp", alt: "Wrap-around extension, garden view" },
  { src: "/images/gallery-extensions-5.webp", alt: "Double-storey extension" },
  { src: "/images/gallery-extensions-6.webp", alt: "Extension interior with natural light" },
];

export default function HouseExtensionsPage() {
  return (
    <>
      <Hero
        title="House Extensions"
        subtitle="Expand your living space with expertly built extensions — from single-storey rears to full wrap-arounds."
        imageSrc="/images/hero-extensions.webp"
        primaryCTA={{ text: "Get a Free Quote", href: "/contact" }}
        compact
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-navy">Expert House Extensions in Sussex &amp; London</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                A house extension is one of the best investments you can make in your home. Whether you need a bigger kitchen, a new family room or extra bedrooms, extending your property gives you the space you need without the upheaval of moving.
              </p>
              <p className="mt-3 text-lg leading-relaxed text-gray-700">
                At Into Build, we handle every aspect of your extension project — from initial design and planning through to construction and finishing. Our team works closely with you to create an extension that complements your existing home and meets your family&apos;s needs.
              </p>
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg bg-gradient-to-br from-cream-dark to-cream lg:h-96">
              <img src="/images/extensions-overview.webp" alt="Beautiful finished house extension" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-light py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-navy md:text-4xl">Types of House Extension</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-gray-600">We build all types of residential extensions, tailored to your property and requirements.</p>
          <div className="mt-12 space-y-12">
            {extensionTypes.map((type, index) => (
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
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-navy md:text-4xl">Benefits of Extending Your Home</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber/10">
                  <svg className="h-7 w-7 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy">{benefit.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-light py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-navy md:text-4xl">Our Extension Projects</h2>
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
      <CTABanner title="Ready to Extend Your Home?" subtitle="Contact us for a free site visit and no-obligation quote." />
    </>
  );
}
