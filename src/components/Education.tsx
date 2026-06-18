import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Calendar, Star } from 'lucide-react';
import { education, certifications } from '../data/portfolio';

export default function Education() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" ref={ref} className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-mono text-sm font-medium mb-2 tracking-widest uppercase">Academic background</p>
          <h2 className="section-heading">Education & Certifications</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-gray-400 text-sm font-medium uppercase tracking-widest mb-6 flex items-center gap-2">
              <GraduationCap size={16} className="text-blue-400" />
              Degrees
            </h3>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  whileHover={{ y: -4 }}
                  className="card group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
                      <GraduationCap size={22} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-semibold text-base leading-tight">{edu.institution}</h4>
                      <p className="text-gray-400 text-sm mt-1 leading-relaxed">{edu.degree}</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} /> {edu.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={11} /> {edu.location}
                        </span>
                        <span className="flex items-center gap-1 text-yellow-400">
                          <Star size={11} /> GPA: {edu.gpa}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-gray-400 text-sm font-medium uppercase tracking-widest mb-6 flex items-center gap-2">
              <Star size={16} className="text-blue-400" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  whileHover={{ y: -4 }}
                  className="card group flex items-center gap-4"
                >
                  <span className="text-2xl flex-shrink-0">{cert.icon}</span>
                  <div>
                    <p className="text-white font-medium text-sm leading-snug">{cert.name}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
