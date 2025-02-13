import { Cpu, Code2, Terminal, Sparkles, Brain } from "lucide-react";

export default function Hero() {
  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-zinc-900/80 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-transparent to-zinc-900/50"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#f59e0b22 1px, transparent 1px), linear-gradient(90deg, #f59e0b22 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            animation: "grid 20s linear infinite",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative text-center space-y-12 p-8 max-w-5xl mx-auto">
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 animate-float opacity-30">
          <Cpu className="w-12 h-12 text-amber-400" />
        </div>
        <div
          className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 animate-float opacity-30"
          style={{ animationDelay: "2s" }}
        >
          <Code2 className="w-12 h-12 text-amber-400" />
        </div>
        <div
          className="absolute bottom-1/3 left-1/3 -translate-x-1/2 translate-y-1/2 animate-float opacity-30"
          style={{ animationDelay: "4s" }}
        >
          <Terminal className="w-12 h-12 text-amber-400" />
        </div>

        {/* Main content */}
        <div className="space-y-8">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-amber-400/20 blur-2xl rounded-full"></div>
            <div className="relative p-4 border-4 border-amber-400 rounded-2xl bg-zinc-900/80 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
              <Terminal className="w-20 h-20 text-amber-400" />
            </div>
          </div>

          <div className="animate-fade-in-up space-y-6">
            <h1 className="text-7xl font-bold text-amber-50 tracking-tight mb-4">
              John Developer
            </h1>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-2xl text-amber-200 tracking-widest uppercase">
                Artisan Web Developer
              </p>
              <div className="flex items-center gap-6 text-amber-400/80">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  <span>Full Stack</span>
                </div>
                <div className="h-4 w-px bg-amber-400/30"></div>
                <div className="flex items-center gap-2">
                  <Code2 className="w-5 h-5" />
                  <span>Clean Code</span>
                </div>
                <div className="h-4 w-px bg-amber-400/30"></div>
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  <span>Problem Solver</span>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-6 pt-8">
            <button
              className="px-8 py-3 bg-amber-400 text-zinc-900 rounded-lg font-bold hover:bg-amber-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-400/20"
              aria-label="View Projects"
            >
              View Projects
            </button>
            <button
              className="px-8 py-3 border-2 border-amber-400 text-amber-400 rounded-lg font-bold hover:bg-amber-400/10 transition-all duration-300 transform hover:scale-105"
              aria-label="Contact Me"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}