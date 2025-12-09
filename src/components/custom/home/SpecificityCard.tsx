import { Card, CardContent } from "@/components/ui/card";

export function SpecificityCard({ title, description, icon: Icon }: { title: string; description: string; icon: React.ComponentType<any>; }) {
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