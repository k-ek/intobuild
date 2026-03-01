import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Into Build — trusted, accredited builders based in Brighton, serving East Sussex, West Sussex and London. Quality craftsmanship and reliable service.",
};

const values = [
  {
    title: "Quality Craftsmanship",
    description:
      "Every project is completed to the highest standard, using quality materials and skilled tradespeople who take pride in their work.",
    icon: (
      <svg className="h-7 w-7 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "Fully Accredited",
    description:
      "We're approved by Trading Standards, registered with TrustMark and members of the Federation of Master Builders — giving you complete peace of mind.",
    icon: (
      <svg className="h-7 w-7 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Local Expertise",
    description:
      "Based in Brighton with deep knowledge of local building regulations, planning requirements and architectural styles across Sussex and London.",
    icon: (
      <svg className="h-7 w-7 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden costs or surprises. We provide detailed, honest quotes and keep you informed at every stage of your project.",
    icon: (
      <svg className="h-7 w-7 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Into Build"
        subtitle="Trusted local builders delivering quality construction services across Brighton, Sussex and London."
        imageSrc="/images/hero-about.webp"
        compact
      />

      {/* Our Story */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-navy">Our Story</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Into Build was founded with a simple mission: to provide
                homeowners across Sussex and London with reliable, high-quality
                building services they can trust. We understand that your home is
                your most valuable asset, and any work carried out on it needs to
                be done right.
              </p>
              <p className="mt-3 text-lg leading-relaxed text-gray-700">
                Our team brings together experienced tradespeople who share a
                commitment to quality craftsmanship and honest communication. From
                the initial consultation through to project completion, we work
                closely with you to ensure every detail meets your expectations.
              </p>
              <p className="mt-3 text-lg leading-relaxed text-gray-700">
                Based in Brighton, we serve homeowners throughout East Sussex, West
                Sussex and London, bringing the same care and attention to every
                project regardless of size.
              </p>
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg bg-gradient-to-br from-cream-dark to-cream lg:h-[420px]">
              <img src="/images/about-story.webp" alt="Into Build team at work" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-cream-light py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-navy md:text-4xl">
              Why Choose Into Build
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
              We&apos;re committed to delivering exceptional results on every
              project. Here&apos;s what sets us apart.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="rounded-lg bg-white p-8 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber/10">
                  {value.icon}
                </div>
                <h3 className="mt-4 text-xl font-bold text-navy">{value.title}</h3>
                <p className="mt-2 leading-relaxed text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Areas */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">Where We Work</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            From our base in Brighton, we serve homeowners across{" "}
            <strong>Brighton &amp; Hove</strong>, <strong>East Sussex</strong>,{" "}
            <strong>West Sussex</strong> and <strong>London</strong>. Wherever
            you are, our team delivers the same high standard of work and
            personal service.
          </p>
          <Link
            href="/areas"
            className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-amber transition-colors hover:text-amber-dark"
          >
            View All Areas We Cover
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      <CTABanner
        title="Let's Discuss Your Project"
        subtitle="Get in touch for a free, no-obligation consultation."
        buttonText="Contact Us"
      />
    </>
  );
}
