import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imagePlaceholder?: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  compact?: boolean;
}

export default function Hero({
  title,
  subtitle,
  imageSrc,
  imagePlaceholder,
  primaryCTA,
  secondaryCTA,
  compact = false,
}: HeroProps) {
  return (
    <section
      className={`relative flex items-center justify-center bg-navy-dark ${compact ? "min-h-[320px]" : "min-h-[600px] lg:min-h-[700px]"}`}
    >
      {/* Background image or placeholder */}
      {imageSrc ? (
        <>
          <img
            src={imageSrc}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-dark/60" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark to-navy opacity-90" />
          <div className="absolute inset-0 flex items-center justify-center text-cream/20 text-sm">
            [{imagePlaceholder}]
          </div>
        </>
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1
          className={`font-bold tracking-tight text-white ${compact ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl lg:text-6xl"}`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mx-auto mt-4 max-w-2xl text-cream/90 ${compact ? "text-base md:text-lg" : "text-lg md:text-xl"}`}
          >
            {subtitle}
          </p>
        )}
        {(primaryCTA || secondaryCTA) && (
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                className="inline-block rounded-md border-2 border-transparent bg-amber px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-amber-dark"
              >
                {primaryCTA.text}
              </Link>
            )}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="inline-block rounded-md border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                {secondaryCTA.text}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
