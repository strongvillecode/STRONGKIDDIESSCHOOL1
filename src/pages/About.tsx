import { motion } from 'motion/react';
import { Target, Eye, Heart, Shield, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-brand-cream pb-24">
      {/* Hero */}
      <section className="relative py-24 bg-brand-blue text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-serif mb-6">Our Story & Excellence</h1>
            <p className="text-brand-sky/70 text-lg max-w-3xl mx-auto">
              Founded on the pillars of Discipline, Excellence, and Integrity, Strong Kiddies has been a beacon of quality education in Bariga, Lagos for over 15 years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision/Mission */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-12 rounded-[3rem] bg-white shadow-xl border border-brand-blue/5">
             <Target className="text-brand-gold mb-6" size={48} />
             <h2 className="text-3xl font-serif text-brand-blue mb-4">Our Vision</h2>
             <p className="text-brand-blue/60 leading-relaxed">
               To be a world-class educational institution that produces globally competitive leaders equipped with academic excellence and high moral standards.
             </p>
          </div>
          <div className="p-12 rounded-[3rem] bg-brand-blue text-white shadow-xl">
             <Eye className="text-brand-gold mb-6" size={48} />
             <h2 className="text-3xl font-serif mb-4">Our Mission</h2>
             <p className="text-brand-sky/70 leading-relaxed">
               To provide a stimulating learning environment using the Montessori approach and British-Nigerian curriculum to nurture the total child.
             </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-12 max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif text-brand-blue mb-16">The Strong Kiddies Way</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Heart size={32} />, title: "Character First", desc: "We prioritize moral and Islamic values as the foundation of learning." },
            { icon: <Shield size={32} />, title: "Safety Guaranteed", desc: "A secure and hygienic environment for every child to thrive." },
            { icon: <Award size={32} />, title: "Academic Rigor", desc: "British standards blended with Nigerian heritage for excellence." }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white shadow-md border border-brand-blue/5">
              <div className="text-brand-gold mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-serif font-bold text-brand-blue mb-2">{item.title}</h3>
              <p className="text-sm text-brand-blue/50">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
