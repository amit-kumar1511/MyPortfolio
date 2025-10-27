import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
               Love connecting with new people! Drop me a message anytime i would be happy to chat.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">amit55421kumar@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+91 8002786529</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Janakpuri Delhi</p>
                </div>
              </div>
            </div>

            <div className="pt-1">
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/amit-kumar1511" 
                  className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/20 transition-colors duration-300 group"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </a>
                <a 
                  href="https://linkedin.com/in/amit-kumar-a43279321" 
                  className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/20 transition-colors duration-300 group"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/20 transition-colors duration-300 group"
                  aria-label="Twitter Profile"
                >
                  <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-elevated rounded-2xl p-8 animate-slide-in-right">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                  <Input 
                    id="firstName"
                    placeholder="Amit"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                  <Input 
                    id="lastName"
                    placeholder="Kumar"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="amit.kr423@gmail.com"
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea 
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 glow-effect"
                asChild
              >
                <a 
                  href="https://linkedin.com/in/amit-kumar-a43279321" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </a>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;