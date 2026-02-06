import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const MobileFooter = () => {
  return (
    <footer className="border-t border-border bg-card px-4 pt-8 pb-6">

      {/* Brand */}
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero">
          <span className="text-sm font-bold text-primary-foreground">C</span>
        </div>
        <span className="text-lg font-bold text-foreground">Cervizo</span>
      </div>

      {/* Description */}
      <p className="mb-6 text-sm text-muted-foreground">
        Your trusted partner for all home services. Quality work, verified
        professionals, and satisfaction guaranteed.
      </p>

      {/* Services + Company (same row) */}
      <div className="mb-6 grid grid-cols-2 gap-6">

        {/* Services */}
        <div>
          <h4 className="mb-3 font-semibold text-foreground">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Home Cleaning</li>
            <li>Salon at Home</li>
            <li>AC Repair</li>
            <li>Electrician</li>
            <li>Plumbing</li>
            <li>Pest Control</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="mb-3 font-semibold text-foreground">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>About Us</li>
            <li>Careers</li>
            <li>Partner with Us</li>
            <li>Blog</li>
            <li>Press</li>
            <li>Contact</li>
          </ul>
        </div>

      </div>

      {/* Contact Us */}
      <div className="mb-6">
        <h4 className="mb-3 font-semibold text-foreground">Contact Us</h4>

        <div className="space-y-4 text-sm text-muted-foreground">
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-4 w-4 text-primary" />
            <span>
              Barasat, Ramkrishnapur Road, Near Jagadighata Market,
              Kolkata, West Bengal 700125
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-primary" />
            <span>+91 824 048 5748</span>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="mt-1 h-4 w-4 text-primary" />
            <div className="flex flex-col">
              <span>asisghorai663@gmail.com</span>
              <span>gsayan310@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social */}
      <div className="mb-6 flex justify-center gap-4">
        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
          <div
            key={i}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-muted-foreground"
          >
            <Icon className="h-4 w-4" />
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="border-t border-border pt-4 text-center text-xs text-muted-foreground">
        <p className="mb-2">© 2024 Cervizo. All rights reserved.</p>
        <div className="flex justify-center gap-4">
          <span>Privacy Policy</span>
          <span>Terms</span>
          <span>Refund Policy</span>
        </div>
      </div>

    </footer>
  );
};

export default MobileFooter;
