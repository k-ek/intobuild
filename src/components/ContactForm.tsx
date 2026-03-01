"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg bg-green-50 p-8 text-center">
        <svg
          className="mx-auto h-12 w-12 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="mt-4 text-lg font-semibold text-green-800">
          Message Sent!
        </h3>
        <p className="mt-2 text-green-700">
          Thank you for getting in touch. We&apos;ll get back to you within 24
          hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-green-600 underline hover:text-green-800"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-navy"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm text-gray-900 transition-colors focus:border-amber focus:ring-1 focus:ring-amber focus:outline-none"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-navy"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm text-gray-900 transition-colors focus:border-amber focus:ring-1 focus:ring-amber focus:outline-none"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-medium text-navy"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm text-gray-900 transition-colors focus:border-amber focus:ring-1 focus:ring-amber focus:outline-none"
            placeholder="Your phone number"
          />
        </div>
        <div>
          <label
            htmlFor="service"
            className="mb-1.5 block text-sm font-medium text-navy"
          >
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm text-gray-900 transition-colors focus:border-amber focus:ring-1 focus:ring-amber focus:outline-none"
          >
            <option value="">Select a service...</option>
            <option value="residential-building">Residential Building</option>
            <option value="house-extensions">House Extensions</option>
            <option value="loft-conversions">Loft Conversions</option>
            <option value="building-services">
              Building Services &amp; Renovations
            </option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-navy"
        >
          Your Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm text-gray-900 transition-colors focus:border-amber focus:ring-1 focus:ring-amber focus:outline-none"
          placeholder="Tell us about your project..."
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or contact us directly by
          phone.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-md bg-amber px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-amber-dark disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
