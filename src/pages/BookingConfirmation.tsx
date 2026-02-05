import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle, Calendar, Clock, MapPin, CreditCard, Home, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format, addHours } from "date-fns";

interface BookingData {
  serviceName: string;
  servicePrice: number;
  date: Date;
  time: string;
  paymentMethod: string;
  address: {
    flatNo: string;
    building: string;
    landmark: string;
    city: string;
    pincode: string;
  };
  bookingId: string;
}

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state as BookingData;

  if (!bookingData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-4">
        <p className="text-muted-foreground">No booking information found</p>
        <Button onClick={() => navigate("/")}>Go to Home</Button>
      </div>
    );
  }

  // Calculate estimated arrival time (service time + 15 mins buffer)
  const getEstimatedArrival = () => {
    const [hours, minutesPart] = bookingData.time.split(":");
    const minutes = minutesPart.replace(/\s?(AM|PM)/i, "");
    const isPM = bookingData.time.toLowerCase().includes("pm");
    
    let hour = parseInt(hours);
    if (isPM && hour !== 12) hour += 12;
    if (!isPM && hour === 12) hour = 0;
    
    const arrivalDate = new Date(bookingData.date);
    arrivalDate.setHours(hour, parseInt(minutes), 0);
    
    const arrivalStart = arrivalDate;
    const arrivalEnd = addHours(arrivalDate, 1);
    
    return `${format(arrivalStart, "h:mm a")} - ${format(arrivalEnd, "h:mm a")}`;
  };

  const formattedAddress = [
    bookingData.address.flatNo,
    bookingData.address.building,
    bookingData.address.landmark,
    bookingData.address.city,
    bookingData.address.pincode,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <div className="min-h-screen bg-background">
      {/* Success Header */}
      <div className="bg-gradient-hero px-4 pb-12 pt-16 text-center text-primary-foreground">
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary-foreground/20">
          <CheckCircle className="h-10 w-10" />
        </div>
        <h1 className="mb-2 text-2xl font-bold">Booking Confirmed!</h1>
        <p className="text-primary-foreground/80">
          Your service has been successfully booked
        </p>
      </div>

      <main className="container mx-auto -mt-6 px-4 pb-24">
        {/* Booking ID Card */}
        <div className="mb-6 rounded-2xl border border-border bg-card p-6 shadow-lg">
          <div className="mb-4 text-center">
            <p className="text-sm text-muted-foreground">Booking ID</p>
            <p className="text-xl font-bold text-primary">{bookingData.bookingId}</p>
          </div>
          
          <div className="rounded-xl bg-primary/5 p-4">
            <h2 className="mb-1 text-lg font-bold text-foreground">
              {bookingData.serviceName}
            </h2>
            <p className="text-2xl font-bold text-primary">₹{bookingData.servicePrice}</p>
          </div>
        </div>

        {/* Booking Details */}
        <div className="mb-6 rounded-2xl border border-border bg-card p-6">
          <h3 className="mb-4 text-lg font-bold text-foreground">Booking Details</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date</p>
                <p className="font-semibold text-foreground">
                  {format(new Date(bookingData.date), "EEEE, MMMM d, yyyy")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Time Slot</p>
                <p className="font-semibold text-foreground">{bookingData.time}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                <Clock className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Estimated Arrival</p>
                <p className="font-semibold text-accent">{getEstimatedArrival()}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Service Address</p>
                <p className="font-semibold text-foreground">{formattedAddress}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <CreditCard className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Payment Method</p>
                <p className="font-semibold text-foreground">
                  {bookingData.paymentMethod === "online" ? "Pay Online" : "Pay After Service"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mb-6 rounded-2xl border border-border bg-card p-6">
          <h3 className="mb-4 text-lg font-bold text-foreground">Important Notes</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <span>Our professional will arrive within the estimated time window</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <span>You will receive a confirmation SMS with professional details</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <span>Free cancellation up to 2 hours before the scheduled time</span>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="mb-4 text-lg font-bold text-foreground">Need Help?</h3>
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1 gap-2">
              <Phone className="h-4 w-4" />
              Call Support
            </Button>
          </div>
        </div>
      </main>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-background/95 px-4 py-4 backdrop-blur">
        <Button
          size="lg"
          className="w-full gap-2 bg-gradient-hero"
          onClick={() => navigate("/")}
        >
          <Home className="h-5 w-5" />
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
