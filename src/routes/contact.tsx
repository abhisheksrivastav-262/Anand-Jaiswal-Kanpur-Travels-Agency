import { createFileRoute } from "@tanstack/react-router";
import { Building2, Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import heroImage from "@/assets/kanpur-highway-hero.jpg";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeader, Stagger, StaggerItem } from "@/components/reveal";
import { PageHero } from "@/components/site-layout";
import {
  BUSINESS_NAME,
  CITY,
  DEFAULT_WA_HREF,
  HOURS,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — 24×7 Cab Booking in Kanpur | Anand Jaiswal Travels" },
      {
        name: "description",
        content:
          "Call or WhatsApp 8303394828 for 24×7 cab booking in Kanpur. Local, airport, railway & outstation. Visit us in Kanpur, Uttar Pradesh.",
      },
      { property: "og:title", content: "Contact Anand Jaiswal Kanpur Travels" },
      {
        property: "og:description",
        content: "Phone, WhatsApp, location, hours + Kanpur map.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const cards = [
    { icon: Building2, label: "Business Name", value: BUSINESS_NAME, href: undefined },
    { icon: Phone, label: "Phone / Call", value: `+91 ${PHONE_DISPLAY}`, href: PHONE_HREF },
    { icon: MessageCircle, label: "WhatsApp", value: `Chat — ${PHONE_DISPLAY}`, href: DEFAULT_WA_HREF },
    { icon: MapPin, label: "Location", value: CITY, href: undefined },
    { icon: Clock3, label: "Working Hours", value: HOURS, href: undefined },
  ] as const;

  return (
    <main className="bg-background text-foreground">
      <PageHero
        kicker="Contact"
        title="Let's Get You Moving"
        text="Call or message us anytime — a real person confirms every booking, day or night."
        image={heroImage}
      />

      <section className="py-14 sm:py-18">
        <SectionHeader
          kicker="Reach us"
          title="One Call Away, Around the Clock"
          text="Tap any card to call or WhatsApp instantly."
        />
        <Stagger className="mx-auto mt-12 grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {cards.map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <>
                <Icon className="h-6 w-6 text-primary" />
                <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  {label}
                </p>
                <p className="mt-2 text-sm font-bold leading-6">{value}</p>
              </>
            );
            return (
              <StaggerItem key={label} className="luxury-card rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-luxury-lg">
                {href ? (
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </StaggerItem>
            );
          })}
          <div className="flex flex-col justify-center rounded-xl border border-glass-border bg-navy p-6 text-primary-foreground shadow-luxury">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">
              Instant booking
            </p>
            <div className="mt-4 grid gap-2.5">
              <Button asChild variant="luxury" size="lg">
                <a href={PHONE_HREF}>
                  <Phone /> Call Now
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] text-white hover:brightness-110"
              >
                <a href={DEFAULT_WA_HREF} target="_blank" rel="noreferrer">
                  <MessageCircle /> WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </Stagger>

        <Reveal className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-border shadow-luxury">
            <iframe
              title="Anand Jaiswal Kanpur Travels — Kanpur map"
              src="https://www.google.com/maps?q=Kanpur,Uttar+Pradesh&output=embed"
              className="h-[380px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
