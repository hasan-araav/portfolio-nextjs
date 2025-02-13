import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, BookOpen, GraduationCap, Users, CheckCircle2 } from 'lucide-react';

const courseData = {
  'modern-react-mastery': {
    title: "Modern React Mastery",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80",
    price: "$99",
    duration: "8 weeks",
    level: "Intermediate",
    description: "Deep dive into React's latest features and best practices",
    instructor: "Sarah Johnson",
    students: 1234,
    rating: 4.8,
    chapters: [
      { title: "Introduction to Modern React", details: "Learn the fundamentals of React and its ecosystem" },
      { title: "Hooks Deep Dive", details: "Master React Hooks and their applications" },
      { title: "State Management Patterns", details: "Explore different state management patterns in React" },
      { title: "Performance Optimization", details: "Optimize your React application for better performance" },
      { title: "Testing Best Practices", details: "Learn best practices for testing your React application" },
      { title: "Advanced Patterns", details: "Explore advanced patterns and techniques in React" },
    ],
    features: [
      "24/7 Support",
      "Lifetime Access",
      "Project-based Learning",
      "Certificate of Completion",
    ]
  }
};

export default function CourseDetail() {
  const { courseId } = useParams();
  const course = courseData[courseId as keyof typeof courseData];

  if (!course) return <div>Course not found</div>;

  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className=" bg-amber-50">
      {/* Hero Section */}
      <div className="bg-zinc-900 text-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-amber-400">{course.title}</h1>
              <p className="text-xl text-amber-200/80">{course.description}</p>
              <div className="flex gap-6 text-amber-200/60">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{course.students} students</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-amber-400">{course.price}</span>
                <button className="px-8 py-3 bg-amber-400 text-zinc-900 rounded-lg hover:bg-amber-300 transition-colors font-bold">
                  Enroll Now
                </button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border-4 border-amber-400/20">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            {/* Chapters */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Course Content</h2>
              <div className="space-y-4">
                {course.chapters.map((chapter, index) => (
                  <div key={index}>
                    <button
                      onClick={() => toggleSection(index)}
                      className={`flex items-center gap-4 p-4 bg-white shadow-md w-full ${openSection === index ? 'rounded-t-lg' : 'rounded-lg'
                        }`}
                    >

                      <span className="w-8 h-8 flex items-center justify-center bg-amber-400 text-zinc-900 rounded-full font-bold">
                        {index + 1}
                      </span>
                      <span className="font-medium">{chapter.title}</span>
                    </button>
                    {openSection === index && (
                      <div className="p-4 bg-white shadow-md">
                        <p>{chapter.details}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Your Instructor</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
                    alt={course.instructor}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{course.instructor}</h3>
                    <p className="text-zinc-600">Senior React Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white p-6 rounded-lg shadow-md h-fit">
            <h2 className="text-xl font-bold mb-6">What You'll Get</h2>
            <div className="space-y-4">
              {course.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}