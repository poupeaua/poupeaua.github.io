import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Lightbulb, Target, FileText, ExternalLink, Award, Globe2, MessageSquare } from "lucide-react";
import { RecommendationCard } from '@/components/custom/home/RecommendationCard';
import { SpecificityCard } from '@/components/custom/home/SpecificityCard';
import { CertificationCard } from '@/components/custom/home/CertificationCard';
import { LanguageCard } from '@/components/custom/home/LanguageCard';
import { ContactCards } from "@/components/custom/home/ContactCards";
import { LogoWall } from "@/components/custom/home/LogoAutoScroll";
import { FadeInOnScroll } from "@/components/ui/fade-in-on-scroll";
import { JOB_TITLE, YEAR_EXPERIENCE, RESUME_URL } from "@/data/constants";


export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <title>Alexandre Poupeau - Professional Portfolio</title>
      <meta name="description" content={`Welcome to the portfolio of Alexandre Poupeau. Explore my projects, certifications, and professional experience as a ${JOB_TITLE}.`} />
      <section className="mb-8 md:mb-8" data-testid="section-about">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex-1">
            <p className='text-muted-foreground mb-1'>
              Hello, I'm Alexandre Poupeau
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6" data-testid="text-title">
              {JOB_TITLE}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-4 leading-relaxed" data-testid="text-bio">
              A passionate engineer with expertise in building reliable, scalable and maintainable data & AI applications. I specialize in backend development, data pipelines, ML systems, Python expertise, cloud architecture and creating elegant solutions that make a difference.
            </p>

            <ContactCards />
          </div>

          <div className="flex justify-center md:justify-end mb-6">
            <img
              src="/img/photo-pro.jpeg"
              alt="Alexandre Poupeau"
              className="rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-[0.75rem] rounded-bl-[0.75rem] object-cover shadow-lg ring-1 ring-border md:h-64 md:w-64"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <SpecificityCard title="Experience" description={`+${YEAR_EXPERIENCE} years of professional experience in data and AI projects as a T-shaped engineer, at the frontier between Data Scientist and Data Engineer`} icon={Briefcase} />
            <SpecificityCard title="Inspiration" description="I care about excellence to deliver high-quality code and architecture that meet the needs of end-users through a strong DevOps culture." icon={Lightbulb} />
            <SpecificityCard title="Objective" description="Build data application for good and contribute to building a more sustainable future for the planet." icon={Target} />
          </div>
      </section>

      <FadeInOnScroll delay={100}>
        <section className="mb-16 md:mb-20 hidden sm:block" data-testid="section-resume">
          <Card className="bg-card hover-elevate" data-testid="card-resume">
            <CardContent className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="rounded-md bg-primary/10 p-3">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold" data-testid="text-resume-title">Resume</h2>
                  <p className="text-sm text-muted-foreground" data-testid="text-resume-description">
                    View my professional experience and qualifications
                  </p>
                </div>
              </div>
              <Button asChild data-testid="button-view-resume" className="inline-flex">
                <a href={`${RESUME_URL}`} target="_blank" rel="noopener noreferrer" className="gap-2">
                  View Resume
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </FadeInOnScroll>

      <FadeInOnScroll delay={100}>
        <LogoWall />
      </FadeInOnScroll>

      <FadeInOnScroll delay={150}>
        <section className="mb-16 md:mb-20" data-testid="section-certifications">
        <div className="flex items-center gap-3 mb-6">
          <Award className="h-6 w-6 text-muted-foreground" />
          <h2 className="text-2xl md:text-3xl font-semibold" data-testid="text-certifications-heading">Certifications</h2>
        </div>

        <p className='text-muted-foreground mb-4'>
          Continuous Learning is key in my opinion to stay ahead in the fast-evolving tech landscape.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          <CertificationCard
            name="AWS Certified Machine Learning - Specialty"
            issuer="Amazon Web Services"
            image="/img/certifications/aws-certified-ml-specialty.png"
            link="https://drive.google.com/file/d/1B3a71zC1t3KgSHa-Jyb4nrzc-cMlwlXS/view"
          />

          <CertificationCard
            name="AWS Certified Solutions Architect – Associate"
            issuer="Amazon Web Services"
            image="/img/certifications/aws-certified-solutions-architect-associate.png"
            link="https://drive.google.com/file/d/1VA-RikhlQqzGunPvtBKO1q9QtbNgHETD/view"
          />

          <CertificationCard
            name="Certified Associate Developer for Apache Spark 3.0"
            issuer="Databricks"
            image="/img/certifications/specialty-spark-developer-associate-badge.png"
            link="https://credentials.databricks.com/982bc4e7-af51-45b0-b631-77e08e37bea3#acc.ojeuYKNl"
          />

          <CertificationCard
            name="Sequence Models"
            issuer="DeepLearning.AI"
            image="/img/certifications/deeplearningai-sequence-models.png"
            link="https://drive.google.com/file/d/10jz92JbeZ1g-06X1tmqDyFcihnUveGmE/view"
          />

          <CertificationCard
            name="Machine Learning in Production"
            issuer="DeepLearning.AI"
            image="/img/certifications/deeplearningai-machine-learning-in-production.jpeg"
            link="https://drive.google.com/file/d/1NwBeGkM77OPukQTv2gPJQ-1pILawSUgD/view"
          />
        </div>
      </section>
      
      </FadeInOnScroll>

      <FadeInOnScroll delay={150}>
        <section className="mb-16 md:mb-20" data-testid="section-languages">
        <div className="flex items-center gap-3 mb-6">
          <Globe2 className="h-6 w-6 text-muted-foreground" />
          <h2 className="text-2xl md:text-3xl font-semibold" data-testid="text-languages-heading">Languages</h2>
        </div>
        <p className='text-muted-foreground mb-4'>
          With academic and professional experience in Chile and Mexico, I am a partner of choice for projects requiring precise multilingual communication, particularly those involving Latin America.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          <LanguageCard
            flag="🇫🇷"
            name="French"
            level="Native"
            link=""
          />

          <LanguageCard
            flag="🇬🇧"
            name="English"
            level="Professional"
            link=""
          />

          <LanguageCard
            flag="🇪🇸"
            name="Spanish"
            level="Professional"
            link=""
          />

          <LanguageCard
            flag="🇧🇷"
            name="Portuguese"
            level="Advanced"
            link="https://drive.google.com/file/d/1fQgKdM3qJeJ7w4YnNrwe5l-ILHiKuBQ2/view"
          />
        </div>
      </section>

      </FadeInOnScroll>

      <FadeInOnScroll delay={150}>
        <section className="mb-16 md:mb-20" data-testid="section-testimonials">
        <div className="flex items-center gap-3 mb-6">
          <MessageSquare className="h-6 w-6 text-muted-foreground" />
          <h2 className="text-2xl md:text-3xl font-semibold" data-testid="text-testimonials-heading">Recommendations</h2>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <RecommendationCard
              content="I had the chance to work as Alexandre's direct manager for two years. Having him in the team made my own experience completely different, and much easier.
                    Alexandre is an extremely dedicated professional. His exigency with code quality, his ability to make everyone in the team compromised about it and his capacity to explain complex structures to non-technical persons are extremely valuables for any senior/lead/management position linked to Data, will it be Data Engineering or Data Science.
                    Alexandre is an absolute crack when it comes to Python/SQL, and has also demonstrated me his ability to work with other languages and infrastructures. He has a strong code culture.
                    On a personal basis, Alexandre is an extremely open-minded, proactive and kind person, which makes him the perfect asset for any team or project."
              name="Médéric Thomas"
              role="Chief Analytics Officer, BNP Paribas, Mexico City"
            />

            <RecommendationCard
              content="I was fortunate to have Alexandre Poupeau as my mentor, and his impact on my technical profile was immediate. 
                    What I value most about his approach as a Senior Data Scientist is his undeniable commitment to best practices in software development and clean code. 
                    He taught me that a model is only as good as the architecture that supports it, always pushing me to apply the right methodologies to ensure scalability and technical rigor. 
                    In addition to being a brilliant individual, his high level of seniority is reflected in his ability to foster the growth of those around him, both in the field of Data Science and in technical collaboration. 
                    He is a benchmark of excellence and an exceptional mentor that any data team would aspire to have."
              name="Edgar Rebolledo"
              role="Data Scientist, BNP Paribas, Mexico City"
            />

            <RecommendationCard
              content="
                    We worked with Alexandre on a very strategic aspect of the UZ.IP platform, around data engineering, AI & scalability. 

                    He showed great skills during this project, especially around:

                    - organization: Alexandre set a complete project workspace up, including a detailed plan of the various tracks he was about to follow, the expected outcomes and a detailed timeline of the initiative. Progresses were constantly monitored and communicated, in an understandable and transparent way, which led to the project success in the initial timeline.
                    - technical expertise: he has strong technical expertise, on various subjects: Python, AI, data engineering, DevOps, private clouds. It was a key asset for us as one of the main tasks for this collaboration was to improve the scalability of one of our core data components, being a success in the end.
                    - business acumen: Alexandre went the extra-mile in gaining a true and deep understanding of our business, our market and our customers' needs. It was not easy as the domain we operate in is very specific (and complex) but in the end it led to a better framed solution.
                    - future proofness: everything that he designed has been done while keeping the focus on evolution, flexibility and reusability. This was key for us to ensure that our teams would be able to take over on what Alexandre implemented.
                    - involvement & flexibility: the collaboration with Alexandre was very smooth as he showed a great sense of reactivity, availability and flexibility. This was highly appreciated.

                    Overall we are very satisfied with the collaboration we had on this project. Alexandre is a true professional, and his skills were a true asset for our company!"
              name="Louis Stockreisser"
              role="Tech Lead Software Engineer & Co-Founder, UZ.IP, Lyon"
            />
          </div>
      </section>
      </FadeInOnScroll>
    </div>
  );
}