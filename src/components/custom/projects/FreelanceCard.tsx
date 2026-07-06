import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface FreelanceCardProps {
  title: string;
  jobTitle: string;
  datetime: string;
  description: string;
  badges: string[];
  link?: string;
  image?: string;
}

export default function FreelanceCard({
  title,
  jobTitle,
  datetime,
  description,
  badges,
  link,
  image,
}: FreelanceCardProps) {
  const cardContent = (
    <Card className="flex h-full flex-col transition-all hover-elevate">
      <CardHeader className="flex flex-row items-start justify-between gap-4">
        <div className="space-y-1">
          <CardTitle className="text-lg group-hover:text-primary" data-testid={`text-freelance-project-name-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {title}
          </CardTitle>
          <p className="text-sm font-medium text-primary/90">{jobTitle}</p>
          <p className="text-xs text-muted-foreground">{datetime}</p>
        </div>
        {image && (
          <div className="h-16 w-fit shrink-0">
            <img src={image} alt={title} className="h-full w-full rounded-md object-cover" />
          </div>
        )}
        {link && <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground opacity-100" />}
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription>{description}</CardDescription>
        <div className="mt-4 flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <Badge key={`${badge}-${index}`} variant="secondary">
              {badge}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="group" data-testid={`link-freelance-project-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      {cardContent}
    </a>
  ) : (
    <div data-testid={`freelance-project-card-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      {cardContent}
    </div>
  );
}
