import { ExternalLink, Quote } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";


export function CardInfo({ title, description, icon: Icon }: { title: string; description: string; icon: React.ComponentType<any>; }) {
  return (
    <Card className="hover-elevate" data-testid={`card-${title.toLowerCase()}`}>
      <CardContent className="flex items-start gap-4">
        <div className="rounded-md bg-muted p-2.5">
          <Icon className="h-5 w-5 text-muted-foreground" />
        </div>
        <div>
          <h3 className="font-medium mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export function CertificationCard({ name, issuer, image, link }: { name: string; issuer: string; image: string; link: string; }) {
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
            <img src={image} alt={`${name} Badge`} className='w-fit h-[30vw] md:h-[15vw] lg:h-[10vw] rounded-2xl' />
          </div>
          <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">{issuer}</p>
          <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
            <ExternalLink className="h-3 w-3" />
            <span>View certificate</span>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}

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