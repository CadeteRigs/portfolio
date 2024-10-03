"use client"

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ModeToggle } from "@/components/mode-toggle"
import { Github, Linkedin, Mail, Menu, Briefcase, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const skills = [
    { name: "React", level: "Expert" },
    { name: "Node.js", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    { name: "Python", level: "Intermediate" },
    { name: "Docker", level: "Intermediate" },
    { name: "AWS", level: "Intermediate" },
    { name: "GraphQL", level: "Advanced" },
    { name: "MongoDB", level: "Advanced" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Briefcase className="h-6 w-6" />
              <span className="font-bold text-xl">John Doe</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">About</Link>
              <Link href="#skills" className="text-sm font-medium transition-colors hover:text-primary">Skills</Link>
              <Link href="#experience" className="text-sm font-medium transition-colors hover:text-primary">Experience</Link>
              <Link href="#projects" className="text-sm font-medium transition-colors hover:text-primary">Projects</Link>
              <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">Contact</Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <ModeToggle />
              <Button variant="outline" size="sm" asChild className="hidden md:inline-flex">
                <Link href="#contact">Get in Touch</Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Briefcase className="h-6 w-6" />
              <span className="font-bold text-xl">John Doe</span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close Menu</span>
            </Button>
          </div>
          <nav className="container mx-auto px-4 mt-8 flex flex-col space-y-4">
            <Link href="#about" className="text-lg font-medium py-2 border-b border-border" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="#skills" className="text-lg font-medium py-2 border-b border-border" onClick={() => setMobileMenuOpen(false)}>Skills</Link>
            <Link href="#experience" className="text-lg font-medium py-2 border-b border-border" onClick={() => setMobileMenuOpen(false)}>Experience</Link>
            <Link href="#projects" className="text-lg font-medium py-2 border-b border-border" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
            <Link href="#contact" className="text-lg font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}

      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
        <section id="about" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-48 h-48 relative overflow-hidden rounded-full">
              <Image
                src="/path-to-your-image.jpg"
                alt="John Doe"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div>
              <p className="mb-4">
                Hi, I'm John Doe, a passionate full-stack developer with 5 years of experience in building web applications. I specialize in React, Node.js, and cloud technologies.
              </p>
              <p>
                When I'm not coding, you can find me hiking in the mountains or experimenting with new cooking recipes.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-secondary">
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">{skill.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <Badge variant="outline">{skill.level}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="experience" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Senior Full Stack Developer</CardTitle>
                <CardDescription>TechCorp Inc. | 2020 - Present</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Led the development of a high-traffic e-commerce platform</li>
                  <li>Implemented CI/CD pipelines, reducing deployment time by 50%</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Full Stack Developer</CardTitle>
                <CardDescription>WebSolutions LLC | 2018 - 2020</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Developed and maintained multiple client websites</li>
                  <li>Integrated third-party APIs and payment gateways</li>
                  <li>Optimized database queries, improving app performance by 30%</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="projects" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>E-commerce Platform</CardTitle>
                <CardDescription>A full-featured online store</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-2">Built with React, Node.js, and MongoDB</p>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Redux</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Task Management App</CardTitle>
                <CardDescription>A Trello-like task organizer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-2">Created using Vue.js and Firebase</p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Vue.js</Badge>
                  <Badge>Firebase</Badge>
                  <Badge>Vuex</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" asChild>
              <Link href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="mailto:john.doe@example.com">
                <Mail className="mr-2 h-4 w-4" /> Email
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} John Doe. All rights reserved.
      </footer>
    </div>
  )
}