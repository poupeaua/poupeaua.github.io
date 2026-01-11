import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { YEAR } from "@/data/constants";

export default function Footer() {
  const location = useLocation();

  return (
    <footer className="text-center p-4 mt-8">
      {location.pathname !== "/more-details" && (
        <section className="text-center mt-12" data-testid="section-more-details-bottom">
          <Button asChild variant="outline">
            <Link to="/more-details">
              More Details <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-3" data-testid="text-more-details-hint">
            Learn more about my interests, recommended books, and personal journey
          </p>
        </section>
      )}

      <p className="text-muted-foreground mt-6">Copyright &copy; {YEAR}, Alexandre Poupeau. All rights reserved.</p>
    </footer>
  );
}