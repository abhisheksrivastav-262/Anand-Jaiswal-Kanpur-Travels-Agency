import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  buildBookingMessage,
  PHONE_DISPLAY,
  PHONE_HREF,
  VEHICLES,
  waLink,
} from "@/lib/site";

const TRIPS = ["Local", "Airport", "Railway", "Outstation"] as const;

/** Shared cab booking form — submits via WhatsApp. Used on Home + Book pages. */
export function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
    date: "",
    time: "",
    vehicle: "Innova Crysta",
    trip: "Local",
    message: "",
  });
  const [error, setError] = useState("");

  const set = (k: keyof typeof form) => (value: string) =>
    setForm((f) => ({ ...f, [k]: value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.pickup.trim() ||
      !form.drop.trim() ||
      !form.date ||
      !form.time
    ) {
      setError("Please fill Name, Mobile, Pickup, Drop, Date and Time.");
      return;
    }
    if (!/^[0-9+\s-]{10,15}$/.test(form.phone.trim())) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    setError("");
    const text = buildBookingMessage({
      name: form.name.trim(),
      phone: form.phone.trim(),
      pickup: form.pickup.trim(),
      drop: form.drop.trim(),
      date: form.date,
      time: form.time,
      vehicle: form.vehicle,
      trip: form.trip,
      message: form.message.trim(),
    });
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={submit}
      className="luxury-card rounded-2xl bg-card p-7 text-card-foreground sm:p-9"
      aria-label="Cab booking form"
    >
      <h2 className="font-display text-2xl font-bold">Trip details</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        On submit we open WhatsApp with your booking ready to send.
      </p>
      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="bk-name">Full Name *</Label>
          <Input
            id="bk-name"
            placeholder="e.g. Rahul Verma"
            value={form.name}
            onChange={(e) => set("name")(e.target.value)}
            autoComplete="name"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="bk-phone">Mobile Number *</Label>
          <Input
            id="bk-phone"
            placeholder="10-digit mobile"
            value={form.phone}
            onChange={(e) => set("phone")(e.target.value)}
            inputMode="tel"
            autoComplete="tel"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="bk-pickup">Pickup Location *</Label>
          <Input
            id="bk-pickup"
            placeholder="e.g. Kanpur Central Station"
            value={form.pickup}
            onChange={(e) => set("pickup")(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="bk-drop">Drop Location *</Label>
          <Input
            id="bk-drop"
            placeholder="e.g. Lucknow Airport T3"
            value={form.drop}
            onChange={(e) => set("drop")(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="bk-date">Journey Date *</Label>
          <Input
            id="bk-date"
            type="date"
            value={form.date}
            onChange={(e) => set("date")(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="bk-time">Pickup Time *</Label>
          <Input
            id="bk-time"
            type="time"
            value={form.time}
            onChange={(e) => set("time")(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label>Vehicle Type *</Label>
          <Select value={form.vehicle} onValueChange={set("vehicle")}>
            <SelectTrigger aria-label="Vehicle type">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {VEHICLES.map((v) => (
                <SelectItem key={v} value={v}>
                  {v}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label>Trip Type *</Label>
          <Select value={form.trip} onValueChange={set("trip")}>
            <SelectTrigger aria-label="Trip type">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {TRIPS.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="bk-msg">Message (optional)</Label>
          <Textarea
            id="bk-msg"
            rows={3}
            placeholder="Flight no., luggage, extra halts…"
            value={form.message}
            onChange={(e) => set("message")(e.target.value)}
          />
        </div>
      </div>
      {error && (
        <p
          role="alert"
          className="mt-5 rounded-md bg-destructive/10 px-4 py-3 text-sm font-semibold text-destructive"
        >
          {error}
        </p>
      )}
      <Button
        type="submit"
        variant="luxury"
        size="lg"
        className="mt-7 w-full bg-[#25D366] hover:bg-[#1fb857]"
      >
        <MessageCircle className="h-5 w-5" /> Book on WhatsApp
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Prefers calling?{" "}
        <a href={PHONE_HREF} className="font-bold text-primary">
          Call {PHONE_DISPLAY}
        </a>
      </p>
    </form>
  );
}
