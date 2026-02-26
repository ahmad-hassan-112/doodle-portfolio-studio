import { DoodleArrow, DoodleSpiral } from "./DoodleElements";

const experiences = [
  {
    period: "2023 – 2026",
    role: "Senior Software Engineer",
    company: "Qbatch",
    location: "Faisalabad, Pakistan",
    description: "Built full-stack applications including domain management platforms, Chrome extensions, and satellite data processing systems using Next.js, Node.js, React, Vue, Docker, and AWS.",
  },
  {
    period: "2022",
    role: "Intern – Ruby on Rails",
    company: "Qbatch",
    location: "Faisalabad, Pakistan",
    description: "Gained hands-on experience with Ruby on Rails development during summer internship.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/50 relative">
      <DoodleArrow className="absolute top-16 left-[10%] w-20 h-8 text-primary/10 hidden md:block" />
      <DoodleSpiral className="absolute bottom-16 right-[8%] w-12 h-12 text-secondary/20 hidden md:block" />

      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          <span className="doodle-underline">Experience</span>
        </h2>
        <p className="font-handwritten text-xl text-secondary text-center mb-12">my journey so far</p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/10 -translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-background -translate-x-1/2 z-10 mt-6" />

                <div className={`flex-1 ml-10 md:ml-0 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <span className="font-handwritten text-lg text-secondary">{exp.period}</span>
                  <h3 className="text-xl font-bold mt-1">{exp.role}</h3>
                  <p className="text-muted-foreground font-medium">{exp.company} · {exp.location}</p>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{exp.description}</p>
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
