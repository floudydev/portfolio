import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import ProjectModal, { ProjectDetails } from "@/components/ProjectModal";
import { projects } from "@/data/projects";

const Index = () => {
  const [time, setTime] = useState(new Date());
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleProjectClick = (project: ProjectDetails) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Welcome!!!</h1>
      <div className="min-h-screen bg-[#121212] text-white">
        <div className="bento-grid">
          {/* Welcome Card */}
          <div className="bento-card col-span-2">
            <h2 className="text-sm text-gray-400 mb-2">welcome</h2>
            <h1 className="text-4xl font-bold mb-4">
              Hi, I'm <span className="text-blue-400">FLOUDY</span>
            </h1>
            <p className="text-gray-300 text-lg">
              backend is a developer of chatbots and server codes for different types of tasks. I also practice creating websites, learning PHP step by step.
            </p>
          </div>

          {/* About Card */}
          <div className="bento-card row-span-2">
            <h2 className="text-2xl font-bold mb-6">About me</h2>
            <p className="text-gray-300 text-lg mb-6">
              I specialize in creating modern chatbots, websites, web and desktop applications. I use React, Express, Electron, Telegraf and other technologies
            </p>
            <div className="space-y-4">
              <p className="text-lg text-gray-400">My tools:</p>
              <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                <li>React</li>
                <li>TypeScript</li>
                <li>Node.js</li>
                <li>Tailwind CSS</li>
                <li>Telegraf</li>
                <li>Express</li>
                <li>Electron</li>
              </ul>
            </div>
          </div>

          {/* Time Card */}
          <div className="bento-card">
            <h2 className="text-lg text-gray-400 mb-4">Current Time</h2>
            <p className="text-3xl font-bold font-mono">
              {time.toLocaleTimeString()}
            </p>
          </div>

          {/* Contact Card */}
          <div className="bento-card">
            <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
            <div className="flex space-x-6">
              <a href="https://github.com/floudydev" target="_blank" rel="noopener noreferrer" 
                className="p-3 rounded-full hover:bg-gray-800 transition-colors">
                <Github className="w-8 h-8" />
              </a>
              {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-gray-800 transition-colors">
                <Linkedin className="w-8 h-8" />
              </a> */}
              <a href="mailto:ek9705946@icloud.com"
                className="p-3 rounded-full hover:bg-gray-800 transition-colors">
                <Mail className="w-8 h-8" />
              </a>
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-gray-800 transition-colors">
                <Twitter className="w-8 h-8" />
              </a> */}
            </div>
          </div>

          {/* Projects Card */}
        <div className="bento-card col-span-2">
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <div className="grid grid-cols-2 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="p-6 bg-card-hover rounded-lg cursor-pointer hover:transform hover:scale-105 transition-all"
                onClick={() => handleProjectClick(project)}
              >
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* Project Modal */}
        <ProjectModal 
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default Index;
