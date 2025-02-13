import { Code2, Brain, Laptop, Server, Wrench } from 'lucide-react';

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
        <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-amber-600 mb-4">About Me</h2>
                    <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
                        Crafting digital experiences with code and creativity
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                            alt="John Developer"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold">Hello, I'm John</h3>
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

                <div className="mt-24">
                    <h3 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {skills.map((skill, index) => (
                            <div key={index} className="bg-amber-50 p-6 rounded-lg shadow-md">
                                <div className="flex items-center gap-3 mb-4">
                                    <skill.icon className="w-6 h-6 text-amber-600" />
                                    <h4 className="text-xl font-bold">{skill.category}</h4>
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
        </section>
    );
}