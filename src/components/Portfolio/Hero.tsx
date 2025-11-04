import { ArrowDown, Github, Linkedin, Mail, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import aamit from "@/assets/aamit.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden mt-20 md:mt-0 lg:mt-7">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary-glow/11 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-32  mt-5 md:mt-0 items-center">
        {/* Content */}
        <div className="space-y-8 animate-slide-in-left">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Code2 className="w-5 h-5" />
              <span className="text-sm font-medium tracking-wide">FRONTEND DEVELOPER</span>
            </div>
            <h1 className="text-2xl lg:text-3xl md:text-3xl font-bold leading-tight">
               Hi, I'm{" "} <br />
              <span className="gradient-text text-4xl lg:text-5xl ">Amit Kumar</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              I ’ m a Frontend Developer passionate about crafting responsive and interactive web applications. With expertise in React.Js , TailwindCSS and JavaScript   . .     I focus on building clean, pixel-perfect, and user-friendly interfaces.
              
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
         
            <Button variant="outline" size="lg" className="border-border hover:bg-card" asChild>
               <a href="/Amit_resume_frontend.pdf" download>
              <Mail className="w-4 h-4 mr-2" />
              Download Resume
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <a 
              href="https://github.com/amit-kumar1511" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/amit-kumar-a43279321" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="relative animate-slide-in-right mb-20 md:mb-0">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-glow rounded-full blur-2xl opacity-20 scale-105"></div>
            <img 
              src={aamit} 
              alt="Alex Chen - Frontend Developer"
              className="relative w-full max-w-md mx-auto rounded-full shadow-1xl card-elevated"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;