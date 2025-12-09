import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "../../ui/card";

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
            <span>View certificate</span>
            <ExternalLink className="h-3 w-3" />
          </div>
        </CardContent>
      </Card>
    </a>
  );
}