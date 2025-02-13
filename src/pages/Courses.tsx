import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, Users } from 'lucide-react';

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

export default function Courses() {
  return (
    <div className=" bg-amber-50">
      {/* Hero Section */}
      <div className="bg-zinc-900 text-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-amber-400 mb-4">Master Your Craft</h1>
            <p className="text-xl text-amber-200/80 max-w-2xl mx-auto">
              Dive deep into modern web development with our carefully crafted courses.
            </p>
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(courses).map(([id, course]) => (
            <Link
              key={id}
              to={`/courses/${id}`}
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
                  <span className="text-sm text-amber-600 font-medium">View Details →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}