import React from 'react';
import { motion } from 'framer-motion';
import { Play, Code, Layout, Github, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    { title: "Manpower MS", category: "Full-Stack", img: "/api/placeholder/400/250" },
    { title: "Vice City Assets", category: "Design", img: "/api/placeholder/400/250" },
    { title: "SuperAdmin Portal", category: "Web App", img: "/api/placeholder/400/250" },
  ];

  return (
    <div className="bg-zinc-950 text-white min-h-screen selection:bg-purple-500">
      {/* Navigation */}
      <nav className="fixed w-full z-50 flex justify-between items-center px-8 py-6 bg-gradient-to-b from-black/80 to-transparent">
        <div className="text-2xl font-black tracking-tighter text-purple-500 uppercase">Dev.Mode</div>
        <div className="space-x-8 font-medium hidden md:block">
          <a href="#work" className="hover:text-purple-400 transition-colors">Work</a>
          <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
          <button className="bg-white text-black px-5 py-2 rounded-full font-bold hover:bg-purple-500 hover:text-white transition-all">
            Let's Talk
          </button>
        </div>
      </nav>

      {/* Hero Section: Cinematic Style */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" />
          <img 
            src="/api/placeholder/1920/1080" 
            className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
            alt="Hero Background"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-20 text-center px-4"
        >
          <span className="text-purple-500 font-mono tracking-widest uppercase text-sm mb-4 block">
            Software Developer & Creative Enthusiast
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter italic">
            BUILDING THE <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">FUTURE OF WEB.</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 bg-purple-600 px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform">
              <Play fill="currentColor" size={20}/> View Showreel
            </button>
            <button className="flex items-center gap-2 bg-zinc-800 border border-zinc-700 px-8 py-4 rounded-lg font-bold hover:bg-zinc-700 transition-colors">
              Explore Projects
            </button>
          </div>
        </motion.div>
      </section>

      {/* Projects: Entertainment Grid */}
      <section id="work" className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">Selected Works</h2>
            <p className="text-zinc-400">Featured applications and creative experiments.</p>
          </div>
          <div className="text-purple-500 font-bold cursor-pointer hover:underline">View All</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="group relative bg-zinc-900 rounded-xl overflow-hidden cursor-pointer"
            >
              <img src={project.img} alt={project.title} className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs text-purple-400 font-bold uppercase mb-1">{project.category}</span>
                <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;