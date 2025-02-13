import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Courses from './pages/Courses';
import  {default as CourseComponent}  from './components/Courses';
import CourseDetail from './pages/CourseDetail';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-amber-50 text-zinc-800 font-mono">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <Hero />

              {/* About Section */}
              <About />

              {/* Courses Section */}
              <CourseComponent />

              {/* Blog Section */}
              <Blog />

              {/* Contact Section */}
              <Contact />
            </>
          } />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="/blog/:postId" element={<BlogDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;