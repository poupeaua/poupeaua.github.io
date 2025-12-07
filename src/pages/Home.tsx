import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Lightbulb, Target, FileText, ExternalLink, Award, Globe2, MessageSquare } from "lucide-react";
import { CardInfo, CertificationCard, LanguageCard, RecommendationCard } from '@/components/custom/home';

const year = new Date().getFullYear();
const yearExperience = year - 2019; // Assuming experience started in 2015

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <section className="mb-8 md:mb-8" data-testid="section-about">
        <p className='text-muted-foreground mb-1'>
          Hello, I'm Alexandre Poupeau
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6" data-testid="text-title">
          Senior ML Engineer
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed" data-testid="text-bio">
          A passionate engineer with expertise in building reliable, scalable and maintainable data & AI applications. I specialize in full-stack development, cloud architecture, and creating elegant solutions that make a difference.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <CardInfo title="Experience" description={`+${yearExperience} years of professional experience in data and AI projects as a T-shaped engineer, at the frontier between Data Scientist, Data Engineer and DevOps`} icon={Briefcase} />
            <CardInfo title="Inspiration" description="I care about excellence to deliver high-quality code and solutions that meet the needs of end-users" icon={Lightbulb} />
            <CardInfo title="Objective" description="Build data application for good to make underrepresented people’s voices heard, to create opportunities for everyone, and to avert disasters" icon={Target} />
          </div>
      </section>

      <section className="mb-16 md:mb-20" data-testid="section-resume">
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
            <Button asChild data-testid="button-view-resume">
              <a href="https://drive.google.com/file/d/1Foy_KVGZDvq-AqtthCi7_XAWY5llBvAA/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="gap-2">
                View Resume
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16 md:mb-20" data-testid="section-certifications">
        <div className="flex items-center gap-3 mb-6">
          <Award className="h-6 w-6 text-muted-foreground" />
          <h2 className="text-2xl md:text-3xl font-semibold" data-testid="text-certifications-heading">Certifications</h2>
        </div>
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
        </div>
      </section>
      
      <section className="mb-16 md:mb-20" data-testid="section-languages">
        <div className="flex items-center gap-3 mb-6">
          <Globe2 className="h-6 w-6 text-muted-foreground" />
          <h2 className="text-2xl md:text-3xl font-semibold" data-testid="text-languages-heading">Languages</h2>
        </div>
        <p className='text-muted-foreground mb-4'>
          With academic and professional experience in Chile and Mexico, I am a partner of choice for projects requiring precise multilingual communication.
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
              role="Chief Analytics Officer"
            />
          </div>
      </section>
    </div>
  );
}