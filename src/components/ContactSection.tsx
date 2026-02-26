import { PaperPlane, DoodleStar } from "./DoodleElements";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <PaperPlane className="absolute top-12 left-[10%] w-14 h-14 text-secondary/25 -rotate-12 hidden md:block" />
      <DoodleStar className="absolute bottom-12 right-[12%] w-8 h-8 text-primary/10 hidden md:block" />

      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Let's <span className="doodle-underline">Connect</span>
        </h2>
        <p className="font-handwritten text-xl text-secondary mb-8">I'd love to hear from you!</p>

        <p className="text-muted-foreground mb-10 leading-relaxed">
          Whether you have a project idea, want to collaborate, or just want to say hi — feel free to reach out through any of the channels below.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:ahmad.hassan289@outlook.com" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105">
            <Mail className="w-4 h-4" />
            Email Me
          </a>
          <a href="https://github.com/AhmadHassan1102" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105">
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ahmad-hassan-4243ab23b/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105">
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>

        <p className="mt-8 text-sm text-muted-foreground flex items-center justify-center gap-2">
          <MessageCircle className="w-4 h-4" />
          WeChat: ahmadhassan112
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
