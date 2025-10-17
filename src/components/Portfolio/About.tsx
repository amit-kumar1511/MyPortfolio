import { User, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a keen eye for design and user experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Hello! I'm Amit Kumar</h3>
              <p className="text-muted-foreground leading-relaxed">
                I’m a Frontend Developer, currently pursuing my B.Tech in Computer Science from Satyug Darshan institute of Engineering & Technology Faridabad.
I specialize in building clean, responsive, and user-friendly web interfaces using HTML, CSS, JavaScript, React, and Tailwind CSS. Along with frontend, I’m also exploring Java and backend development to grow as a full-stack developer.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I love turning ideas into interactive digital experiences and continuously improving my problem-solving and coding skills.
Outside of coding, I enjoy exploring new technologies, learning through projects, and collaborating with others to create something impactful.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-3 text-sm">
                <User className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Frontend Developer</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Janakpuri Delhi</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">As a fresher</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <div className="card-elevated rounded-2xl p-8">
              <h4 className="text-xl font-semibold mb-6">What I Do</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-medium">Frontend Development</h5>
                    <p className="text-sm text-muted-foreground">
                      Building responsive, interactive web applications with modern frameworks
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-medium">Backend Learning</h5>
                    <p className="text-sm text-muted-foreground">
                      Exploring Java & server-side technologies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-medium">Clean Code & Optimization</h5>
                    <p className="text-sm text-muted-foreground">
                      Focus on speed, scalability, and best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;