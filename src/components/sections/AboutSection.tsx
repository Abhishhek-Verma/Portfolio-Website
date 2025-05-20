"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FiBookOpen, FiAward, FiBarChart2 } from "react-icons/fi";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-4 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Computer Science student specializing in MERN Stack development and Data Structures & Algorithms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="card-hover"
          >
            <Card className="h-full border-none shadow-md bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 backdrop-blur-md">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
                    <FiBookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle>Education</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-2 border-blue-500 pl-4 py-1">
                  <h3 className="font-bold">KIET Group of Institutions</h3>
                  <p className="text-sm text-muted-foreground">Ghaziabad, U.P.</p>
                  <p className="text-sm">Bachelor of Technology in Computer Science (GPA: 8.4 / 10.00)</p>
                  <p className="text-sm">Expected June 2027</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                      Data Structures
                    </span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                      Algorithms
                    </span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                      Java
                    </span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                      MERN Stack
                    </span>
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
            className="card-hover"
          >
            <Card className="h-full border-none shadow-md bg-gradient-to-br from-purple-50 to-white dark:from-slate-900 dark:to-slate-800 backdrop-blur-md">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/30">
                    <FiAward className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle>Experience</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-2 border-purple-500 pl-4 py-1">
                  <h3 className="font-bold">TEDx KIET, KIET Group of Institutions</h3>
                  <p className="text-sm text-muted-foreground">Nov 2023 - Jan 2024</p>
                  <p className="text-sm">Curation and Documentation Team Member</p>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                    <li>Helped organize and run events</li>
                    <li>Managed club operations, improving event participation</li>
                    <li>Contributed to Curation and Documentation initiatives that supported the club's growth</li>
                    <li>Built leadership and teamwork skills through hands-on involvement</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* AI Certificate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 card-hover"
        >
          <Card className="border-none shadow-md bg-gradient-to-br from-pink-50 to-white dark:from-slate-900 dark:to-slate-800 backdrop-blur-md">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-pink-100 dark:bg-pink-900/30">
                  <FiBarChart2 className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                </div>
                <CardTitle>Certification</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="border-l-2 border-pink-500 pl-4 py-1">
                <h3 className="font-bold">Infosys Springboard Certificate</h3>
                <p className="text-sm">In Artificial Intelligence</p>
                <p className="text-sm text-muted-foreground">September-November 2024</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Cybersecurity Certificate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 card-hover"
        >
          <Card className="border-none shadow-md bg-gradient-to-br from-green-50 to-white dark:from-slate-900 dark:to-slate-800 backdrop-blur-md">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/30">
                  <FiBarChart2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Certification</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="border-l-2 border-green-500 pl-4 py-1">
                <h3 className="font-bold">Cybersecurity Foundation Certificate</h3>
                <p className="text-sm">Issued by Palo Alto Networks Academy</p>
                <p className="text-sm text-muted-foreground">May 17, 2025</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
