import React from 'react';
import { Code2, Terminal, Clock, BookOpen, Users, Mail, Github, Twitter, MapPin, Phone, Brain, Laptop, Server, Wrench } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const courses = {
  'modern-react-mastery': {
    title: "Modern React Mastery",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80",
    price: "$99",
    duration: "8 weeks",
    level: "Intermediate",
    description: "Deep dive into React's latest features and best practices",
    students: 1234
  },
  'typescript-fundamentals': {
    title: "TypeScript Fundamentals",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80",
    price: "$79",
    duration: "6 weeks",
    level: "Beginner",
    description: "Master TypeScript from the ground up",
    students: 892
  },
  'advanced-node-js': {
    title: "Advanced Node.js",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80",
    price: "$129",
    duration: "10 weeks",
    level: "Advanced",
    description: "Build scalable applications with Node.js",
    students: 567
  }
};

const posts = [
  {
    title: "The Art of Clean Code",
    date: "March 15, 2024",
    author: "John Developer",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80",
    excerpt: "Clean code is not just about making your code work; it's about making it work elegantly and efficiently.",
    tags: ["Clean Code", "Best Practices", "Software Development"]
  },
  {
    title: "Mastering TypeScript",
    date: "March 10, 2024",
    author: "John Developer",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80",
    excerpt: "TypeScript has become an essential tool in modern web development. Learn how to leverage its power effectively.",
    tags: ["TypeScript", "JavaScript", "Web Development"]
  },
  {
    title: "Optimizing React Performance",
    date: "March 5, 2024",
    author: "John Developer",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80",
    excerpt: "Discover advanced techniques to make your React applications blazing fast.",
    tags: ["React", "Performance", "Optimization"]
  }
];

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

function App() {
  return (
    <div className="min-h-screen bg-amber-50 text-zinc-800 font-mono">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
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

      {/* Courses Section */}
      <section id="courses" className="py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-600 mb-4">Master Your Craft</h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Dive deep into modern web development with our carefully crafted courses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(courses).map(([id, course]) => (
              <div
                key={id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">{course.title}</h3>
                  <p className="text-zinc-600">{course.description}</p>
                  <div className="flex items-center justify-between text-sm text-zinc-500">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span>{course.level}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-600">{course.price}</span>
                    <button className="px-4 py-2 bg-amber-100 text-amber-800 rounded-lg hover:bg-amber-200 transition-colors">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-600 mb-4">The Developer's Journal</h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on modern web development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-amber-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex gap-4 text-sm text-zinc-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">{post.title}</h3>
                  <p className="text-zinc-600">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                        alt={post.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm font-medium">{post.author}</span>
                    </div>
                    <button className="text-sm text-amber-600 font-medium hover:text-amber-700">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-600 mb-4">Get in Touch</h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Let's discuss your next project or just say hello
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-400 text-zinc-900 py-3 rounded-lg font-bold hover:bg-amber-300 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-zinc-600">hello@johndeveloper.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-zinc-600">San Francisco, CA</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-zinc-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Connect with Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-zinc-900 text-amber-400 rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-zinc-900 text-amber-400 rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;