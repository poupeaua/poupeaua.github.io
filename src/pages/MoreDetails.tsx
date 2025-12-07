import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookCard } from "@/components/custom/moredetails";

export default function MoreDetails() {
  return (
    <div className="max-w-6xl container mx-auto p-4 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Beyond the Code</CardTitle>
          <CardDescription>A glimpse into my broader interests and philosophies.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            This page is dedicated to sharing more about the influences and passions that shape my approach to technology and life in general. I believe that a well-rounded individual brings a richer perspective to problem-solving and innovation. Here, you'll find insights into my continuous learning journey and the resources I find valuable.
          </p>
          <p className="mt-4">
            My commitment to lifelong learning extends beyond programming languages and frameworks. I'm deeply interested in understanding the 'why' behind systems, human behavior, and the larger context in which technology operates.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recommended Books</CardTitle>
          <CardDescription>Books that have shaped my thinking and understanding.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <BookCard
              name="Designing Data-Intensive Applications"
              author="Martin Kleppmann"
              image="/img/books/designing-data-intensive-applications.jpg"
              link="https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052"
              description="The big ideas behind reliable, scalable, and maintainable data systems. Technology is a powerful force in our society. This
book is dedicated to everyone working toward the good."
              badges={["Data", "Design Pattern", "Best Practices"]}
            />
            <BookCard
              name="The Pragmatic Programmer"
              author="David Thomas"
              image="/img/books/pragmatic-programmer.jpg"
              link="https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052"
              description="A must-read for every software developer, this book offers practical advice and philosophical insights on becoming a better programmer."
              badges={["Programming", "Best Practices"]}
            />
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">These are just a few recommendations. My reading list is ever-growing!</p>
        </CardFooter>
      </Card>
    </div>
  );
}
