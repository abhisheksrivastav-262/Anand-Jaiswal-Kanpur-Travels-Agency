import { Link, useRouterState } from "@tanstack/react-router";
import {
  Clock3,
  Heart,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  BUSINESS_NAME,
  CITY,
  DEFAULT_WA_HREF,
  HOURS,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/site";
import { cn } from "@/lib/utils";

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Fleet", to: "/fleet" },
  { label: "Book Cab", to: "/book" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

export function BrandMark() {
  return (
    <span className="flex min-w-0 items-center gap-2.5" title="Anand Jaiswal Kanpur Travels Agency Pvt. Ltd.">
      <img
        src="/logo.jpeg"
        alt="Anand Jaiswal Kanpur Travels Agency Pvt. Ltd. logo"
        className="h-10 w-10 shrink-0 rounded-full bg-white object-cover shadow-luxury ring-2 ring-gold/70 sm:h-11 sm:w-11"
      />
      <span className="min-w-0 leading-none">
        <span className="block truncate font-display text-[13px] font-bold text-current sm:text-sm">
          ANAND JAISWAL
        </span>
        <span className="mt-1 block truncate text-[9px] font-semibold uppercase tracking-[0.14em] text-gold sm:text-[10px]">
          Kanpur Travels Agency
        </span>
      </span>
    </span>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const transparent = !scrolled && pathname === "/";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        transparent
          ? "border-b border-white/10 bg-navy/40 text-primary-foreground backdrop-blur-md"
          : "border-b border-glass-border bg-navy/90 text-primary-foreground shadow-luxury backdrop-blur-xl"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="Anand Jaiswal Kanpur Travels home">
          <BrandMark />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "text-xs font-semibold transition-colors",
                pathname === l.to
                  ? "text-gold"
                  : "text-primary-foreground/75 hover:text-primary-foreground"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Button asChild variant="gold" size="lg" className="hidden xl:inline-flex">
            <a href={PHONE_HREF}>
              <Phone /> Call Now
            </a>
          </Button>
          <Button asChild variant="luxury" size="lg" className="hidden md:inline-flex">
            <Link to="/book">Book Cab</Link>
          </Button>
          <Button
            variant="glass"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav
          className="border-t border-glass-border bg-navy px-4 py-5 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto grid max-w-7xl gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "rounded-md px-3 py-3 text-sm font-semibold",
                  pathname === l.to
                    ? "bg-glass text-gold"
                    : "text-primary-foreground/80 hover:bg-glass"
                )}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={PHONE_HREF}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-gold px-3 py-3 text-sm font-bold text-gold-foreground"
            >
              <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy pb-24 pt-14 text-primary-foreground md:pb-8">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <BrandMark />
          <p className="mt-5 max-w-md text-sm leading-6 text-primary-foreground/55">
            Premium cab and taxi services in Kanpur, available 24 hours a day for
            every journey that matters.
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
            {HOURS}
          </p>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
            Quick Links
          </h3>
          <div className="mt-5 grid gap-3">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="w-fit text-sm text-primary-foreground/60 hover:text-primary-foreground"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
            Services
          </h3>
          <div className="mt-5 grid gap-3 text-sm text-primary-foreground/60">
            {[
              "Local Taxi",
              "Airport Pickup & Drop",
              "Railway Pickup",
              "Outstation Cab",
              "Corporate Travel",
              "Wedding Car Rental",
            ].map((s) => (
              <Link key={s} to="/services" className="w-fit hover:text-primary-foreground">
                {s}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
            Contact
          </h3>
          <p className="mt-5 text-xs font-semibold leading-5 text-primary-foreground/60">
            {BUSINESS_NAME}
          </p>
          <a
            href={PHONE_HREF}
            className="mt-3 flex items-center gap-3 text-lg font-bold hover:text-gold"
          >
            <Phone className="h-5 w-5 text-primary" />
            {PHONE_DISPLAY}
          </a>
          <p className="mt-3 flex items-start gap-2 text-xs leading-5 text-primary-foreground/55">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            {CITY}
          </p>
          <a
            href={DEFAULT_WA_HREF}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-md border border-glass-border bg-glass px-4 py-2.5 text-sm font-bold hover:bg-glass-strong"
          >
            <MessageCircle className="h-4 w-4 text-green-400" /> WhatsApp Booking
          </a>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-glass-border px-4 pt-6 text-xs text-primary-foreground/45 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© 2026 {BUSINESS_NAME}</p>
        <p className="flex items-center gap-1">
          Made with <Heart className="h-3.5 w-3.5 fill-primary text-primary" /> for
          Kanpur
        </p>
      </div>
    </footer>
  );
}

export function FloatingButtons() {
  return (
    <>
      <a
        href={DEFAULT_WA_HREF}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-20 right-4 z-40 grid h-14 w-14 animate-float-soft place-items-center rounded-full bg-whatsapp text-white shadow-luxury-lg transition-transform hover:scale-105 md:bottom-6 md:right-6"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={PHONE_HREF}
        aria-label="Call now"
        className="fixed bottom-[152px] right-5 z-40 hidden h-12 w-12 place-items-center rounded-full bg-gold text-gold-foreground shadow-luxury transition-transform hover:scale-105 md:grid md:bottom-[92px] md:right-7"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={PHONE_HREF}
        className="fixed inset-x-0 bottom-0 z-40 flex h-14 items-center justify-center gap-2 bg-primary text-sm font-bold text-primary-foreground shadow-luxury md:hidden"
      >
        <Phone className="h-4 w-4" /> Call Now — {PHONE_DISPLAY}
      </a>
    </>
  );
}

export function PageHero({
  kicker,
  title,
  text,
  image,
}: {
  kicker: string;
  title: string;
  text: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy pb-16 pt-36 text-primary-foreground sm:pt-40">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-shade absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-gold">
          <span className="h-px w-10 bg-gold" />
          {kicker}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-[1.12] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base text-primary-foreground/75">{text}</p>
        <p className="mt-6 flex items-center gap-2 text-xs font-semibold text-primary-foreground/60">
          <Clock3 className="h-4 w-4 text-gold" /> {HOURS} • {CITY}
        </p>
      </div>
    </section>
  );
}
