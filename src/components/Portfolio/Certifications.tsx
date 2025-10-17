import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import gdsc from '@/assets/GDSC-certificate.jpg'
import BBE from "@/assets/BROADCAST-BATTLE.jpg"
import LD from "@/assets/LOGOSHOW-DOWN.jpg"


const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Google Developer Student Club",
      issuer: "Google Cloud",
      date: "2023",
      image: gdsc, 
      credentialUrl: gdsc,
      description: "Generative AI and Google cloud foundations"
    },
    {
      id: 2,
      title: "Event",
      issuer: "SDIET",
      date: "2024",
      image: BBE,
      credentialUrl: BBE,
      description: "Cordinate - BROADCAST-BATTLE Event"
    },
    {
      id: 3,
      title: "Event",
      issuer: "SDIET",
      date: "2024",
      image: LD,
      credentialUrl: LD,
      description: "Cordinate - LOGOSHOW-DOWN Event"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={cert.id}
              className="card-elevated rounded-2xl overflow-hidden animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{cert.title}</h3>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span className="font-medium">{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-border hover:bg-card"
                  asChild
                >
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Credential
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;