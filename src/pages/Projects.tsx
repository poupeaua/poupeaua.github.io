import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ProjectCard from "@/components/custom/projects/ProjectCard";
import FreelanceCard from "@/components/custom/projects/FreelanceCard";

export default function Projects() {
  return (
    <div className="max-w-6xl container mx-auto p-4 space-y-8">
      <title>Projects - Alexandre Poupeau</title>
      <meta name="description" content="Discover my professional and side projects, showcasing my skills in software engineering, machine learning, and more." />
      <Card>
        <CardHeader>
          <CardTitle>Freelance Projects</CardTitle>
          <CardDescription>Work contributed as a Freelancer.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FreelanceCard
            title="UZ.IP"
            jobTitle="AI & Data Architect"
            datetime="March - May 2026"
            description="Auditing and optimizing a data pipeline on Azure with business related to trademarks infringement. Enhanced considerably the data pipeline in several aspects and changed the user-experience. Made them save millions of euros long term."
            badges={["Python", "GenAI", "LLM", "OCR", "Data Architecture", "Data Pipeline", "Azure", "Azure AI Foundry"]}
            image="/img/projects/uz.ip.png"
            link="https://www.linkedin.com/in/alexandre-poupeau-67a893133/"
          />
          <FreelanceCard
            title="EDF"
            jobTitle="AI Engineer"
            datetime="June 2026"
            description="Auditing AI in EDF and helping then to use AI efficiently mainly for their developers. I helped them to understand how to use AI in their daily work, the pro and cons, the risks and how to integrate it in their development process."
            badges={["Audit", "GenAI", "LLM", "AI Strategy", "AI Gouvernance", "Consulting"]}
            image="/img/projects/edf.png"
            link="https://www.linkedin.com/in/alexandre-poupeau-67a893133/"
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
            description="Architectural Image To Text: AI system for advanced image processing to assist Mexican architects in Yucatan."
            badges={["Python", "Computer Vision", "OCR", "Deep Learning"]}
            image="/img/projects/aitt_logo.png"
            link="https://app.alexandrepoupeau.com/aitt/"
          />
          <ProjectCard
            title="Otary"
            description="Otary — elegant, readable, and powerful image and 2D geometry open-source Python library."
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
            image="/img/projects/logo-luthier-website.png"
            link="https://www.pierrelassauluthier.fr/"
          />
        </CardContent>
      </Card>
    </div>
  );
}
