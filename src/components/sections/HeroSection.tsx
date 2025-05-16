"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { FiArrowRight, FiFileText, FiGithub, FiLinkedin } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="hero-gradient relative py-20 md:py-28 overflow-hidden">
      {/* Background blur circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <div className="rounded-full p-1 bg-gradient-to-r from-blue-500 to-purple-500">
              <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-background">
                <AvatarImage src="/images/Profile.jpg" alt="Abhishek Verma" />
                <AvatarFallback>AV</AvatarFallback>
              </Avatar>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              <span className="text-gradient">Hi, I'm Abhishek Verma</span>
            </h1>

            <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
              Computer Science Student | MERN Stack Developer | DSA Enthusiast
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-4"
          >
            <a
              href="https://github.com/Abhishhek-Verma"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background/80 p-2 rounded-full hover:bg-background/90 transition-colors"
            >
              <FiGithub className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/Abhishhek-Verma"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background/80 p-2 rounded-full hover:bg-background/90 transition-colors"
            >
              <FiLinkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-6"
          >
            <Button asChild size="lg" className="rounded-full group">
              <a href="#contact" className="flex items-center gap-2">
                Contact Me
                <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a
                href="/Abhishek_Verma_Resume.pdf"
                download="Abhishek_Verma_Resume.pdf"
                className="flex items-center gap-2"
              >
                <FiFileText className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full max-w-4xl mt-16 pt-8 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl blur-xl" />
            <div className="glass-card rounded-xl p-6 md:p-8 relative">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">A Bit About Me</h2>
              <p className="text-muted-foreground">
               Computer Science student at KIET Group of Institutions with a strong interest in web development and data structures & algorithms. Proficient in MERN stack development, I have built several full-stack applications, including DevScope—an AI-powered GitHub portfolio generator—and Civic Platform, a community engagement tool for local activism. I’m passionate about creating scalable, user-centric applications and enjoy tackling complex technical challenges.


              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="section-divider w-full" />
      </div>
    </section>
  );
}
