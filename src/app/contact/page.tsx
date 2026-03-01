import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Into Build for a free quote on house extensions, loft conversions and building services in Brighton, Sussex and London.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Get In Touch"
        subtitle="We'd love to hear about your project. Contact us for a free, no-obligation consultation."
        imageSrc="/images/hero-contact.webp"
        compact
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy">Contact Information</h2>
              <p className="mt-3 text-gray-600">
                Get in touch by phone, email or fill in the form. We aim to
                respond to all enquiries within 24 hours.
              </p>
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-navy/60">Phone</h3>
                  <a href="tel:+441234567890" className="mt-1 flex items-center gap-3 text-lg font-medium text-navy transition-colors hover:text-amber">
                    <svg className="h-5 w-5 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    01234 567 890
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-navy/60">Email</h3>
                  <a href="mailto:info@intobuild.co.uk" className="mt-1 flex items-center gap-3 text-lg font-medium text-navy transition-colors hover:text-amber">
                    <svg className="h-5 w-5 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@intobuild.co.uk
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-navy/60">Address</h3>
                  <div className="mt-1 flex items-start gap-3 text-navy">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>123 Example Street<br />Brighton<br />BN1 1AA</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-navy/60">Hours</h3>
                  <div className="mt-1 space-y-1 text-navy">
                    <p>Monday – Friday: 8:00am – 6:00pm</p>
                    <p>Saturday: 9:00am – 1:00pm</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-navy/60">Follow Us</h3>
                  <div className="mt-2 flex gap-3">
                    <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-cream transition-colors hover:bg-amber">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                    </a>
                    <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-cream transition-colors hover:bg-amber">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="rounded-lg bg-cream-light p-8 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold text-navy">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-cream-light">
        <div className="flex h-80 items-center justify-center bg-gradient-to-br from-cream-dark to-cream text-sm text-navy/40">
          [Embedded Google Map of Brighton area — placeholder]
        </div>
      </section>
    </>
  );
}
