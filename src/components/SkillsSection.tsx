import { DoodleBrackets, DoodleCircle } from "./DoodleElements";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Redux", "Vue.js", "Pinia", "Vuex", "HTML/CSS", "React Native", "Expo"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Passport.js", "Ruby Grape API", "Drupal"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "SQL", "Sequelize", "Mongoose"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "AWS S3/EC2/ECS/EFS", "Cloudflare"],
  },
  {
    title: "Integrations",
    skills: ["Stripe", "Escrow", "Zendesk", "Paypal", "DirectUs", "Strapi", "OpenAI"],
  },
  {
    title: "Languages",
    skills: ["JavaScript/TypeScript", "C++", "Python (AI/ML)", "PHP"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/50 relative">
      <DoodleBrackets className="absolute top-16 right-[8%] w-14 h-10 text-primary/10 hidden md:block" />
      <DoodleCircle className="absolute bottom-20 left-[6%] w-10 h-10 text-secondary/20 hidden md:block" />

      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          <span className="doodle-underline">Skills</span>
        </h2>
        <p className="font-handwritten text-xl text-secondary text-center mb-12">my toolbox</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <div key={i} className="p-5">
              <h3 className="font-bold text-lg mb-3 font-handwritten text-2xl">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <span key={j} className="px-3 py-1.5 bg-card border border-border rounded-full text-sm text-foreground hover:border-secondary hover:bg-secondary/10 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
