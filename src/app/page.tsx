import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TrustBar from "@/components/TrustBar";
import CTABanner from "@/components/CTABanner";
import ContactForm from "@/components/ContactForm";

const services = [
  {
    title: "Residential Building",
    description:
      "From new builds to structural alterations, we deliver high-quality residential construction across Sussex and London.",
    href: "/residential-building",
    imageSrc: "/images/service-residential.webp",
  },
  {
    title: "House Extensions",
    description:
      "Expand your living space with expertly designed rear, side and wrap-around extensions tailored to your home.",
    href: "/house-extensions",
    imageSrc: "/images/service-extensions.webp",
  },
  {
    title: "Loft Conversions",
    description:
      "Unlock your home's full potential with bespoke loft conversions, from dormers to hip-to-gable transformations.",
    href: "/loft-conversions",
    imageSrc: "/images/service-loft.webp",
  },
  {
    title: "Building Services",
    description:
      "Complete renovations, refurbishments, garage conversions and more — transforming properties to the highest standard.",
    href: "/building-services",
    imageSrc: "/images/service-building.webp",
  },
];

const areas = [
  { name: "Brighton & Hove", description: "Our home base" },
  { name: "East Sussex", description: "Lewes, Eastbourne & beyond" },
  { name: "West Sussex", description: "Worthing, Chichester & surrounds" },
  { name: "London", description: "Select areas across Greater London" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Quality Building Services Across Sussex & London"
        subtitle="House extensions, loft conversions and renovations by accredited local builders you can trust."
        imageSrc="/images/hero-home.webp"
        primaryCTA={{ text: "Get a Free Quote", href: "/contact" }}
        secondaryCTA={{ text: "View Our Services", href: "#services" }}
      />

      {/* Trust Bar */}
      <TrustBar />

      {/* Services */}
      <section id="services" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-navy md:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
              From extensions and loft conversions to full renovations, we
              deliver exceptional results on every project.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="bg-cream-light py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-navy md:text-4xl">
                About Into Build
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Based in Brighton, Into Build is a trusted building company
                delivering quality construction services across East Sussex, West
                Sussex and London. We pride ourselves on honest communication,
                skilled craftsmanship and completing every project to the highest
                standard.
              </p>
              <p className="mt-3 text-lg leading-relaxed text-gray-700">
                Whether you&apos;re looking to extend your home, convert your loft or
                completely renovate your property, our experienced team is here
                to bring your vision to life.
              </p>
              <div className="mt-6 flex flex-wrap gap-6">
                <div>
                  <p className="text-3xl font-bold text-amber">TSA</p>
                  <p className="text-sm text-gray-600">
                    Trading Standards
                    <br />
                    Approved
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-amber">FMB</p>
                  <p className="text-sm text-gray-600">
                    Federation of
                    <br />
                    Master Builders
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-amber">TM</p>
                  <p className="text-sm text-gray-600">
                    TrustMark
                    <br />
                    Registered
                  </p>
                </div>
              </div>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-amber transition-colors hover:text-amber-dark"
              >
                Learn More About Us
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg bg-gradient-to-br from-cream-dark to-cream lg:h-96">
              <img src="/images/about-team.webp" alt="Into Build team on site" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-navy md:text-4xl">
              Areas We Cover
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
              Proudly serving homeowners across Sussex and London from our
              Brighton base.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <Link
                key={area.name}
                href="/areas"
                className="group rounded-lg border border-cream-dark/50 bg-cream-light p-6 text-center transition-all hover:border-amber/30 hover:shadow-md"
              >
                <svg
                  className="mx-auto h-8 w-8 text-amber"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <h3 className="mt-3 text-lg font-bold text-navy">
                  {area.name}
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  {area.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing phrases / values */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber/20">
                <svg
                  className="h-7 w-7 text-amber"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">
                Your Vision, Our Mission
              </h3>
              <p className="mt-2 text-cream/70">
                We listen carefully to understand your goals and deliver results
                that exceed expectations.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber/20">
                <svg
                  className="h-7 w-7 text-amber"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">
                Trusted Local Builders
              </h3>
              <p className="mt-2 text-cream/70">
                Accredited by Trading Standards, TrustMark and the Federation of
                Master Builders.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber/20">
                <svg
                  className="h-7 w-7 text-amber"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">
                Transforming Spaces
              </h3>
              <p className="mt-2 text-cream/70">
                Building your dreams — from concept to completion, we transform
                houses into homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />

      {/* Contact section */}
      <section className="bg-cream-light py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-navy md:text-4xl">
                Get In Touch
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Ready to discuss your project? Fill in the form or contact us
                directly.
              </p>
              <div className="mt-8 space-y-4">
                <a
                  href="tel:+441234567890"
                  className="flex items-center gap-3 text-base text-navy transition-colors hover:text-amber"
                >
                  <svg
                    className="h-5 w-5 text-amber"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  01234 567 890
                </a>
                <a
                  href="https://wa.me/441234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base text-navy transition-colors hover:text-amber"
                >
                  <svg className="h-5 w-5 text-amber" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
                <a
                  href="mailto:hello@intobuild.co.uk"
                  className="flex items-center gap-3 text-base text-navy transition-colors hover:text-amber"
                >
                  <svg
                    className="h-5 w-5 text-amber"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  hello@intobuild.co.uk
                </a>
                <div className="flex items-center gap-3 text-base text-navy">
                  <svg
                    className="h-5 w-5 text-amber"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  123 Example Street, Brighton, BN1 1AA
                </div>
              </div>
              {/* Social */}
              <div className="mt-8">
                <p className="text-sm font-medium text-navy">Follow us</p>
                <div className="mt-3 flex gap-3">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-cream transition-colors hover:bg-amber"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-cream transition-colors hover:bg-amber"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
