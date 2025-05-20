"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SkillsSection() {
  const skillCategories = [
    {
      name: "Languages",
      icon: "💻",
      skills: [
        { name: "Java", proficiency: 90 },
        { name: "JavaScript", proficiency: 85 },
        { name: "Python", proficiency: 80 },
        { name: "C", proficiency: 75 },
      ],
    },
    {
      name: "Web & Backend",
      icon: "🌐",
      skills: [
        { name: "React.js", proficiency: 85 },
        { name: "Node.js", proficiency: 80 },
        { name: "Express.js", proficiency: 80 },
        { name: "HTML", proficiency: 90 },
        { name: "Tailwind CSS", proficiency: 85 },
      ],
    },
    {
      name: "Databases",
      icon: "🗄️",
      skills: [
        { name: "MongoDB", proficiency: 85 },
        { name: "SQL", proficiency: 75 },
      ],
    },
    {
      name: "Other Skills",
      icon: "🛠️",
      skills: [
        { name: "Github", proficiency: 80 },
        { name: " Railway", proficiency: 70 },
        { name: " Vercel", proficiency: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-gradient py-16 md:py-20 relative overflow-hidden">
      {/* Background blur circles */}
      <div className="absolute top-24 -right-24 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-4 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Skills</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            My technical skills and proficiency levels in various technologies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 card-hover"
        >
          <Card className="border-none shadow-lg bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center">Skills Proficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="Languages" className="w-full">
                <TabsList className="w-full justify-start mb-6 overflow-auto bg-muted/50">
                  {skillCategories.map((category) => (
                    <TabsTrigger key={category.name} value={category.name} className="data-[state=active]:bg-background">
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {skillCategories.map((category) => (
                  <TabsContent key={category.name} value={category.name} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                          </div>
                          <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                              style={{ width: `${skill.proficiency}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 card-hover"
        >
          <Card className="border-none shadow-lg bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Additional Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/10 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <span className="text-blue-500 text-lg mr-2">🧩</span>
                    Coding Profiles
                  </h3>
                  <p className="text-sm mb-1 flex items-center">
                    <span className="font-medium">Leetcode:</span>
                    <span className="ml-2 px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full">
                      300+ Questions
                    </span>
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100/50 dark:from-purple-900/20 dark:to-purple-800/10 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <span className="text-purple-500 text-lg mr-2">💡</span>
                    Problem Solving
                  </h3>
                  <p className="text-sm">
                    Strong analytical skills with a focus on efficient algorithm design and implementation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
