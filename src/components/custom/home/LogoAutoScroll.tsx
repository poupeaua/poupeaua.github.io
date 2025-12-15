// see {name}.svg in public/svg for the logos
const technologies = [
  "Google Cloud Platform",
  "ansible",
  "TensorFlow",
  "python",
  "terraform",
  "Amazon Web Services",
  "airflow",
  "azure",
  "fastAPI",
  "git",
  "docker",
  "postgreSQL",
  "spark",
  "PyTorch",
  "Data Version Control",
  "SQL Server",
  "nginx"
];

export function LogoWall() {
  return (
    <>
        <div className="relative overflow-x-hidden mb-16 md:mb-20 py-4">
        
            {/* background opacity on the left and right to give the illusion of infinite scroll */}
            <div
                className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-background to-transparent z-20"
            >
            </div>
            <div
                className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-background to-transparent z-20"
            >
            </div>

            <div className="flex animate-scroll hover:animate-paused gap-12 md:gap-20 w-max">
                {
                [...technologies, ...technologies, ...technologies].map((tech, index) => (
                    <div key={index} className="flex items-center gap-2 group transition-all duration-300">
                    <img
                        src={`/svg/${tech}.svg`}
                        alt={tech}
                        className="h-8 w-auto object-contain transition-transform group-hover:scale-110 opacity-90 dark:opacity-70"
                        loading="lazy"
                    />
                    <span className="text-lg font-medium text-muted-foreground">
                        {tech.charAt(0).toUpperCase() + tech.slice(1)}
                    </span>
                    </div>
                ))
                }
            </div>
            </div>

            <style>{`
            @keyframes scroll {
                from {
                transform: translateX(0);
                }
                to {
                transform: translateX(-50%);
                }
            }
            .animate-scroll {
                animation: scroll 60s linear infinite;
            }

            @media (min-width: 768px) {
                .animate-scroll {
                animation-duration: 50s;
                }
            }
            `}</style>
    </>
  );
}