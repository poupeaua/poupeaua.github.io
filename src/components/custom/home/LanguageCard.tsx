import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export function LanguageCard({ flag, name, level, link }: { flag: string; name: string; level: string; link: string; }) {
  return link ? ( /* Link provided */
      <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group"
      >
      <Card className="h-full hover-elevate" data-testid={`card-language-${name.toLowerCase()}`}>
        <CardContent className="">
          <div className="flex items-center mb-3">
            <span className="text-2xl font-mono font-semibold text-muted-foreground" data-testid={`text-language-flag-${name.toLowerCase()}`}>
            {flag}
            </span>
            <h3 className="ml-1 text-md sm:text-lg font-medium mb-1" data-testid={`text-language-name-${name.toLowerCase()}`}>{name}</h3>
          </div>
        <Badge variant="secondary" className="text-xs font-normal" data-testid={`badge-language-level-${name.toLowerCase()}`}>
          {level}
        </Badge>
        {link && 
            <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
              <span>View certificate</span>
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </div>
        }
        </CardContent>
      </Card>
      </a>
    ) : ( /* No link provided version */
      <Card className="h-full hover-elevate" data-testid={`card-language-${name.toLowerCase()}`}>
      <CardContent className="">
        <div className="flex items-center mb-3">
        <span className="text-2xl font-mono font-semibold text-muted-foreground" data-testid={`text-language-flag-${name.toLowerCase()}`}>
          {flag}
        </span>
        <h3 className="ml-1 text-md sm:text-lg font-medium mb-1" data-testid={`text-language-name-${name.toLowerCase()}`}>{name}</h3>
        </div>
        <Badge variant="secondary" className="text-xs font-normal" data-testid={`badge-language-level-${name.toLowerCase()}`}>
        {level}
        </Badge>
      </CardContent>
      </Card>
    )
};