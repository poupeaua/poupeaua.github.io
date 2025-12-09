import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";


export function LanguageCard({ flag, name, level, link }: { flag: string; name: string; level: string; link: string; }) {
  return link ? (
      <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group"
      >
      <Card className="h-full hover-elevate" data-testid={`card-language-${name.toLowerCase()}`}>
        <CardContent className="">
          <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-mono font-semibold text-muted-foreground" data-testid={`text-language-flag-${name.toLowerCase()}`}>
          {flag}
          </span>
          {link && <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />}
          </div>
        <h3 className="text-lg font-medium mb-1" data-testid={`text-language-name-${name.toLowerCase()}`}>{name}</h3>
        <Badge variant="secondary" className="text-xs font-normal" data-testid={`badge-language-level-${name.toLowerCase()}`}>
          {level}
        </Badge>
        </CardContent>
      </Card>
      </a>
    ) : (
      <Card className="h-full hover-elevate" data-testid={`card-language-${name.toLowerCase()}`}>
      <CardContent className="">
        <div className="flex items-center justify-between mb-3">
        <span className="text-2xl font-mono font-semibold text-muted-foreground" data-testid={`text-language-flag-${name.toLowerCase()}`}>
          {flag}
        </span>
        </div>
        <h3 className="text-lg font-medium mb-1" data-testid={`text-language-name-${name.toLowerCase()}`}>{name}</h3>
        <Badge variant="secondary" className="text-xs font-normal" data-testid={`badge-language-level-${name.toLowerCase()}`}>
        {level}
        </Badge>
      </CardContent>
      </Card>
    )
};