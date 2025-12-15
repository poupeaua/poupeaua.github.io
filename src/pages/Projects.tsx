import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ProjectCard from "@/components/custom/projects/ProjectCard";

export default function Projects() {
  return (
    <div className="max-w-6xl container mx-auto p-4 space-y-8">
      <title>Projects - Alexandre Poupeau</title>
      <meta name="description" content="Discover my professional and side projects, showcasing my skills in software engineering, machine learning, and more." />
      <Card>
        <CardHeader>
          <CardTitle>Professional Projects</CardTitle>
          <CardDescription>Work contributed to in a professional capacity.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProjectCard
            title="Freelance projects incoming soon"
            description="I have just started freelancing and will update this section with my projects soon. In the meantime, feel free to see my resume."
            badges={[]}
            link="" // Replace with actual link
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Side Projects</CardTitle>
          <CardDescription>A selection of my personal side projects.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProjectCard
            title="AITT"
            description="Architectural Image Thinking Technology: AI system for image understanding, analysis, and comprehension to assist architects."
            badges={["Python", "Computer Vision", "OCR", "Deep Learning"]}
            image=""
          />
          <ProjectCard
            title="Otary"
            description="Otary — elegant, readable, and powerful image and 2D geometry Python library."
            badges={["Python", "OpenCV", "Numpy", "Library", "Image Processing", "Geometry"]}
            image="https://github.com/poupeaua/otary/raw/master/docs/img/logo-withname-bg-transparent.png"
            link="https://alexandrepoupeau.com/otary/"
          />
          <ProjectCard
            title="Anthropocene Timeline"
            description="An interactive timeline exploring the Anthropocene epoch and human impact on the planet."
            badges={["Website", "Ecology", "Sustainability", "Educative", "Sensibilization"]}
            image="https://anthropocenetimeline.com/img/main/art-ipcc-curv.jpeg"
            link="https://anthropocenetimeline.com/"
          />
          <ProjectCard
            title="Personal Website"
            description="A personal website to showcase personal projects: magic, music, painting, ecology and art-related work."
            badges={["Website", "Art", "Magic", "Music", "Painting"]}
            image="https://alexandrepoupeau.com/personal/img/photo-pro.jpeg"
            link="https://alexandrepoupeau.com/personal/"
          />
          <ProjectCard
            title="Luthier Website"
            description="A website dedicated to the art of lutherie, showcasing custom-built instruments."
            badges={["Website", "Showcase", "Craftsmanship"]}
            image="/img/logo-luthier-website.png"
            link="https://www.pierrelassauluthier.fr/"
          />
        </CardContent>
      </Card>
    </div>
  );
}
