import { Quote } from "lucide-react";
import { Card, CardContent } from "../../ui/card";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";

export function RecommendationCard({ content, name, role }: { content: string; name: string; role: string; }) {
  return (
    <Card className="h-full hover-elevate" data-testid={`card-recommendation-${name.toLowerCase().replace(' ', '-')}`}>
      <CardContent className="">
        <Quote className="h-5 w-5 text-muted-foreground/40 mb-3" />
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed" data-testid={`text-recommendation-content-${name.toLowerCase().replace(' ', '-')}`}>
          {content}
        </p>
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