import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CarFront,
  Check,
  Heart,
  Navigation,
  Plane,
  TrainFront,
} from "lucide-react";
import ctaImage from "@/assets/journey-cta.jpg";
import heroImage from "@/assets/kanpur-highway-hero.jpg";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { PageHero } from "@/components/site-layout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Local, Airport, Railway, Outstation, Corporate & Wedding Cabs Kanpur" },
      {
        name: "description",
        content:
          "Local taxi, airport pickup, railway pickup, outstation cab, corporate travel & wedding car rental in Kanpur. 24×7 premium cabs with verified drivers.",
      },
      { property: "og:title", content: "Cab Services in Kanpur" },
      {
        property: "og:description",
        content: "Local • Airport • Railway • Outstation • Corporate • Wedding cars.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ServicesPage,
});

const u = (id: string) =>
  `https://images.unsplash.com/${id}?q=80&w=1200&auto=format&fit=crop`;

const SERVICES = [
  {
    icon: CarFront,
    name: "Local Taxi",
    desc: "Hourly and full-day packages for shopping, meetings, hospital visits and city sightseeing across Kanpur — Kakadeo to Z Square, IIT to Jajmau.",
    features: ["4 / 8 hr packages", "AC hatchback to SUV", "Wait-time friendly", "Same-day booking"],
    image: u("photo-1449965408869-eaa3f722e40d"),
  },
  {
    icon: Plane,
    name: "Airport Pickup & Drop",
    desc: "Flight-tracked pickups from Kanpur (KNU) & Lucknow (LKO) airports with meet-and-greet, luggage help and buffer time for delays.",
    features: ["Flight tracking", "Meet & greet board", "Luggage assistance", "Night-charge transparent"],
    image: u("photo-1436491865332-7a61a109cc05"),
  },
  {
    icon: TrainFront,
    name: "Railway Pickup & Drop",
    desc: "On-platform coordination for Kanpur Central, Anwarganj & Panki — we track your train and wait at the right gate with live location sharing.",
    features: ["PNR / live train tracking", "Gate-side pickup", "Senior-citizen help", "Extra luggage space"],
    image: u("photo-1474487548417-781cb71495f3"),
  },
  {
    icon: Navigation,
    name: "Outstation Cab",
    desc: "One-way & round-trip cabs to Lucknow, Prayagraj, Varanasi, Agra, Delhi & Ayodhya with experienced highway chauffeurs and comfortable halts.",
    features: ["One-way & round trip", "Per-km honest billing", "Highway experts", "Night-halt clarity"],
    image: u("photo-1469854523086-cc02fe5d8800"),
  },
  {
    icon: Building2,
    name: "Corporate Travel",
    desc: "Monthly billing, GST invoices, employee pickups and executive airport runs for Kanpur businesses, factories and PSUs.",
    features: ["GST invoice", "Monthly billing", "Dedicated manager", "Executive sedans & SUVs"],
    image: u("photo-1486406146926-c627a92ad1ab"),
  },
  {
    icon: Heart,
    name: "Wedding Car Rental",
    desc: "Decorated Innova Crysta, Fortuner & sedans for baraat, bride-groom, and guest movement — with ribbons, on-time arrival and patient drivers.",
    features: ["Decorated cars", "Baraat & guest shuttles", "Full-day packages", "Premium photo-ready cars"],
    image: u("photo-1519741497674-611481863552"),
  },
];

function ServicesPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero
        kicker="Services"
        title="Complete Cab Solutions in Kanpur"
        text="Six signature services, one promise — a clean car, a courteous driver and a journey you'll want to repeat."
        image={heroImage}
      />

      <section className="mx-auto max-w-7xl space-y-8 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {SERVICES.map((s, i) => (
          <Reveal key={s.name}>
            <article
              className={`luxury-card grid overflow-hidden rounded-2xl lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative min-h-[260px] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <span className="absolute left-5 top-5 rounded-md bg-navy/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-gold">
                  {String(i + 1).padStart(2, "0")} • Premium
                </span>
              </div>
              <div className="p-7 sm:p-10">
                <s.icon className="h-8 w-8 text-primary" />
                <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
                  {s.name}
                </h2>
                <p className="mt-4 leading-7 text-muted-foreground">{s.desc}</p>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm font-medium">
                      <Check className="h-4 w-4 shrink-0 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button asChild variant="luxury" size="lg">
                    <Link to="/book">
                      Book {s.name} <ArrowRight />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/fleet">Choose Vehicle</Link>
                  </Button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="relative overflow-hidden bg-navy py-20 text-primary-foreground">
        <img src={ctaImage} alt="Book premium cab" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="cta-shade absolute inset-0" />
        <Reveal className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-2xl font-display text-3xl font-bold sm:text-4xl">
            Not sure which service fits? Tell us your plan on WhatsApp.
          </h2>
          <Button asChild variant="gold" size="lg" className="mt-7">
            <Link to="/book">
              Get Free Trip Advice <ArrowRight />
            </Link>
          </Button>
        </Reveal>
      </section>
    </main>
  );
}
