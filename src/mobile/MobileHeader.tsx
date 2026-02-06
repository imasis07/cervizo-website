import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, ChevronDown } from "lucide-react";

const MobileHeader = () => {
  const [active, setActive] = useState<"login" | "book" | null>(null);

  const handleClick = (type: "login" | "book") => {
    setActive(type);
    setTimeout(() => setActive(null), 150); // momentary green
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4">

        {/* Location */}
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary" />
          <div className="leading-tight">
            <p className="text-sm font-semibold text-foreground">
              Old Ballygunge Road
            </p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span>Kolkata</span>
              <ChevronDown className="h-3 w-3" />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            className={
              active === "login"
                ? "bg-green-500 text-white border-green-500"
                : ""
            }
            onClick={() => handleClick("login")}
          >
            Login
          </Button>

          <Button
            size="sm"
            className={
              active === "book"
                ? "bg-green-500 text-white"
                : ""
            }
            onClick={() => handleClick("book")}
          >
            Book Now
          </Button>
        </div>

      </div>
    </header>
  );
};

export default MobileHeader;
