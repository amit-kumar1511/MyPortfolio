import { CarFront, ExternalLink, Github, Lightbulb, ShoppingCart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

import img from '/src/assets/AI-trip.png'
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Ai Trip Planner",
      description: "AI Trip Planner – Plan your perfect journey with smart recommendations! Our AI suggests the best hotels, places to visit, and daily itineraries tailored to your interests. Easily save and customize your trip, get real-time updates, and enjoy stress-free travel planning—all in one app.",
      icon: CarFront,
      tech: ["React.js","Tailwind CSS" , 'Shadcn UI','Google Place API' , 'Google Auth','unsplash','etc.'],
      image: img,
      liveUrl: "https://ai-trip-plan1511.vercel.app/",
      githubUrl: "https://github.com/amit-kumar1511/ai-trip-planner-web"
    },
    
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "A modern eCommerce web app built with React.js and Clerk for secure authentication, featuring product browsing, cart management, and checkout with a responsive, user-friendly interface and seamless shopping experience.",
      icon: ShoppingCart,
      tech: ["React.js","Css" , "Clerk"],
      image: "https://www.blog.shippypro.com/hubfs/Blog/fashion-ecommerce.jpg",
      liveUrl: "https://shoper1511.vercel.app/",
      githubUrl: "https://github.com/amit-kumar1511/Clothing-Ecommerce-Website?tab=readme-ov-file"
    },
    {
      id: 3,
      title: "Video Call WebApp",
      description: "A video call web app built with React.js, Clerk, ZegoCloud, and Tailwind CSS, offering real-time video communication and chat, secure authentication, responsive design, and a smooth, user-friendly interface for seamless virtual meetings.",
      icon: Lightbulb,
      tech: ["React", "Zegocoud", "Tailwind CSS","Clerk"],
      image: "https://i.ytimg.com/vi/96nTH-uOFhQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDOAVjgCrbrkir4RBAjW4Lq3Dl0-g",
      liveUrl: "https://zomeet.netlify.app/",
      githubUrl: "https://github.com/amit-kumar1511/Online-Meeting-WebApp?tab=readme-ov-file"
    },
   
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`grid lg:grid-cols-2 gap-6 lg:gap-8 items-center animate-fade-in ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative overflow-hidden rounded-2xl card-elevated">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-56 sm:h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-card/90 backdrop-blur-sm flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className={`space-y-4 lg:space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="space-y-3 lg:space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                  <Button 
                    size="sm"
                    className="bg-primary  hover:bg-primary/90 glow-effect flex-2 sm:flex-none"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-border hover:bg-card flex-2 sm:flex-none"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <Button variant="outline" size="lg" className="border-border hover:bg-card">
            <Github className="w-4 h-4 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;