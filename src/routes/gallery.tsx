import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImage from "@/assets/premium-fleet.jpg";
import { Reveal, SectionHeader, Stagger, StaggerItem } from "@/components/reveal";
import { PageHero } from "@/components/site-layout";
import { FLEET } from "@/lib/fleet";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Our Cabs, Weddings, Airport & Family Trips | Kanpur Travels" },
      {
        name: "description",
        content:
          "Browse our premium gallery: sedans, SUVs, airport transfers, wedding cars, family trips & corporate travel in Kanpur.",
      },
      { property: "og:title", content: "Gallery — Anand Jaiswal Kanpur Travels" },
      {
        property: "og:description",
        content: "Sedan • SUV • Airport • Wedding • Family Trips • Corporate",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: GalleryPage,
});

const u = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

type Cat = "All" | "Sedan" | "SUV" | "Airport" | "Wedding" | "Family Trips" | "Corporate";

const CATS: Cat[] = ["All", "Sedan", "SUV", "Airport", "Wedding", "Family Trips", "Corporate"];

interface Shot {
  src: string;
  alt: string;
  cat: Exclude<Cat, "All">;
  tall?: boolean;
}

const SHOTS: Shot[] = [
  { src: FLEET[3].image, alt: "White Honda City sedan for Kanpur taxi", cat: "Sedan" },
  { src: FLEET[0].image, alt: "Silver Swift Dzire on highway", cat: "Sedan", tall: true },
  { src: FLEET[2].image, alt: "Black Innova Crysta premium MPV", cat: "SUV" },
  { src: FLEET[5].image, alt: "White Toyota Fortuner premium SUV", cat: "SUV", tall: true },
  { src: FLEET[4].image, alt: "Black Mahindra XUV700 SUV", cat: "SUV" },
  { src: u("photo-1436491865332-7a61a109cc05"), alt: "Airport transfer — flight ready cab", cat: "Airport", tall: true },
  { src: u("photo-1474487548417-781cb71495f3"), alt: "Railway station pickup coordination", cat: "Airport" },
  { src: u("photo-1519741497674-611481863552"), alt: "Decorated wedding car for baraat", cat: "Wedding", tall: true },
  { src: u("photo-1511285560929-80b456fea0bc"), alt: "Wedding couple with luxury car", cat: "Wedding" },
  { src: u("photo-1469854523086-cc02fe5d8800"), alt: "Family outstation road trip", cat: "Family Trips", tall: true },
  { src: FLEET[1].image, alt: "White Ertiga for family trips", cat: "Family Trips" },
  { src: u("photo-1486406146926-c627a92ad1ab"), alt: "Corporate travel — executive transfers", cat: "Corporate" },
  { src: u("photo-1449965408869-eaa3f722e40d"), alt: "Local city taxi ride in Kanpur", cat: "Corporate", tall: true },
  { src: heroImage, alt: "Premium fleet lineup at sunset", cat: "SUV" },
];

function GalleryPage() {
  const [active, setActive] = useState<Cat>("All");
  const shots = active === "All" ? SHOTS : SHOTS.filter((s) => s.cat === active);

  return (
    <main className="bg-background text-foreground">
      <PageHero
        kicker="Gallery"
        title="Moments From the Road"
        text="Sedans, SUVs, airport runs, weddings, family tours and corporate travel — a glimpse of how Kanpur travels with us."
        image={heroImage}
      />

      <section className="py-14 sm:py-18">
        <SectionHeader
          kicker="Categories"
          title="Explore by Journey"
          text="Tap a category to filter the gallery."
        />
        <Reveal className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2 px-4">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              aria-pressed={active === c}
              className={cn(
                "rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all",
                active === c
                  ? "border-primary bg-primary text-primary-foreground shadow-luxury"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
              )}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <Stagger
          key={active}
          className="mx-auto mt-10 columns-2 gap-4 space-y-4 px-4 sm:px-6 lg:columns-3 max-w-7xl lg:px-8"
        >
          {shots.map((s) => (
            <StaggerItem key={s.src + s.alt} className="break-inside-avoid">
              <figure className="group relative overflow-hidden rounded-xl border border-border shadow-luxury">
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    s.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-navy/90 to-transparent px-4 pb-3 pt-10 text-xs font-bold text-white">
                  <span className="truncate">{s.alt}</span>
                  <span className="ml-2 shrink-0 rounded-full bg-gold px-2.5 py-1 text-[10px] uppercase tracking-wider text-navy">
                    {s.cat}
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </main>
  );
}
