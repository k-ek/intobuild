"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  { name: "Residential Building", href: "/residential-building" },
  { name: "House Extensions", href: "/house-extensions" },
  { name: "Loft Conversions", href: "/loft-conversions" },
  { name: "Building Services", href: "/building-services" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "#", children: services },
  { name: "Areas We Cover", href: "/areas" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-navy text-cream">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 text-xs sm:text-sm">
          <div className="flex items-center gap-4">
            <a
              href="tel:+441234567890"
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <svg
                className="h-3.5 w-3.5"
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
              href="mailto:info@intobuild.co.uk"
              className="hidden items-center gap-1.5 transition-colors hover:text-white sm:flex"
            >
              <svg
                className="h-3.5 w-3.5"
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
              info@intobuild.co.uk
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-cream/70 md:inline">
              Serving Brighton, Sussex &amp; London
            </span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Into Build"
            className="h-12 w-auto"
          />
          <div>
            <span className="text-lg font-bold tracking-tight text-navy">
              Into Build
            </span>
            <span className="hidden text-xs text-gray-500 sm:block">
              House Extensions &bull; Loft Conversions &bull; Renovations
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-cream-light hover:text-navy">
                  {link.name}
                  <svg
                    className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="absolute left-0 top-full w-56 rounded-md bg-white py-2 shadow-lg ring-1 ring-black/5">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-cream-light hover:text-navy"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-cream-light hover:text-navy"
              >
                {link.name}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="ml-3 rounded-md bg-amber px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-amber-dark"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-gray-700 hover:bg-cream-light lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-cream-dark/30 bg-white px-6 pb-6 pt-4 lg:hidden">
          <div className="space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.name}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-base font-medium text-gray-700 transition-colors hover:bg-cream-light"
                  >
                    {link.name}
                    <svg
                      className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {mobileServicesOpen && (
                    <div className="ml-4 space-y-1 border-l-2 border-cream-dark/30 pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-md px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-cream-light hover:text-navy"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-base font-medium text-gray-700 transition-colors hover:bg-cream-light"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
          <div className="mt-4 border-t border-cream-dark/30 pt-4">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block rounded-md bg-amber px-5 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-amber-dark"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+441234567890"
              className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-navy"
            >
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              01234 567 890
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
