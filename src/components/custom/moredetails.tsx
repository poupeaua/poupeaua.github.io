import { ExternalLink } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

interface BookCardProps {
  name: string;
  author: string;
  image: string;
  badges: string[];
  link: string;
}

export function BookCard({ name, author, image, badges, link }: BookCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <Card className="h-full hover-elevate transition-all">
        <CardContent className="">
          <div className="rounded-mb mb-4 flex items-center justify-center">
            <img src={image} alt={`${name} Badge`} className='w-fit h-[40vw] md:h-[25vw] lg:h-[15vw] rounded-md' />
          </div>
          <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">{author}</p>
        </CardContent>
        <CardContent className="">
            <div className="flex flex-wrap gap-2">
            {badges.map((badge, index) => (
                <Badge key={index} variant="secondary">{badge}</Badge>
            ))}
            </div>
        <div className="mt-4 flex items-center gap-1 text-xs text-muted-foreground">
            <ExternalLink className="h-3 w-3" />
            <span>View book</span>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}