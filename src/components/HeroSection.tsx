import profileImg from "@/assets/profile.jpg";
import { PaperPlane, DoodleStar, DoodleArrow, DoodleRocket, DoodleBrackets } from "./DoodleElements";
import { Mail, Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Doodle decorations */}
      <PaperPlane className="absolute top-16 right-[10%] w-16 h-16 text-primary/15 rotate-12 animate-float hidden md:block" />
      <DoodleStar className="absolute top-32 left-[8%] w-10 h-10 text-secondary/40 animate-spin-slow" />
      <DoodleArrow className="absolute bottom-32 left-[12%] w-24 h-10 text-primary/10 rotate-6 hidden md:block" />
      <DoodleRocket className="absolute bottom-20 right-[8%] w-12 h-16 text-primary/10 -rotate-12 hidden md:block" />
      <DoodleBrackets className="absolute top-[40%] left-[5%] w-14 h-10 text-secondary/30 hidden lg:block" />
      <DoodleStar className="absolute bottom-40 left-[45%] w-8 h-8 text-secondary/25" />
      <PaperPlane className="absolute top-[60%] right-[5%] w-10 h-10 text-secondary/20 -rotate-45 hidden lg:block" />

      {/* Doodle dots pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, hsl(0 0% 8%) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }} />

      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <p className="font-handwritten text-2xl md:text-3xl text-secondary mb-2">Hey there! I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4 leading-tight">
            Ahmad<br />
            <span className="doodle-underline">Hassan</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">Senior Software Engineer with expertise in full-stack development. Currently pursuing Master's at BUPT, Beijing.

          </p>

          <div className="flex gap-4 justify-center lg:justify-start mb-8">
            <a href="mailto:ahmad.hassan289@outlook.com" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105">
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
            <a href="https://github.com/AhmadHassan1102" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>

          <div className="flex gap-6 justify-center lg:justify-start">
            <a href="https://www.linkedin.com/in/ahmad-hassan-4243ab23b/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Profile image - blended */}
        <div className="relative order-1 lg:order-2 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Yellow blob background */}
            <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl scale-110" />
            {/* Doodle circle border */}
            <svg className="absolute inset-0 w-full h-full text-primary/20 animate-spin-slow" viewBox="0 0 400 400" fill="none">
              <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="2" strokeDasharray="12 8" />
            </svg>
            {/* Image with gradient mask */}
            <div className="relative w-full h-full rounded-full overflow-hidden" style={{
              maskImage: 'radial-gradient(circle at center, black 50%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 50%, transparent 75%)'
            }}>
              <img
                src={profileImg}
                alt="Ahmad Hassan - Software Engineer"
                className="w-full h-full object-cover object-top scale-110" />

            </div>
            {/* Floating doodle accents around image */}
            <DoodleStar className="absolute -top-4 -right-4 w-8 h-8 text-secondary animate-pulse" />
            <PaperPlane className="absolute -bottom-2 -left-6 w-12 h-12 text-primary/20 rotate-45" />
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;