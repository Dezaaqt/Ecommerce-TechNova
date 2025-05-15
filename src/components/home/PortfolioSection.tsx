import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, category, description, link }) => {
  return (
    <Card hoverable className="overflow-hidden group">
      <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
      </div>
      <div className="p-2">
        <div className="text-sm text-blue-600 font-medium mb-2">{category}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a 
          href={link} 
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
        >
          View Project <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </div>
    </Card>
  );
};

const PortfolioSection: React.FC = () => {
  const projects = [
    {
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "EcoHome Smart Platform",
      category: "Web Development",
      description: "A comprehensive IoT platform for smart home management with real-time analytics.",
      link: "/portfolio/ecohome"
    },
    {
      image: "https://images.pexels.com/photos/4068381/pexels-photo-4068381.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "HealthTrack Mobile App",
      category: "App Development",
      description: "A health tracking mobile application with personalized insights and coaching.",
      link: "/portfolio/healthtrack"
    },
    {
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Finance Pro Dashboard",
      category: "UI/UX Design",
      description: "A financial analytics dashboard designed for intuitive data visualization.",
      link: "/portfolio/financepro"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Recent Work</h2>
          <p className="text-gray-600 text-lg">
            Explore our latest projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;