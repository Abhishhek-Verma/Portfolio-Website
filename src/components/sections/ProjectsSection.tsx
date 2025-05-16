"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image?: string;
  techs: string[];
  githubUrl?: string;
  details: string[];
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "DevScope",
      description: "An AI-powered GitHub portfolio generator",
      image: "/images/projects/devscope.jpg", // Replace with your own image path or hosted image
      techs: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS"],
      githubUrl: "https://github.com/Abhishhek-Verma/DevScope",
      details: [
        "Developed an AI-powered tool to generate personalized GitHub portfolios",
        "Integrated OpenAI API for dynamic content generation",
        "Implemented responsive design with Tailwind CSS and Next.js"
      ]
    },
    {
      title: "Civic Platform",
      description: "A community engagement tool for local activism",
      image: "/images/projects/civic-platform.jpg",
      techs: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
      githubUrl: "https://github.com/Abhishhek-Verma/Civic-Platform",
      details: [
        "Built a platform to connect local communities and organize events",
        "Implemented user authentication and real-time collaboration",
        "Designed intuitive UI for event creation and campaign management"
      ]
    },
    {
      title: "Airbnb Clone",
      description: "A full-featured clone of Airbnb with property listings and reservations",
      image: "/images/projects/airbnb.jpg",
      techs: ["Next.js", "TypeScript", "Prisma", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/Abhishhek-Verma/Airbnb",
      details: [
        "Built a full-stack clone with modern authentication and dashboard",
        "Integrated property listing, search filters, and date-based booking",
        "Used Prisma ORM with MongoDB for efficient data handling"
      ]
    },
    {
      title: "Artistry Hub",
      description: "A platform for artists to showcase and sell their artwork",
      image: "/images/projects/artistry-hub.jpg",
      techs: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/Abhishhek-Verma/Artistry-Hub",
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
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
