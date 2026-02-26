import { DoodleLightbulb, DoodleCoffee } from "./DoodleElements";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <DoodleLightbulb className="absolute top-10 right-[8%] w-10 h-14 text-secondary/30 hidden md:block" />
      <DoodleCoffee className="absolute bottom-10 left-[6%] w-10 h-10 text-primary/10 hidden md:block" />

      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          About <span className="doodle-underline">Me</span>
        </h2>
        <p className="font-handwritten text-xl text-secondary text-center mb-12">a quick overview</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="doodle-border p-6 bg-card hover:shadow-lg transition-shadow group">
            <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">Education</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Master's at BUPT, Beijing (2025-Present). Bachelor's in CS from FAST-NU, Pakistan (2019-2023).
            </p>
          </div>

          <div className="doodle-border p-6 bg-card hover:shadow-lg transition-shadow group">
            <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">Experience</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              2+ years at Qbatch as Associate Software Engineer. Full-stack development with modern technologies.
            </p>
          </div>

          <div className="doodle-border p-6 bg-card hover:shadow-lg transition-shadow group">
            <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">Achievements</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Dean's List & Silver Medal in Spring 2021 and Fall 2020 at FAST-NU.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
