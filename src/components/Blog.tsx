import { Clock } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
    {
      title: "The Art of Clean Code",
      slug: 'the-art-of-clean-code',
      date: "March 15, 2024",
      author: "John Developer",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80",
      excerpt: "Clean code is not just about making your code work; it's about making it work elegantly and efficiently.",
      tags: ["Clean Code", "Best Practices", "Software Development"]
    },
    {
      title: "Mastering TypeScript",
      slug: 'mastering-typescript',
      date: "March 10, 2024",
      author: "John Developer",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80",
      excerpt: "TypeScript has become an essential tool in modern web development. Learn how to leverage its power effectively.",
      tags: ["TypeScript", "JavaScript", "Web Development"]
    },
    {
      title: "Optimizing React Performance",
      slug: 'react-performance',
      date: "March 5, 2024",
      author: "John Developer",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80",
      excerpt: "Discover advanced techniques to make your React applications blazing fast.",
      tags: ["React", "Performance", "Optimization"]
    }
  ];

export default function Blog() {
    return (
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
                <Link
                  key={index}
                  to={`/blog/${post.slug}`}
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
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}