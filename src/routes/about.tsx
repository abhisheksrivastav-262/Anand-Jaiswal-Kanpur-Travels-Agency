import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Eye,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Target,
} from "lucide-react";
import chauffeurImage from "@/assets/chauffeur-service.jpg";
import heroImage from "@/assets/kanpur-highway-hero.jpg";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeader, Stagger, StaggerItem } from "@/components/reveal";
import { PageHero } from "@/components/site-layout";
import { DEFAULT_WA_HREF } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Anand Jaiswal Kanpur Travels — Trusted Cab Service Kanpur" },
      {
        name: "description",
        content:
          "Our story, mission & vision: safe, premium cab service in Kanpur with professional verified drivers, clean cars and 24×7 support.",
      },
      { property: "og:title", content: "About Anand Jaiswal Kanpur Travels" },
      {
        property: "og:description",
        content: "Company story, mission, vision, professional drivers & safety standards.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero
        kicker="About us"
        title="Your Trusted Travel Partner in Kanpur"
        text="A premium cab agency built on punctuality, safety and genuine hospitality — serving thousands of happy travellers every year."
        image={heroImage}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal className="relative">
            <img
              src={chauffeurImage}
              alt="Luxury chauffeur opening a premium cab door"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-luxury-lg"
            />
            <div className="absolute -bottom-5 right-4 w-48 rounded-xl border border-glass-border bg-navy p-5 text-primary-foreground shadow-luxury sm:right-6">
              <p className="font-display text-3xl font-bold text-gold">5000+</p>
              <p className="mt-1 text-xs font-semibold">Journeys completed with care</p>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="section-kicker">Company story</p>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                Born in Kanpur. Built for the road ahead.
              </h2>
              <p className="mt-6 leading-8 text-muted-foreground">
                Anand Jaiswal Kanpur Travels Agency Pvt. Ltd. started with a single
                car and a simple promise — be on time, drive safe, and treat every
                passenger like family. Today we run a premium fleet across Kanpur
                for local travel, airport and railway transfers, outstation trips,
                corporate movement and weddings.
              </p>
              <p className="mt-4 leading-8 text-muted-foreground">
                Every car is cleaned and checked before each trip, every driver is
                background-verified and route-trained, and every booking is
                confirmed personally on call or WhatsApp.
              </p>
            </Reveal>
            <Stagger className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Target, t: "Mission", d: "Safe, punctual, premium rides at honest fares — every single time." },
                { icon: Eye, t: "Vision", d: "To be Uttar Pradesh's most loved chauffeur-driven travel brand." },
              ].map(({ icon: Icon, t, d }) => (
                <StaggerItem key={t} className="luxury-card rounded-xl p-6">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 font-bold">{t}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{d}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <SectionHeader
          kicker="Drivers & safety"
          title="Professional Drivers. Serious Safety."
          text="The people behind the wheel and the standards behind every kilometre."
        />
        <Stagger className="mx-auto mt-12 grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            { icon: ShieldCheck, t: "Background-verified chauffeurs", d: "ID-verified, trained in city + highway routes, polite and helpful with luggage." },
            { icon: Award, t: "Safety-first standards", d: "Speed-governed driving, seatbelts for all, GPS-tracked trips and 24×7 trip support." },
            { icon: HeartHandshake, t: "Hospitality mindset", d: "Clean cabin, AC at your comfort, music of your choice and live WhatsApp updates." },
          ].map(({ icon: Icon, t, d }) => (
            <StaggerItem key={t} className="luxury-card rounded-xl p-7">
              <Icon className="h-7 w-7 text-primary" />
              <h3 className="mt-5 text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{d}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="luxury" size="lg">
            <Link to="/fleet">
              Meet the Fleet <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={DEFAULT_WA_HREF} target="_blank" rel="noreferrer">
              <MessageCircle /> Chat on WhatsApp
            </a>
          </Button>
        </Reveal>
      </section>
    </main>
  );
}
