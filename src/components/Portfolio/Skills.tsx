import { Code, Palette, Database, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Language",
      skills: ["Java","C", "Python","JavaScript",  "HTML5"]
    },
    {
      icon: Palette,
      title: "FrameWork/DB",
      skills: ["React Js","Tailwind CSS", "BootStrap", "MySQL", "MongoDB"]
    },
     {
      icon: Zap,
      title: "Tools",
      skills: ["GitHub", "Vs Code", "Vite", "Vercel","Netlify",]
    },
    {
      icon: Database,
      title: "Currently Learning",
      skills: ["Node.js", "Express","Docker", "PostMan","DSA"]
    }
   
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="card-elevated rounded-2xl p-6 text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                <category.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="text-sm text-muted-foreground bg-background/50 rounded-lg px-3 py-2 hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;