import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Briefcase, Lightbulb, Target, FileText, ExternalLink, ArrowRight, Award, Globe2, MessageSquare, Quote } from "lucide-react";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <section className="mb-16 md:mb-20" data-testid="section-about">
        <p className='text-muted-foreground mb-1'>
          Hello, I'm Alexandre Poupeau
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6" data-testid="text-title">
          Senior ML Engineer
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed" data-testid="text-bio">
          A passionate software engineer with expertise in building scalable applications and solving complex problems. I specialize in full-stack development, cloud architecture, and creating elegant solutions that make a difference.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="hover-elevate" data-testid="card-experience">
              <CardContent className="flex items-start gap-4">
                <div className="rounded-md bg-muted p-2.5">
                  <Briefcase className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Experience</h3>
                  <p className="text-sm text-muted-foreground">
                    Years of professional experience in software development and engineering projects
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-elevate" data-testid="card-inspiration">
              <CardContent className="flex items-start gap-4">
                <div className="rounded-md bg-muted p-2.5">
                  <Lightbulb className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Inspiration</h3>
                  <p className="text-sm text-muted-foreground">
                    Driven by innovation and the desire to create technology that positively impacts lives
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-elevate" data-testid="card-specialization">
              <CardContent className="flex items-start gap-4">
                <div className="rounded-md bg-muted p-2.5">
                  <Target className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Specialization</h3>
                  <p className="text-sm text-muted-foreground">
                    Full-stack development, cloud architecture, and sustainable technology solutions
                  </p>
                </div>
              </CardContent>
            </Card>
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
              <a href="/path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer" className="gap-2">
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
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            data-testid="link-certification-1"
          >
            <Card className="h-full hover-elevate transition-all" data-testid="card-certification-1">
              <CardContent className="">
                <div className="aspect-[4/3] rounded-md bg-muted mb-4 flex items-center justify-center">
                  <Award className="h-12 w-12 text-muted-foreground/50" />
                </div>
                <h3 className="font-medium mb-1 group-hover:text-primary transition-colors" data-testid="text-certification-name-1">
                  AWS Certified Solutions Architect - Associate
                </h3>
                <p className="text-sm text-muted-foreground" data-testid="text-certification-issuer-1">Amazon Web Services</p>
                <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
                  <ExternalLink className="h-3 w-3" />
                  <span>View certificate</span>
                </div>
              </CardContent>
            </Card>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            data-testid="link-certification-2"
          >
            <Card className="h-full hover-elevate transition-all" data-testid="card-certification-2">
              <CardContent className="">
                <div className="aspect-[4/3] rounded-md bg-muted mb-4 flex items-center justify-center">
                  <Award className="h-12 w-12 text-muted-foreground/50" />
                </div>
                <h3 className="font-medium mb-1 group-hover:text-primary transition-colors" data-testid="text-certification-name-2">
                  Google Cloud Professional Cloud Architect
                </h3>
                <p className="text-sm text-muted-foreground" data-testid="text-certification-issuer-2">Google Cloud</p>
                <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
                  <ExternalLink className="h-3 w-3" />
                  <span>View certificate</span>
                </div>
              </CardContent>
            </Card>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            data-testid="link-certification-3"
          >
            <Card className="h-full hover-elevate transition-all" data-testid="card-certification-3">
              <CardContent className="">
                <div className="aspect-[4/3] rounded-md bg-muted mb-4 flex items-center justify-center">
                  <Award className="h-12 w-12 text-muted-foreground/50" />
                </div>
                <h3 className="font-medium mb-1 group-hover:text-primary transition-colors" data-testid="text-certification-name-3">
                  Microsoft Certified: Azure Developer Associate
                </h3>
                <p className="text-sm text-muted-foreground" data-testid="text-certification-issuer-3">Microsoft</p>
                <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
                  <ExternalLink className="h-3 w-3" />
                  <span>View certificate</span>
                </div>
              </CardContent>
            </Card>
          </a>
        </div>
      </section>
      
      <section className="mb-16 md:mb-20" data-testid="section-languages">
        <div className="flex items-center gap-3 mb-6">
          <Globe2 className="h-6 w-6 text-muted-foreground" />
          <h2 className="text-2xl md:text-3xl font-semibold" data-testid="text-languages-heading">Languages</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
            data-testid="link-language-fr"
          >
            <Card className="h-full hover-elevate" data-testid="card-language-fr">
              <CardContent className="">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-mono font-semibold text-muted-foreground" data-testid="text-language-flag-fr">
                    🇫🇷
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg font-medium mb-1" data-testid="text-language-name-fr">French</h3>
                <Badge variant="secondary" className="text-xs font-normal" data-testid="badge-language-level-fr">
                  Native
                </Badge>
              </CardContent>
            </Card>
          </a>

          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
            data-testid="link-language-en"
          >
            <Card className="h-full hover-elevate" data-testid="card-language-en">
              <CardContent className="">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-mono font-semibold text-muted-foreground" data-testid="text-language-flag-en">
                    🇬🇧
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg font-medium mb-1" data-testid="text-language-name-en">English</h3>
                <Badge variant="secondary" className="text-xs font-normal" data-testid="badge-language-level-en">
                  Professional
                </Badge>
              </CardContent>
            </Card>
          </a>
        
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
            data-testid="link-language-es"
          >
            <Card className="h-full hover-elevate" data-testid="card-language-es">
              <CardContent className="">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-mono font-semibold text-muted-foreground" data-testid="text-language-flag-es">
                    🇪🇸
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg font-medium mb-1" data-testid="text-language-name-es">Spanish</h3>
                <Badge variant="secondary" className="text-xs font-normal" data-testid="badge-language-level-es">
                  Professional
                </Badge>
              </CardContent>
            </Card>
          </a>

          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
            data-testid="link-language-es"
          >
            <Card className="h-full hover-elevate" data-testid="card-language-es">
              <CardContent className="">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-mono font-semibold text-muted-foreground" data-testid="text-language-flag-es">
                    🇧🇷
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg font-medium mb-1" data-testid="text-language-name-es">Portuguese</h3>
                <Badge variant="secondary" className="text-xs font-normal" data-testid="badge-language-level-es">
                  Advanced
                </Badge>
              </CardContent>
            </Card>
          </a>
        </div>
      </section>

      <section className="mb-16 md:mb-20" data-testid="section-testimonials">
        <div className="flex items-center gap-3 mb-6">
          <MessageSquare className="h-6 w-6 text-muted-foreground" />
          <h2 className="text-2xl md:text-3xl font-semibold" data-testid="text-testimonials-heading">Recommendations</h2>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="h-full hover-elevate" data-testid="card-testimonial-1">
              <CardContent className="">
                <Quote className="h-5 w-5 text-muted-foreground/40 mb-3" />
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed" data-testid="text-testimonial-content-1">
                  "Alexandre is an exceptional engineer. His problem-solving skills and dedication are truly inspiring. I highly recommend him!"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-muted text-muted-foreground text-sm">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm" data-testid="text-testimonial-name-1">Jane Doe</p>
                    <p className="text-xs text-muted-foreground" data-testid="text-testimonial-role-1">
                      CTO at Example Corp
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="h-full hover-elevate" data-testid="card-testimonial-2">
              <CardContent className="">
                <Quote className="h-5 w-5 text-muted-foreground/40 mb-3" />
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed" data-testid="text-testimonial-content-2">
                  "Working with Alexandre was a pleasure. He consistently delivered high-quality work and was a valuable asset to our team."
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-muted text-muted-foreground text-sm">
                      MS
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm" data-testid="text-testimonial-name-2">Mark Smith</p>
                    <p className="text-xs text-muted-foreground" data-testid="text-testimonial-role-2">
                      Lead Developer at Tech Solutions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="h-full hover-elevate" data-testid="card-testimonial-3">
              <CardContent className="">
                <Quote className="h-5 w-5 text-muted-foreground/40 mb-3" />
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed" data-testid="text-testimonial-content-3">
                  "Alexandre's expertise in machine learning was crucial for our project's success. He's a true professional."
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-muted text-muted-foreground text-sm">
                      LS
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm" data-testid="text-testimonial-name-3">Laura Green</p>
                    <p className="text-xs text-muted-foreground" data-testid="text-testimonial-role-3">
                      Project Manager at AI Innovators
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
      </section>

      {/* Re-adding the More Details link at the bottom as it was implicitly requested to remain. */}
      <section className="text-center mt-12" data-testid="section-more-details-bottom">
        <Button asChild variant="outline">
          <Link to="/more-details">
            More Details <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
        <p className="text-sm text-muted-foreground mt-3" data-testid="text-more-details-hint">
          Learn more about my interests, recommended books, and personal journey
        </p>
      </section>
    </div>
  );
}