"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from "react-icons/fi";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    setSubmitted(true);
    // Reset form
    setName("");
    setEmail("");
    setMessage("");

    // Reset submitted status after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-4 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Ways to reach me directly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <FiMail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <a href="mailto:abhi.ups838@gmail.com" className="text-sm text-muted-foreground hover:text-primary">
                      abhi.ups838@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <FiPhone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <a href="tel:+918381836793" className="text-sm text-muted-foreground hover:text-primary">
                      +91 8381836793
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <FiMapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Ghaziabad, U.P. 201206, India</p>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-sm font-medium mb-2">Social Profiles</p>
                  <div className="flex gap-3">
                    <a
                      href="https://www.linkedin.com/in/Abhishkek-Verma"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors"
                    >
                      <FiLinkedin className="h-5 w-5 text-primary" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                      href="https://github.com/Abhishkek-Verma"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors"
                    >
                      <FiGithub className="h-5 w-5 text-primary" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>I'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-2 rounded-md border border-input bg-background"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-2 rounded-md border border-input bg-background"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full p-2 rounded-md border border-input bg-background min-h-[120px]"
                      placeholder="Your message"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    {submitted ? "Message Sent!" : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
