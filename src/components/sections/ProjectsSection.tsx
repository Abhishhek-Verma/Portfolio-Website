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
      title: "Spotify Clone",
      description: "A responsive frontend app that replicates the Spotify interface",
      image: "/images/projects/spotify-clone.jpg",
      techs: ["HTML", "CSS", "JavaScript"],
      details: [
        "Designed a responsive frontend that enhanced user engagement",
        "Designed an intuitive, responsive interface for music browsing, playlist creation, and personalized recommendations",
        "Implemented dynamic user interactions and optimized performance for seamless playback and navigation"
      ]
    },
    {
      title: "Sundown Studio",
      description: "An interactive web application with smooth animations",
      image: "/images/projects/sundown-studio.webp", // Placeholder image
      techs: ["HTML", "CSS", "JavaScript", "Locomotive", "Swiper JS", "GSAP"],
      details: [
        "Created an interactive web application using HTML, CSS, and JavaScript with advanced libraries",
        "Designed smooth animations, scrolling effects, and responsive layouts to enhance user engagement",
        "Integrated dynamic sliders and transitions for a seamless and immersive user experience"
      ]
    },
    {
      title: "Artistry Hub",
      description: "A platform for artists to showcase and sell their artwork",
      image: "/images/projects/artistry-hub.png", // Placeholder image
      techs: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      details: [
        "Developed a full-stack MERN application for artists to showcase their work",
        "Implemented user authentication, artwork upload, and e-commerce features",
        "Created a responsive design with intuitive navigation and search functionality"
      ]
    },
    {
      title: "Portfolio Website",
      description: "A professional portfolio website showcasing my skills and projects",
      image: "/images/projects/portfolio-image.png", // Placeholder image
      techs: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
      details: [
        "Designed and developed a responsive portfolio website using Next.js and React",
        "Implemented smooth animations and transitions using Framer Motion",
        "Created a clean, modern UI with Tailwind CSS and Shadcn UI components"
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
                  {project.title === "Spotify Clone" ? (
                    <Image
                      src={project.image || ""}
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
