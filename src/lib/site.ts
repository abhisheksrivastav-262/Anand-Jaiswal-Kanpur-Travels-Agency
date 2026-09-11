export const BUSINESS_NAME = "Anand Jaiswal Kanpur Travels Agency Pvt. Ltd.";
export const BUSINESS_SHORT = "Anand Jaiswal Kanpur Travels";
export const PHONE_DISPLAY = "8303394828";
export const PHONE_FULL = "+91 8303394828";
export const PHONE_HREF = "tel:+918303394828";
export const WHATSAPP_NUMBER = "918303394828";
export const CITY = "Kanpur, Uttar Pradesh";
export const HOURS = "Open 24×7, all days";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const DEFAULT_WA_HREF = waLink(
  "Hi Anand Jaiswal Kanpur Travels, I want to book a cab."
);

export type TripType = "Local" | "Airport" | "Railway" | "Outstation";

export const VEHICLES = [
  "Swift Dzire",
  "Ertiga",
  "Innova Crysta",
  "Sedan (Honda City)",
  "SUV (XUV700)",
  "Premium SUV (Fortuner)",
] as const;

export function buildBookingMessage(input: {
  name: string;
  phone: string;
  pickup: string;
  drop: string;
  date: string;
  time: string;
  vehicle: string;
  trip: string;
  message: string;
}) {
  return [
    "New Cab Booking",
    "",
    `Name: ${input.name}`,
    `Phone: ${input.phone}`,
    `Pickup: ${input.pickup}`,
    `Drop: ${input.drop}`,
    `Date: ${input.date}`,
    `Time: ${input.time}`,
    `Vehicle: ${input.vehicle}`,
    `Trip: ${input.trip}`,
    `Message: ${input.message || "-"}`,
  ].join("\n");
}
