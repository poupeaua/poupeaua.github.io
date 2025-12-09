import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookCard } from "@/components/custom/moredetails/BookCard";
import { BookDetailsModal } from "@/components/custom/moredetails/BookDetailsModal";
import { books } from "@/data/books";
import { ArticleCard } from "@/components/custom/moredetails/ArticleCard";
import { NotebookPen } from "lucide-react";

type Book = typeof books[0];

export default function MoreDetails() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <div className="max-w-6xl container mx-auto p-4 space-y-8">

      <section className="mb-8 md:mb-10" data-testid="section-beyond-the-code">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-semibold">Beyond the Code</CardTitle>
            <CardDescription>A glimpse into my broader interests and philosophies.</CardDescription>
          </CardHeader>
          <CardContent className="text-sm mb-2">
            <h1 className="text-lg mb-2">Cloud Experience</h1>
            <p className="text-muted-foreground mb-4">
              I’ve worked across all three major cloud providers: AWS, GCP, and Azure—each with its own strengths and ecosystem.
            </p>

            <h1 className="text-lg mb-2">Continuous Learning</h1>
            <p className="text-muted-foreground mb-4">
              I care deeply about learning through platforms like Coursera, but also by building (always better) side projects. Improving my skills is an ongoing journey, and I enjoy exploring new tools, approaches, and ideas.            
            </p>

            <h1 className="text-lg mb-2">The Importance of Theory</h1>
            <p className="text-muted-foreground mb-4">
              Theory matters to me. It helps validate good practices, challenge existing habits, and reveal better ways to design systems, architecture, and code. I love the moment when you discover a new pattern or concept and suddenly everything becomes clearer.
            </p>

            <h1 className="text-lg mb-2">Engineering Excellence</h1>
            <p className="text-muted-foreground mb-4">
              High code quality, automation, DevOps culture, CI/CD, testing, architecture, and documentation are all essential in my work. I strive to get a little better every day so I can deliver cleaner, more reliable, and more maintainable solutions. I consider my job is not only to code but also to ensure the long-term health of the systems I build.
            </p>

            <h1 className="text-lg mb-2">The Right Tools for the Job</h1>
            <p className="text-muted-foreground mb-4">
              My engineering journey taught me that the right tools can save enormous time, increase efficiency, and ultimately lead to better outcomes for clients and teams. Spending some times upfront to evaluate and choose the best tools for a project is always worth it.
            </p>

            <h1 className="text-lg mb-2">Human-Centered Work</h1>
            <p className="text-muted-foreground mb-4">
              A healthy work environment matters. I value positive collaboration, mutual respect, and a culture where people can do their best work.
            </p>

            <h1 className="text-lg mb-2">Clear Communication</h1>
            <p className="text-muted-foreground mb-4">
              I enjoy explaining complex ideas in a simple way—especially to non-technical audiences. Whether through presentations or everyday discussions, I see communication as a core engineering skill.
            </p>

            <h1 className="text-lg mb-2">Teaching & Pedagogy</h1>
            <p className="text-muted-foreground">
              In parallel to working in data, I spent years teaching guitar and card prestidigitation. I bring that same passion for pedagogy into my work by mentoring juniors, sharing knowledge, and organizing dedicated learning sessions. Helping others grow remains one of the most rewarding parts of my job.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8 md:mb-10" data-testid="section-certifications">
        <div className="flex items-center gap-3 mb-6">
          <NotebookPen className="h-6 w-6 text-muted-foreground" />
          <h2 className="text-2xl md:text-3xl font-semibold" data-testid="text-certifications-heading">Articles</h2>
        </div>

        <p className='text-sm text-muted-foreground mb-4'>
          I care about making complex data topics clearer, so I write articles on data engineering and data science.        
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

          <ArticleCard
            name="AWS SageMaker: Focus on ML Model Deployment"
            issuer="Medium"
            image="https://miro.medium.com/v2/resize:fit:720/format:webp/1*3Uhu579JPdyRfEyUOmMXaA.png"
            link="https://medium.com/neoxia/sagemaker-focus-sur-la-mise-en-service-de-mod%C3%A8les-ml-9e0a656f6da5"
          />

          <ArticleCard
            name="Glue: let's explore AWS ETL tool"
            issuer="Medium"
            image="https://miro.medium.com/v2/resize:fit:720/format:webp/1*gX78d_IfWvpEOXUf38CWdQ.png"
            link="https://medium.com/neoxia/glue-explorons-loutil-etl-d-aws-d958a1ab4df9"
          />
        </div>
      </section>

      <section className="mb-8 md:mb-10" data-testid="section-books">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-semibold">Recommended Books</CardTitle>
            <CardDescription>Books that have shaped my thinking and understanding. Click on a book to see the details. </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {books.map((book) => (
                <BookCard
                  key={book.name}
                  name={book.name}
                  image={book.image}
                  onClick={() => handleBookClick(book)}
                />
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">My reading list is ever-growing!</p>
          </CardFooter>
        </Card>
      </section>

      <BookDetailsModal
        isOpen={selectedBook !== null}
        onClose={handleCloseModal}
        book={selectedBook}
      />
    </div>
  );
}
