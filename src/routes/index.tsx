import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeIndianRupee,
  Building2,
  CarFront,
  Check,
  Clock3,
  Headphones,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Plane,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  TrainFront,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/kanpur-highway-hero.jpg";
import chauffeurImage from "@/assets/chauffeur-service.jpg";
import ctaImage from "@/assets/journey-cta.jpg";
import portraitsImage from "@/assets/customer-portraits.jpg";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/booking-form";
import { Reveal, SectionHeader, Stagger, StaggerItem } from "@/components/reveal";
import { FLEET, FLEET_FEATURES } from "@/lib/fleet";
import {
  DEFAULT_WA_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Premium Cab & Taxi Services in Kanpur | Anand Jaiswal Kanpur Travels" },
      {
        name: "description",
        content:
          "Book premium 24×7 cab & taxi in Kanpur — local, airport, railway & outstation. Swift Dzire, Ertiga, Innova Crysta, Sedan, SUV & Fortuner. Call 8303394828.",
      },
      { property: "og:title", content: "Premium Cab & Taxi Services in Kanpur" },
      {
        property: "og:description",
        content:
          "24×7 Local • Airport • Railway • Outstation Travel. Professional drivers, luxury fleet, WhatsApp booking.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const services = [
  { name: "Local Taxi", text: "Effortless city rides across Kanpur, whenever you need them.", icon: CarFront },
  { name: "Airport Pickup & Drop", text: "Flight-ready transfers with timely doorstep pickup.", icon: Plane },
  { name: "Railway Station Pickup", text: "Smooth station transfers with live coordination.", icon: TrainFront },
  { name: "Outstation Cab", text: "Comfortable intercity journeys with highway experts.", icon: Navigation },
  { name: "Corporate Travel", text: "Executive mobility for teams and business travel.", icon: Building2 },
  { name: "Wedding Car Rental", text: "Decorated luxury cars for your special celebration.", icon: Users },
];

const features = [
  { name: "Verified Drivers", text: "Courteous professionals you can trust", icon: ShieldCheck },
  { name: "GPS Enabled", text: "Trackable rides and smarter routes", icon: Navigation },
  { name: "On-Time Pickup", text: "Punctual service for every journey", icon: Clock3 },
  { name: "Honest Fare", text: "Clear pricing with exceptional value", icon: BadgeIndianRupee },
  { name: "Clean Vehicles", text: "Fresh, sanitized and road-ready", icon: Sparkles },
  { name: "24×7 Support", text: "Real assistance, day and night", icon: Headphones },
];

const reviews = [
  ["Rahul Verma", "Business Traveller", "Always on time and exceptionally professional. My airport transfers are now completely stress-free."],
  ["Priya Singh", "Kanpur", "The Innova was spotless and the driver was very courteous. A genuinely premium experience for my family."],
  ["Aman Gupta", "Corporate Client", "Reliable service for our team travel. Easy booking, transparent fare and consistently excellent cars."],
  ["Neha Sharma", "Family Traveller", "Our outstation trip to Lucknow was comfortable from start to finish. We felt safe throughout."],
  ["Rakesh Mishra", "Frequent Rider", "My first call whenever I need a cab in Kanpur. Responsive, punctual and always dependable."],
] as const;

function HomePage() {
  const featured = FLEET.slice(0, 4);

  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative flex min-h-[860px] items-center overflow-hidden bg-navy pt-20 text-primary-foreground">
        <img
          src={heroImage}
          alt="Luxury cars on a highway at sunset"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="hero-shade absolute inset-0" />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pb-24 pt-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 flex items-center gap-3 text-gold">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] sm:text-xs sm:tracking-[0.18em]">
                Kanpur&apos;s trusted travel partner
              </span>
            </div>
            <h1 className="text-balance font-display text-3xl font-extrabold leading-[1.12] sm:text-5xl lg:text-6xl">
              Premium Cab &amp; Taxi Services in Kanpur
            </h1>
            <p className="mt-6 text-base font-medium text-primary-foreground/85 sm:text-lg">
              24×7 Local <span className="mx-1.5 text-gold">•</span> Airport{" "}
              <span className="mx-1.5 text-gold">•</span> Railway{" "}
              <span className="mx-1.5 text-gold">•</span> Outstation Travel
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild variant="luxury" size="lg">
                <Link to="/book">
                  Book Now <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="glass" size="lg">
                <a href={PHONE_HREF}>
                  <Phone /> Call Now
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-whatsapp text-white shadow-luxury hover:-translate-y-0.5 hover:brightness-110"
              >
                <a href={DEFAULT_WA_HREF} target="_blank" rel="noreferrer">
                  <MessageCircle /> WhatsApp
                </a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-primary-foreground/70">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-gold" /> Verified drivers
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" /> Kanpur • UP
              </span>
              <span className="flex items-center gap-2">
                <HeartHandshake className="h-4 w-4 text-gold" /> 5000+ happy customers
              </span>
            </div>
          </motion.div>

          {/* Right: luxury Innova Crysta card */}
          <motion.div
            initial={{ opacity: 0, x: 44, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-2 lg:mt-0"
          >
            <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-luxury-lg backdrop-blur-xl">
              <img
                src={FLEET[2].image}
                alt="Toyota Innova Crysta black — luxury cab in Kanpur"
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="flex items-center justify-between gap-4 bg-navy/70 px-6 py-5 backdrop-blur-xl">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">
                    Flagship • Innova Crysta
                  </p>
                  <p className="mt-1 font-display text-xl font-bold">
                    Travel Like First Class
                  </p>
                </div>
                <Button asChild variant="gold" size="lg" className="shrink-0">
                  <Link to="/fleet">View Fleet</Link>
                </Button>
              </div>
            </div>
            <div className="absolute -bottom-6 left-4 rounded-xl border border-white/15 bg-navy/85 px-5 py-4 shadow-luxury backdrop-blur-xl lg:-left-6">
              <p className="font-display text-2xl font-bold text-gold">24×7</p>
              <p className="text-xs font-semibold text-primary-foreground/70">
                Airport • Railway • Outstation
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <Stagger className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border shadow-luxury md:grid-cols-4">
          {[
            ["5000+", "Happy Customers"],
            ["24×7", "Available"],
            ["100+", "Daily Trips"],
            ["Pro", "Professional Drivers"],
          ].map(([v, l]) => (
            <StaggerItem key={l} className="bg-card px-5 py-6 text-center">
              <p className="font-display text-2xl font-extrabold text-primary sm:text-3xl">
                {v}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {l}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* HOME BOOKING FORM */}
      <section className="relative overflow-hidden bg-navy py-20 text-primary-foreground sm:py-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(600px 300px at 15% 10%, rgba(245,158,11,0.16), transparent 60%), radial-gradient(700px 340px at 90% 90%, rgba(214,40,40,0.18), transparent 60%)",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-8">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-gold">
              <span className="h-px w-10 bg-gold" /> Instant booking
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-5xl">
              Book Your Cab Right Here
            </h2>
            <p className="mt-5 max-w-md leading-7 text-primary-foreground/65">
              Fill pickup, drop, date and vehicle — your booking opens directly
              in WhatsApp for instant confirmation. No app, no advance payment.
            </p>
            <ul className="mt-7 space-y-3.5 text-sm font-medium text-primary-foreground/80">
              {[
                "Same-day & advance bookings",
                "Transparent fare before the trip",
                "Verified driver + live location",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                    <Check className="h-4 w-4" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="glass" size="lg">
                <a href={PHONE_HREF}>
                  <Phone /> Call {PHONE_DISPLAY}
                </a>
              </Button>
              <Button asChild variant="gold" size="lg">
                <Link to="/book">Full Booking Page</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <BookingForm />
          </Reveal>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 sm:py-24">
        <SectionHeader
          kicker="What we do"
          title="Every Journey, Thoughtfully Covered"
          text="From a quick city ride to a long family tour — travel with the confidence of a professional service."
        />
        <Stagger className="mx-auto mt-12 grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {services.map(({ name, text, icon: Icon }, i) => (
            <StaggerItem
              key={name}
              className="luxury-card group rounded-xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-luxury-lg"
            >
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="font-display text-xs font-bold text-muted-foreground/50">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-bold">{name}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10 text-center">
          <Button asChild variant="luxury" size="lg">
            <Link to="/services">
              Explore All Services <ArrowRight />
            </Link>
          </Button>
        </Reveal>
      </section>

      {/* FLEET PREVIEW */}
      <section className="bg-surface py-20 sm:py-24">
        <SectionHeader
          kicker="Our fleet"
          title="A Car for Every Occasion"
          text="Well-maintained, sanitized cars with professional chauffeurs — pick your perfect ride."
        />
        <Stagger className="mx-auto mt-12 grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {featured.map((v) => (
            <StaggerItem
              key={v.slug}
              className="luxury-card group overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-luxury-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={v.image}
                  alt={`${v.model} ${v.color} — taxi in Kanpur`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-md bg-navy/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-gold backdrop-blur-md">
                  {v.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{v.name}</h3>
                  <CarFront className="h-5 w-5 text-primary" />
                </div>
                <p className="mt-1 text-xs font-semibold text-muted-foreground">
                  {v.model} • {v.color} • {v.seats}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {FLEET_FEATURES.slice(0, 4).map((f) => (
                    <span key={f} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                      <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                      {f}
                    </span>
                  ))}
                </div>
                <Link
                  to="/fleet"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary"
                >
                  View details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/fleet">View Full Fleet</Link>
          </Button>
        </Reveal>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-navy py-20 text-primary-foreground sm:py-24">
        <SectionHeader
          dark
          kicker="Why choose us"
          title="Excellence in Every Mile"
          text="The standards that make thousands of travellers trust us with the road ahead."
        />
        <Stagger className="mx-auto mt-12 grid max-w-7xl gap-px overflow-hidden rounded-xl border border-glass-border bg-glass-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ name, text, icon: Icon }) => (
            <StaggerItem key={name} className="group bg-navy p-7 transition-colors hover:bg-navy-soft">
              <Icon className="h-7 w-7 text-gold transition-transform group-hover:scale-110" />
              <h3 className="mt-5 text-lg font-bold">{name}</h3>
              <p className="mt-2 text-sm text-primary-foreground/60">{text}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <div className="mx-auto mt-12 grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <img
              src={chauffeurImage}
              alt="Professional chauffeur service in Kanpur"
              loading="lazy"
              className="aspect-[16/10] w-full rounded-xl object-cover shadow-luxury-lg"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="font-display text-2xl font-bold sm:text-3xl">
              Chauffeurs who treat every trip like a first-class flight
            </h3>
            <p className="mt-4 text-sm leading-7 text-primary-foreground/65">
              Background-verified, route-trained and courteous — our drivers help
              with luggage, drive smoothly on highways and keep you updated on
              WhatsApp throughout the journey.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="gold" size="lg">
                <Link to="/about">Our Story</Link>
              </Button>
              <Button asChild variant="glass" size="lg">
                <Link to="/book">Book Your Ride</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-surface py-20 sm:py-24">
        <SectionHeader
          kicker="Customer stories"
          title="Trusted Across Kanpur"
          text="Real 5-star experiences from people who choose comfort, care and punctuality."
        />
        <Stagger className="mx-auto mt-12 grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-5 lg:px-8">
          {reviews.map(([name, role, quote], i) => (
            <StaggerItem key={name} className="luxury-card flex flex-col rounded-xl p-6">
              <Quote className="h-7 w-7 text-primary/30" />
              <div className="mt-4 flex gap-0.5 text-gold" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">
                “{quote}”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="portrait-frame h-11 w-11 shrink-0 rounded-full bg-muted">
                  <img
                    src={portraitsImage}
                    alt={name}
                    loading="lazy"
                    className={`portrait-${i}`}
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-bold">{name}</h3>
                  <p className="truncate text-[11px] text-muted-foreground">{role}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-24 text-primary-foreground sm:py-28">
        <img
          src={ctaImage}
          alt="Premium SUV ready for an evening journey"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="cta-shade absolute inset-0" />
        <Reveal className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
              Your ride awaits
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
              Ready for Your Next Journey?
            </h2>
            <p className="mt-5 text-lg text-primary-foreground/75">
              Book your cab in just one tap — call {PHONE_DISPLAY} or WhatsApp us now.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="luxury" size="lg">
                <a href={DEFAULT_WA_HREF} target="_blank" rel="noreferrer">
                  <MessageCircle /> WhatsApp Booking
                </a>
              </Button>
              <Button asChild variant="glass" size="lg">
                <a href={PHONE_HREF}>
                  <Phone /> Call {PHONE_DISPLAY}
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
