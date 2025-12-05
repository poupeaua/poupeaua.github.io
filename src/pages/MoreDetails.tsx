import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function MoreDetails() {
  return (
    <div className="container mx-auto p-4 space-y-8">
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
          <div>
            <h3 className="font-semibold text-lg mb-2">Technology & Engineering</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <a href="#" className="text-blue-500 hover:underline">Clean Code: A Handbook of Agile Software Craftsmanship</a> by Robert C. Martin <Badge variant="secondary">Software Design</Badge>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">The Pragmatic Programmer: Your Journey To Mastery</a> by David Thomas and Andrew Hunt <Badge variant="secondary">Best Practices</Badge>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">Designing Data-Intensive Applications</a> by Martin Kleppmann <Badge variant="secondary">System Design</Badge>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Philosophy & Personal Growth</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <a href="#" className="text-blue-500 hover:underline">Meditations</a> by Marcus Aurelius <Badge variant="secondary">Stoicism</Badge>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">Sapiens: A Brief History of Humankind</a> by Yuval Noah Harari <Badge variant="secondary">History</Badge>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">Thinking, Fast and Slow</a> by Daniel Kahneman <Badge variant="secondary">Psychology</Badge>
              </li>
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">These are just a few recommendations. My reading list is ever-growing!</p>
        </CardFooter>
      </Card>
    </div>
  );
}
