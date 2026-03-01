import Link from "next/link";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTABanner({
  title = "Ready to Start Your Project?",
  subtitle = "Get in touch for a free, no-obligation consultation and quote.",
  buttonText = "Get in Touch",
  buttonHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="bg-navy py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-cream/80">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={buttonHref}
            className="inline-block rounded-md bg-amber px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-amber-dark"
          >
            {buttonText}
          </Link>
          <a
            href="tel:+441234567890"
            className="inline-flex items-center gap-2 text-base font-medium text-cream/90 transition-colors hover:text-white"
          >
            <svg
              className="h-5 w-5"
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
            01onal 234 567 890
          </a>
        </div>
      </div>
    </section>
  );
}
