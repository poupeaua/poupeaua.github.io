import { useState } from "react";
import { Quote } from "lucide-react";
import { Card, CardContent } from "../../ui/card";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";

const PREVIEW_LIMIT = 400;

export function RecommendationCard({ content, name, role }: { content: string; name: string; role: string; }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = content.length > PREVIEW_LIMIT;
  const displayedContent = shouldTruncate && !isExpanded
    ? `${content.slice(0, PREVIEW_LIMIT).trimEnd()}...`
    : content;

  return (
    <Card className="h-full hover-elevate" data-testid={`card-recommendation-${name.toLowerCase().replace(' ', '-')}`}>
      <CardContent className="">
        <Quote className="h-5 w-5 text-muted-foreground/40 mb-3" />
        <div className="mb-6">
          <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-recommendation-content-${name.toLowerCase().replace(' ', '-')}`}>
            {displayedContent}
          </p>
          {shouldTruncate && (
            <button
              type="button"
              className="mt-2 text-sm font-medium text-primary hover:underline"
              onClick={() => setIsExpanded((prev) => !prev)}
              aria-expanded={isExpanded}
            >
              {isExpanded ? "Show less" : "Show more"}
            </button>
          )}
        </div>
        <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 rounded-full flex items-center justify-center">
              <AvatarFallback className="bg-muted text-muted-foreground text-sm rounded-full w-full h-full flex items-center justify-center">
                {name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          <div>
            <p className="font-medium text-sm" data-testid={`text-recommendation-name-${name.toLowerCase().replace(' ', '-')}`}>{name}</p>
            <p className="text-xs text-muted-foreground" data-testid={`text-recommendation-role-${name.toLowerCase().replace(' ', '-')}`}>
              {role}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}