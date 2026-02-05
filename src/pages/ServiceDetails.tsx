import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Clock, Shield, CheckCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";

const services: Record<string, {
  id: number;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  price: number;
  duration: string;
  image: string;
  description: string;
  includes: string[];
}> = {
  "1": {
    id: 1,
    name: "Deep Home Cleaning",
    category: "Cleaning",
    rating: 4.9,
    reviews: 2847,
    price: 1499,
    duration: "4-5 hours",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=400&fit=crop",
    description: "Complete deep cleaning service for your entire home. Our trained professionals will clean every corner, leaving your home spotless and fresh.",
    includes: ["Living room deep clean", "Bedroom cleaning", "Bathroom sanitization", "Kitchen deep clean", "Balcony cleaning", "Fan & light cleaning"],
  },
  "2": {
    id: 2,
    name: "AC Service & Repair",
    category: "AC Service",
    rating: 4.8,
    reviews: 1923,
    price: 499,
    duration: "1-2 hours",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=400&fit=crop",
    description: "Professional AC servicing and repair by certified technicians. We service all brands and types of air conditioners.",
    includes: ["Filter cleaning", "Gas check", "Cooling check", "Drainage cleaning", "General inspection", "Minor repairs"],
  },
  "3": {
    id: 3,
    name: "Salon at Home",
    category: "Salon & Spa",
    rating: 4.9,
    reviews: 3421,
    price: 799,
    duration: "1-2 hours",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=400&fit=crop",
    description: "Premium salon services at your doorstep. Our expert beauticians bring the salon experience to your home.",
    includes: ["Haircut & styling", "Facial treatments", "Manicure & Pedicure", "Waxing services", "Threading", "Hair spa"],
  },
  "4": {
    id: 4,
    name: "Electrician Services",
    category: "Electrician",
    rating: 4.7,
    reviews: 1567,
    price: 149,
    duration: "30-60 mins",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=400&fit=crop",
    description: "Reliable electrician services for all your electrical needs. From simple repairs to complex installations.",
    includes: ["Wiring repair", "Switch replacement", "Fan installation", "Light fitting", "MCB repair", "Inverter service"],
  },
  "5": {
    id: 5,
    name: "Pest Control",
    category: "Pest Control",
    rating: 4.8,
    reviews: 892,
    price: 999,
    duration: "2-3 hours",
    image: "https://images.unsplash.com/photo-1632935190508-f2bd4c0f2c64?w=800&h=400&fit=crop",
    description: "Complete pest control treatment for your home. Safe and effective solutions for all types of pests.",
    includes: ["Cockroach control", "Ant treatment", "Bed bug treatment", "Termite control", "Rodent control", "General pest spray"],
  },
  "6": {
    id: 6,
    name: "Plumbing Repair",
    category: "Plumbing",
    rating: 4.6,
    reviews: 1234,
    price: 199,
    duration: "1-2 hours",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=400&fit=crop",
    description: "Expert plumbing services for all your water-related issues. Quick and reliable solutions.",
    includes: ["Tap repair", "Pipe leakage fix", "Drain cleaning", "Toilet repair", "Water tank cleaning", "Geyser service"],
  },
};

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"
];

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("online");
  const [address, setAddress] = useState({
    flatNo: "",
    building: "",
    landmark: "",
    city: "",
    pincode: "",
  });

  const service = services[id || "1"];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Service not found</p>
      </div>
    );
  }

  const handleBooking = () => {
    // Generate a booking ID
    const bookingId = `SRV${Date.now().toString(36).toUpperCase()}`;
    
    // Navigate to confirmation page with booking data
    navigate("/booking-confirmation", {
      state: {
        serviceName: service.name,
        servicePrice: service.price,
        date: selectedDate,
        time: selectedTime,
        paymentMethod,
        address,
        bookingId,
      },
    });
  };

  const isFormValid = selectedDate && selectedTime && address.flatNo && address.city && address.pincode;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto flex items-center gap-4 px-4 py-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-bold text-foreground">{service.name}</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Service Image & Info */}
        <div className="mb-8 overflow-hidden rounded-2xl">
          <img
            src={service.image}
            alt={service.name}
            className="h-48 w-full object-cover md:h-64"
          />
        </div>

        <div className="mb-8">
          <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {service.category}
          </span>
          <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
            {service.name}
          </h2>
          <div className="mb-4 flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="font-semibold text-foreground">{service.rating}</span>
              <span className="text-muted-foreground">({service.reviews.toLocaleString()} reviews)</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{service.duration}</span>
            </div>
          </div>
          <p className="text-muted-foreground">{service.description}</p>
        </div>

        {/* What's Included */}
        <div className="mb-8 rounded-2xl border border-border bg-card p-6">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-foreground">
            <Shield className="h-5 w-5 text-primary" />
            What's Included
          </h3>
          <div className="grid gap-2 sm:grid-cols-2">
            {service.includes.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Date Selection */}
        <div className="mb-8 rounded-2xl border border-border bg-card p-6">
          <h3 className="mb-4 text-lg font-bold text-foreground">Select Date</h3>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            disabled={(date) => date < new Date()}
            className="rounded-md border pointer-events-auto"
          />
          {selectedDate && (
            <p className="mt-4 text-sm text-primary font-medium">
              Selected: {format(selectedDate, "EEEE, MMMM d, yyyy")}
            </p>
          )}
        </div>

        {/* Time Selection */}
        <div className="mb-8 rounded-2xl border border-border bg-card p-6">
          <h3 className="mb-4 text-lg font-bold text-foreground">Select Time</h3>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
            {timeSlots.map((time) => (
              <Button
                key={time}
                variant={selectedTime === time ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTime(time)}
                className="text-sm"
              >
                {time}
              </Button>
            ))}
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-8 rounded-2xl border border-border bg-card p-6">
          <h3 className="mb-4 text-lg font-bold text-foreground">Payment Method</h3>
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
            <div className="flex items-center space-x-3 rounded-xl border border-border p-4 transition-colors hover:bg-muted/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
              <RadioGroupItem value="online" id="online" />
              <Label htmlFor="online" className="flex-1 cursor-pointer">
                <div className="font-semibold text-foreground">Pay Online</div>
                <div className="text-sm text-muted-foreground">UPI, Cards, Net Banking</div>
              </Label>
            </div>
            <div className="flex items-center space-x-3 rounded-xl border border-border p-4 transition-colors hover:bg-muted/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
              <RadioGroupItem value="offline" id="offline" />
              <Label htmlFor="offline" className="flex-1 cursor-pointer">
                <div className="font-semibold text-foreground">Pay After Service</div>
                <div className="text-sm text-muted-foreground">Cash or UPI after completion</div>
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Address */}
        <div className="mb-8 rounded-2xl border border-border bg-card p-6">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-foreground">
            <MapPin className="h-5 w-5 text-primary" />
            Service Address
          </h3>
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="flatNo" className="text-sm font-medium">Flat / House No. *</Label>
                <Input
                  id="flatNo"
                  placeholder="e.g., A-101"
                  value={address.flatNo}
                  onChange={(e) => setAddress({ ...address, flatNo: e.target.value })}
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="building" className="text-sm font-medium">Building / Society</Label>
                <Input
                  id="building"
                  placeholder="e.g., Green Heights"
                  value={address.building}
                  onChange={(e) => setAddress({ ...address, building: e.target.value })}
                  className="mt-1.5"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="landmark" className="text-sm font-medium">Landmark</Label>
              <Textarea
                id="landmark"
                placeholder="Near metro station, opposite park, etc."
                value={address.landmark}
                onChange={(e) => setAddress({ ...address, landmark: e.target.value })}
                className="mt-1.5"
                rows={2}
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="city" className="text-sm font-medium">City *</Label>
                <Input
                  id="city"
                  placeholder="e.g., Mumbai"
                  value={address.city}
                  onChange={(e) => setAddress({ ...address, city: e.target.value })}
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="pincode" className="text-sm font-medium">Pincode *</Label>
                <Input
                  id="pincode"
                  placeholder="e.g., 400001"
                  value={address.pincode}
                  onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                  className="mt-1.5"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Price & Book Button */}
        <div className="sticky bottom-0 -mx-4 border-t border-border bg-background/95 px-4 py-4 backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Amount</p>
              <p className="text-2xl font-bold text-foreground">₹{service.price}</p>
            </div>
            <Button
              size="lg"
              className="bg-gradient-hero px-8"
              onClick={handleBooking}
              disabled={!isFormValid}
            >
              Book Now
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiceDetails;
