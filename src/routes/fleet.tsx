import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Check, Snowflake, Music4, Luggage, UserCheck } from "lucide-react";
import heroImage from "@/assets/premium-fleet.jpg";
import { Button } from "@/components/ui/button";
import { SectionHeader, Stagger, StaggerItem } from "@/components/reveal";
import { PageHero } from "@/components/site-layout";
import { FLEET } from "@/lib/fleet";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Our Fleet — Swift Dzire, Ertiga, Innova Crysta, Sedan, SUV, Fortuner | Kanpur Taxi" },
      {
        name: "description",
        content:
          "Choose your perfect cab in Kanpur: Swift Dzire, Ertiga, Innova Crysta, Honda City Sedan, XUV700 SUV & Fortuner Premium SUV. AC, music, luggage space & professional driver.",
      },
      { property: "og:title", content: "Premium Fleet in Kanpur" },
      {
        property: "og:description",
        content: "Exact-model fleet with photos, seating, AC, music system & driver included.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: FleetPage,
});

const AMENITIES = [
  { icon: BadgeCheck, label: "4–7 Seater" },
  { icon: Snowflake, label: "AC" },
  { icon: Music4, label: "Music System" },
  { icon: Luggage, label: "Luggage Space" },
  { icon: UserCheck, label: "Professional Driver" },
];

function FleetPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero
        kicker="Fleet"
        title="Exact Models. Real Photos. No Surprises."
        text="What you book is what arrives — silver Dzire, white Ertiga, black Innova Crysta, white Honda City, black XUV700 and white Fortuner."
        image={heroImage}
      />

      <section className="py-16 sm:py-20">
        <SectionHeader
          kicker="6 premium vehicles"
          title="Pick Your Perfect Ride"
          text="Every car is deep-cleaned, AC-checked and driven by a verified chauffeur."
        />
        <Stagger className="mx-auto mt-12 grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {FLEET.map((v) => (
            <StaggerItem
              key={v.slug}
              className="luxury-card group flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-luxury-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={v.image}
                  alt={`${v.model} in ${v.color} colour — available for booking in Kanpur`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-md bg-navy/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-gold">
                  {v.tag}
                </span>
                <span className="absolute bottom-4 right-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-navy shadow">
                  {v.seats}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-display text-xl font-bold">{v.name}</h2>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  {v.model} • {v.color}
                </p>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{v.desc}</p>
                <div className="mt-5 grid grid-cols-2 gap-2 border-t border-border pt-5">
                  {AMENITIES.map(({ icon: Icon, label }) => (
                    <span key={label} className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                      <Icon className="h-4 w-4 shrink-0 text-primary" />
                      {label}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-2.5">
                  <Button asChild variant="luxury" className="flex-1">
                    <a
                      href={waLink(`Hi Anand Jaiswal Kanpur Travels, I want to book ${v.model} (${v.color}). Please share fare & availability.`)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Book Now <ArrowRight />
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <Link to="/book">Customise Trip</Link>
                  </Button>
                </div>
                <p className="mt-3 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <Check className="h-3.5 w-3.5 text-green-600" /> Sanitized before every trip
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </main>
  );
}
