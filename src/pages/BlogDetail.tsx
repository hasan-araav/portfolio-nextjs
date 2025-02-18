import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, User, Tag, QuoteIcon } from 'lucide-react';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// Code Preview Component
const CodePreview = ({ code, language }) => {
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
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          customStyle={{ background: "transparent", padding: 0, margin: 0 }}
          showLineNumbers
          wrapLines
        >
          {code.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

// YouTube Video Preview Component
const VideoPreview = ({ embedUrl }) => {
  const videoId = embedUrl.match(/embed\/([\w-]+)/)?.[1];

  if (!videoId) return null;

  return (
    <div className="my-6">
      <div className="relative aspect-video w-full rounded-lg overflow-hidden">
        <iframe
          src={embedUrl}
          title="YouTube video player"
          className="absolute top-0 left-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

// Quote Preview Component
const QuotePreview = ({ quote, author, role }) => {
  return (
    <div className="my-8 relative">
      <div className="absolute -left-4 top-0 text-amber-400/20">
        <QuoteIcon size={48} />
      </div>
      <blockquote className="pl-12 pr-4 py-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
        <p className="text-xl font-serif italic text-zinc-800 mb-4">{quote}</p>
        <footer className="flex items-center gap-2">
          <div className="h-px w-8 bg-amber-400/50"></div>
          <cite className="not-italic">
            <span className="font-semibold text-zinc-900">{author}</span>
            {role && <span className="text-zinc-600 ml-2">• {role}</span>}
          </cite>
        </footer>
      </blockquote>
    </div>
  );
};

// Process content to transform code blocks, videos, and quotes into previews
const ProcessedContent = ({ content }) => {
  const parseContent = () => {
    const parts = [];
    const temp = document.createElement('div');
    temp.innerHTML = content;

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
      } else if (node.nodeName === 'IFRAME' && node.src?.includes('youtube.com/embed')) {
        parts.push({
          type: 'video',
          embedUrl: node.src
        });
      } else if (node.nodeName === 'BLOCKQUOTE') {
        const quoteText = node.querySelector('p')?.textContent || '';
        const author = node.querySelector('cite .author')?.textContent || '';
        const role = node.querySelector('cite .role')?.textContent || '';
        
        parts.push({
          type: 'quote',
          quote: quoteText,
          author,
          role
        });
      } else {
        parts.push({
          type: 'html',
          content: node.outerHTML || node.textContent
        });
      }
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
          ) : part.type === 'video' ? (
            <VideoPreview embedUrl={part.embedUrl} />
          ) : part.type === 'quote' ? (
            <QuotePreview quote={part.quote} author={part.author} role={part.role} />
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


      <blockquote>
        <p>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</p>
        <cite><span class="author">Martin Fowler</span> <span class="role">Software Developer and Author</span></cite>
      </blockquote>


      <h2>Video Tutorial</h2>
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
        title="Clean Code Tutorial" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
      ></iframe>

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

      <h3>Another PHP Code</h3>
      <pre><code class="language-php">
<?php
// Bad naming
$myDate = new DateTime();
$myTime = $myDate->format('H:i:s');

// Good naming
$date = new DateTime();
$time = $date->format('H:i:s');
      </code></pre>

      <h3>Another Tutorial</h3>
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
        title="Advanced Clean Code" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
      ></iframe>
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