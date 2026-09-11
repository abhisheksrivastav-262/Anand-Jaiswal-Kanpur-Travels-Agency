import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Clock3, Phone, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/journey-cta.jpg";
import { BookingForm } from "@/components/booking-form";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/site-layout";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Cab in Kanpur — Instant WhatsApp Booking | Anand Jaiswal Travels" },
      {
        name: "description",
        content:
          "Book your cab in Kanpur in 30 seconds. Fill pickup, drop, date & vehicle — confirm instantly on WhatsApp. Local, airport, railway & outstation.",
      },
      { property: "og:title", content: "Book Cab in Kanpur" },
      {
        property: "og:description",
        content: "No app needed — WhatsApp booking with instant confirmation.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero
        kicker="Book cab"
        title="Book Your Cab in 30 Seconds"
        text="No app, no advance — fill the form and confirm instantly on WhatsApp."
        image={heroImage}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="h-fit rounded-2xl border border-glass-border bg-navy p-8 text-primary-foreground shadow-luxury">
            <h2 className="font-display text-2xl font-bold">Why book with us?</h2>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-primary-foreground/75">
              {[
                "Instant confirmation on WhatsApp — no waiting",
                "Transparent fare shared before the trip",
                "Verified driver + live location sharing",
                "Clean, sanitized car with AC & music",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-3 rounded-xl border border-glass-border bg-glass p-5">
              <p className="flex items-center gap-2 text-sm font-bold">
                <CalendarDays className="h-4 w-4 text-gold" /> Same-day & advance bookings
              </p>
              <p className="flex items-center gap-2 text-sm font-bold">
                <Clock3 className="h-4 w-4 text-gold" /> 24×7 pickup — even 3 AM airport runs
              </p>
              <a href={PHONE_HREF} className="mt-2 inline-flex items-center gap-2 text-lg font-extrabold text-gold">
                <Phone className="h-5 w-5" /> {PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <BookingForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
