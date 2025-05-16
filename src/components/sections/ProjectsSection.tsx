"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image?: string;
  techs: string[];
  githubUrl?: string;
  liveUrl?: string;
  details: string[];
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "DevScope",
      description: "An AI-powered GitHub portfolio generator",
      image: "https://source.unsplash.com/featured/?technology",
      techs: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/devscope",
      liveUrl: "https://devscope.vercel.app",
      details: [
        "Developed an AI-powered tool to generate personalized GitHub portfolios",
        "Integrated OpenAI API for dynamic content generation",
        "Implemented responsive design with Tailwind CSS and Next.js"
      ]
    },
    {
      title: "Civic Platform",
      description: "A community engagement tool for local activism",
      image: "https://source.unsplash.com/featured/?civic",
      techs: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
      githubUrl: "https://github.com/yourusername/civic-platform",
      liveUrl: "https://civicplatform.example.com",
      details: [
        "Built a platform to connect local communities and organize events",
        "Implemented user authentication and real-time chat features",
        "Designed intuitive UI for event creation and community discussions"
      ]
    },
    {
      title: "Spotify Clone",
      description: "A responsive frontend app that replicates the Spotify interface",
      image: "https://source.unsplash.com/featured/?music",
      techs: ["HTML", "CSS", "JavaScript"],
      details: [
        "Designed a responsive frontend that enhanced user engagement",
        "Created an intuitive interface for music browsing and playlist creation",
        "Implemented dynamic user interactions for seamless playback"
      ]
    },
    {
      title: "Sundown Studio",
      description: "An interactive web application with smooth animations",
      image: "https://source.unsplash.com/featured/?studio",
      techs: ["HTML", "CSS", "JavaScript", "Locomotive", "Swiper JS", "GSAP"],
      details: [
        "Created an interactive web application using advanced animation libraries",
        "Designed smooth scrolling effects and responsive layouts",
        "Integrated dynamic sliders for an immersive user experience"
      ]
    },
    {
      title: "Artistry Hub",
      description: "A platform for artists to showcase and sell their artwork",
      image: "https://source.unsplash.com/featured/?art",
      techs: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      details: [
        "Developed a full-stack MERN application for artists to showcase their work",
        "Implemented user authentication, artwork upload, and e-commerce features",
        "Created a responsive design with intuitive navigation and search functionality"
      ]
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-20 relative overflow-hidden">
      {/* Background blur circles */}
      <div className="absolute -top-24 right-24 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-24 -left-24 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-4 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Showcasing my work and technical skills through various projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col h-full card-hover"
            >
              <Card className="h-full flex flex-col border-none shadow-lg overflow-hidden">
                <div className="h-56 overflow-hidden relative">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="object-cover"
                      fill
                      priority
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-primary/20 to-muted flex items-center justify-center">
                      <span className="text-xl font-bold">{project.title}</span>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techs.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                    {project.details.map((detail, idx) => (
                      <li key={`${project.title}-detail-${idx}`}>{detail}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex gap-2">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <FiGithub className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <FiExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
