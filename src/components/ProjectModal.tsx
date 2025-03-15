
import { Github, ExternalLink } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export interface ProjectDetails {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
}

interface ProjectModalProps {
  project: ProjectDetails | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card border-gray-800 text-white max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">{project.title}</DialogTitle>
          <DialogDescription className="text-gray-400 mt-2">
            {project.description}
          </DialogDescription>
        </DialogHeader>
        
        {project.imageUrl && (
          <div className="my-4 rounded-md overflow-hidden">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-auto object-cover"
            />
          </div>
        )}
        
        <div className="my-4">
          <p className="text-gray-300 mb-4">{project.fullDescription}</p>
          
          <div className="flex flex-wrap gap-2 my-4">
            {project.technologies.map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-4 mt-6">
          <Button 
            variant="default" 
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
            onClick={() => window.open(project.githubUrl, "_blank")}
          >
            <Github className="w-4 h-4" />
            GitHub Repository
          </Button>
          
          {project.liveUrl && (
            <Button 
              variant="outline" 
              className="flex items-center gap-2 border-gray-600"
              onClick={() => window.open(project.liveUrl, "_blank")}
            >
              <ExternalLink className="w-4 h-4" />
              View Live
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
