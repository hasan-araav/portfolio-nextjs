import React from 'react';
import { Code2, Brain, Rocket, Database, Globe, Laptop, Server, Wrench } from 'lucide-react';

const skills = [
  {
    category: "Frontend Development",
    icon: Laptop,
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"]
  },
  {
    category: "Backend Development",
    icon: Server,
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"]
  },
  {
    category: "DevOps & Tools",
    icon: Wrench,
    items: ["Git", "Docker", "AWS", "CI/CD", "Linux"]
  }
];

export default function About() {
  return (
    <div className="pt-16 bg-amber-50">
      {/* Hero Section */}
      <div className="bg-zinc-900 text-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-amber-400 mb-4">About Me</h1>
            <p className="text-xl text-amber-200/80 max-w-2xl mx-auto">
              Crafting digital experiences with code and creativity
            </p>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://i.ibb.co.com/qYpVKR97/8c91f036-a1a2-41ff-8c45-c25b6f290817.jpg"
              alt="John Developer"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Hello, I'm John</h2>
            <p className="text-lg text-zinc-600">
              With over a decade of experience in web development, I've had the privilege of working
              with various technologies and helping businesses bring their ideas to life. My passion
              lies in creating elegant solutions to complex problems and sharing knowledge with the
              developer community.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full">
                <Code2 className="w-5 h-5" />
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full">
                <Brain className="w-5 h-5" />
                <span>Lifelong Learner</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <skill.icon className="w-6 h-6 text-amber-600" />
                  <h3 className="text-xl font-bold">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}