import { DoodleRocket, DoodleStar } from "./DoodleElements";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Domains.co.uk",
    tech: "Next.js · Node.js · PostgreSQL · Docker · AWS",
    description: "A comprehensive domain management platform for browsing, purchasing, leasing, and negotiating premium domains. Integrated OpenAI, Stripe, Escrow, Zendesk, and Cloudflare.",
  },
  {
    title: "Arbitrage Hero Inspector",
    tech: "Chrome Extension · React.js · Redux",
    description: "Chrome extension for collecting product data across multiple online stores using XPaths or custom selectors, with pagination and background tab scanning.",
  },
  {
    title: "Satellite Data Processing",
    tech: "C++ · Docker · Parallel Programming",
    description: "Optimized satellite data processing application with parallel programming techniques, achieving significant improvements in execution time.",
  },
  {
    title: "Arbitrage Extension",
    tech: "Chrome Extension · React.js · Redux",
    description: "Chrome extension comparing Amazon product prices across Walmart, Argos, and other platforms with profit calculator and FBM/FBA options.",
  },
  {
    title: "Friend Filter",
    tech: "Vue.js · Vuex · Ruby Grape API · Docker",
    description: "Chrome extension enhancing Facebook marketing workflows — identify engaged friends, detect inactive accounts, and optimize friend lists.",
  },
  {
    title: "The Show Nexus",
    tech: "React Native · Node.js · SQL · Expo",
    description: "FYP mobile app serving as a central hub for TV show enthusiasts with community interaction, reviews, recommendations, and streaming links.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <DoodleRocket className="absolute top-12 left-[6%] w-10 h-14 text-secondary/25 rotate-12 hidden md:block" />
      <DoodleStar className="absolute bottom-16 right-[10%] w-8 h-8 text-primary/10 hidden md:block" />

      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          <span className="doodle-underline">Projects</span>
        </h2>
        <p className="font-handwritten text-xl text-secondary text-center mb-12">things I've built</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="group doodle-border p-6 bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold group-hover:text-secondary transition-colors">{project.title}</h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
              </div>
              <p className="font-handwritten text-sm text-secondary mb-3">{project.tech}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
