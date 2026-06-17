import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, GraduationCap, Briefcase, Zap, TrendingDown } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const stats = [
  { value: '4+', label: 'Years Experience', icon: Briefcase },
  { value: '500+', label: 'Users Served (Parker)', icon: Zap },
  { value: '4.0', label: 'MS GPA at ASU', icon: GraduationCap },
  { value: '63%', label: 'AWS Cost Reduction', icon: TrendingDown },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-mono text-sm font-medium mb-2 tracking-widest uppercase">Get to know me</p>
          <h2 className="section-heading">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 text-gray-400 leading-relaxed"
          >
            <p className="text-lg text-gray-300">
              Hi, I'm <span className="text-white font-semibold">Dharani</span> — a full-stack software engineer passionate
              about building intelligent, scalable systems that make a real impact.
            </p>
            <p>
              {personalInfo.summary}
            </p>
            <p>
              I thrive at the intersection of backend engineering and AI — from designing event-driven microservices
              and RAG pipelines to shipping React frontends with real-time streaming UX. I love tackling complex
              problems and delivering clean, production-ready solutions.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm pt-2">
              <MapPin size={14} className="text-blue-400" />
              <span>Bellevue, WA · Open to Remote</span>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map(({ value, label, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="card text-center group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-500/20 transition-colors">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{value}</div>
                <div className="text-gray-500 text-sm">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
