import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
}

export default function ServiceCard({
  title,
  description,
  href,
  imageSrc,
}: ServiceCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md">
        <div className="relative h-56 bg-gradient-to-br from-cream-dark to-cream">
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-navy transition-colors group-hover:text-amber">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            {description}
          </p>
          <span className="mt-4 inline-flex items-center text-sm font-semibold text-amber transition-colors group-hover:text-amber-dark">
            Learn More
            <svg
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
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
          </span>
        </div>
      </div>
    </Link>
  );
}
