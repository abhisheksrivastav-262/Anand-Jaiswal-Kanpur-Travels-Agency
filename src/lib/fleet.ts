export interface FleetVehicle {
  slug: string;
  name: string;
  model: string;
  color: string;
  seats: string;
  image: string;
  tag: string;
  desc: string;
}

const u = (id: string) =>
  `https://images.unsplash.com/${id}?q=80&w=1200&auto=format&fit=crop`;

export const FLEET: FleetVehicle[] = [
  {
    slug: "swift-dzire",
    name: "Swift Dzire",
    model: "Maruti Suzuki Swift Dzire",
    color: "Silver",
    seats: "4 + 1 Seater",
    image: u("photo-1502877338535-766e1452684a"),
    tag: "Best for city",
    desc: "Compact silver sedan, perfect for local Kanpur rides and airport transfers.",
  },
  {
    slug: "ertiga",
    name: "Ertiga",
    model: "Maruti Suzuki Ertiga",
    color: "White",
    seats: "6 + 1 Seater",
    image: u("photo-1568605117036-5fe5e7bab0b7"),
    tag: "Family favourite",
    desc: "Spacious white 7-seater MPV with big luggage space for family trips.",
  },
  {
    slug: "innova-crysta",
    name: "Innova Crysta",
    model: "Toyota Innova Crysta",
    color: "Black",
    seats: "6 + 1 Seater",
    image: u("photo-1533473359331-0135ef1b58bf"),
    tag: "Most premium",
    desc: "Flagship black luxury MPV — the first choice for weddings & outstation.",
  },
  {
    slug: "sedan",
    name: "Sedan",
    model: "Honda City",
    color: "White",
    seats: "4 + 1 Seater",
    image: u("photo-1550355291-bbee04a92027"),
    tag: "Executive comfort",
    desc: "Elegant white sedan with plush legroom for corporate & long drives.",
  },
  {
    slug: "suv",
    name: "SUV",
    model: "Mahindra XUV700",
    color: "Black",
    seats: "6 + 1 Seater",
    image: u("photo-1535732820275-9ffd998cac22"),
    tag: "Power & presence",
    desc: "Bold black SUV with commanding road presence and highway comfort.",
  },
  {
    slug: "premium-suv",
    name: "Premium SUV",
    model: "Toyota Fortuner",
    color: "White",
    seats: "6 + 1 Seater",
    image: u("photo-1580273916550-e323be2ae537"),
    tag: "VIP travel",
    desc: "White premium Fortuner for VIP, wedding and luxury outstation travel.",
  },
];

export const FLEET_FEATURES = [
  "AC",
  "Music System",
  "Luggage Space",
  "Professional Driver",
];
