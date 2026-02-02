import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  badges: string[];
  link?: string;
  image?: string;
}

export default function ProjectCard({ title, description, badges, link, image }: ProjectCardProps) {
  const cardContent = (
    <Card className="flex flex-col h-full hover-elevate transition-all">
      <CardHeader className="flex flex-row items-center justify-between space-x-4">
        <div className="flex items-center gap-2">
          <CardTitle className="text-lg group-hover:text-primary" data-testid={`text-project-name-1`}>
            {title}
          </CardTitle>
        </div>
          {image && (
            <div className="w-fit h-16">
              <img src={image} alt={title} className="w-full h-full object-cover rounded-md" />
            </div>
          )}
        {link && <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />}
      </CardHeader>
      <CardContent className="">
        <CardDescription>{description}</CardDescription>
        <div className="mt-4 flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <Badge key={index} variant="secondary">{badge}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
      data-testid={`link-project-1`}
    >
      {cardContent}
    </a>
  ) : (
    <div data-testid={`project-card-no-link-1`}>
      {cardContent}
    </div>
  );
}