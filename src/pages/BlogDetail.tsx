import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, User, Tag } from 'lucide-react';

// Code Preview Component
const CodePreview = ({ code, language }) => {
  const lines = code.trim().split('\n');
  
  return (
    <div className="rounded-lg overflow-hidden bg-zinc-900 my-6">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-800 border-b border-zinc-700">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-sm text-zinc-400">{language}</span>
      </div>
      
      {/* Code Content */}
      <div className="p-4 font-mono text-sm overflow-x-auto">
        <table className="w-full border-collapse">
          <tbody>
            {lines.map((line, i) => (
              <tr key={i} className="leading-6">
                <td className="pr-4 text-right text-zinc-600 select-none w-12">
                  {i + 1}
                </td>
                <td className="text-amber-50 whitespace-pre">
                  {line || '\u00A0'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Process content to transform code blocks into editor views
const ProcessedContent = ({ content }) => {
  // Split content into parts, separating code blocks from regular content
  const parseContent = () => {
    const parts = [];
    const temp = document.createElement('div');
    temp.innerHTML = content;

    let currentIndex = 0;
    temp.childNodes.forEach((node) => {
      if (node.nodeName === 'PRE') {
        const code = node.querySelector('code');
        if (code) {
          const language = Array.from(code.classList)
            .find(cls => cls.startsWith('language-'))
            ?.replace('language-', '') || 'plaintext';
          
          parts.push({
            type: 'code',
            content: code.textContent,
            language
          });
        }
      } else {
        parts.push({
          type: 'html',
          content: node.outerHTML || node.textContent
        });
      }
      currentIndex++;
    });

    return parts;
  };

  const contentParts = React.useMemo(() => parseContent(), [content]);

  return (
    <>
      {contentParts.map((part, index) => (
        <React.Fragment key={index}>
          {part.type === 'code' ? (
            <CodePreview code={part.content} language={part.language} />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: part.content }} />
          )}
        </React.Fragment>
      ))}
    </>
  );
};

const blogData = {
  'the-art-of-clean-code': {
    title: "The Art of Clean Code",
    date: "March 15, 2024",
    author: "John Developer",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80",
    tags: ["Clean Code", "Best Practices", "Software Development"],
    content: `
      <h2>Introduction</h2>
      <p>Clean code is not just about making your code work; it's about making it work elegantly and efficiently. In this article, we'll explore the principles that make code truly clean and maintainable.</p>

      <h2>The Principles of Clean Code</h2>
      <p>Clean code follows several key principles that help make it more readable, maintainable, and efficient. Let's explore these principles in detail.</p>

      <h3>1. Meaningful Names</h3>
      <p>Choose names that reveal intent. A variable name should tell you why it exists, what it does, and how it is used.</p>

      <pre><code class="language-javascript">
// Bad naming
const d = new Date();
const n = d.getTime();

// Good naming
const currentDate = new Date();
const timestamp = currentDate.getTime();
      </code></pre>

      <h3>2. Small Functions</h3>
      <p>Functions should do one thing, do it well, and do it only. This makes code easier to test, understand, and maintain.</p>

      <pre><code class="language-javascript">
// Bad: Function doing multiple things
function validateAndSaveUser(userData) {
  if (!userData.name || !userData.email) {
    throw new Error('Invalid data');
  }
  
  if (!userData.email.includes('@')) {
    throw new Error('Invalid email');
  }
  
  database.save(userData);
  sendWelcomeEmail(userData.email);
}

// Good: Separated concerns
function validateUserData(userData) {
  if (!userData.name || !userData.email) {
    throw new Error('Invalid data');
  }
}

function validateEmail(email) {
  if (!email.includes('@')) {
    throw new Error('Invalid email');
  }
}

function saveUser(userData) {
  validateUserData(userData);
  validateEmail(userData.email);
  database.save(userData);
}

function onboardUser(userData) {
  saveUser(userData);
  sendWelcomeEmail(userData.email);
}
      </code></pre>

      <h3>3. Comments</h3>
      <p>The best comment is the code that documents itself. When you write clean code, you shouldn't need many comments to explain what the code does.</p>
    `
  }
};

export default function BlogDetail() {
  const { postId } = useParams();
  const post = blogData[postId as keyof typeof blogData];

  if (!post) return <div>Post not found</div>;

  return (
    <div className="bg-amber-50">
      {/* Hero Section */}
      <div className="bg-zinc-900 text-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="space-y-6 text-center">
            <div className="flex justify-center gap-4 text-amber-200/60">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-amber-400">{post.title}</h1>
            <div className="flex justify-center gap-2">
              {post.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-amber-400/10 text-amber-400 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="rounded-lg overflow-hidden border-4 border-amber-400/20">
          <img 
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <article className="prose prose-lg prose-zinc mx-auto">
          <ProcessedContent content={post.content} />
        </article>

        {/* Author Bio */}
        <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
              alt={post.author}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-bold">{post.author}</h3>
              <p className="text-zinc-600">Artisan Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}