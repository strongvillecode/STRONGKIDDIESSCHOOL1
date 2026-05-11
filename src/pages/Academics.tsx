import { motion } from 'motion/react';
import { Book, Palette, Globe, Cpu, Languages, Calculator } from 'lucide-react';

export default function Academics() {
  const sections = [
    {
      title: "Nursery Section",
      age: "2 - 5 Years",
      desc: "Focus on early childhood development through play-based and Montessori learning.",
      subjects: ["Alphabet & Phonics", "Numeracy", "Practical Life", "Sensorial Activities", "Moral Instructions"]
    },
    {
      title: "Primary Section",
      age: "6 - 11 Years",
      desc: "Comprehensive British-Nigerian curriculum focused on critical thinking and core subjects.",
      subjects: ["Mathematics", "English Studies", "Science", "ICT & Coding", "Religious Studies", "Creative Arts"]
    }
  ];

  return (
    <div className="bg-brand-cream pb-24">
      <section className="py-24 bg-brand-gold text-brand-blue text-center overflow-hidden">
        <h1 className="text-4xl md:text-6xl font-serif mb-6">Innovative Learning</h1>
        <p className="text-brand-blue/70 text-lg max-w-2xl mx-auto">
          Our curriculum is designed to challenge, inspire, and prepare students for a global future.
        </p>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 space-y-16">
        {sections.map((section, i) => (
          <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
            <div className="flex-1 space-y-6">
              <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">Section {i + 1}</span>
              <h2 className="text-4xl font-serif text-brand-blue">{section.title}</h2>
              <div className="inline-block bg-brand-blue text-white px-4 py-1 rounded-full text-xs font-bold">{section.age}</div>
              <p className="text-brand-blue/60 leading-relaxed text-lg">{section.desc}</p>
              <div className="grid grid-cols-2 gap-4">
                {section.subjects.map(s => (
                  <div key={s} className="flex items-center gap-2 text-sm text-brand-blue/70">
                    <div className="w-2 h-2 bg-brand-gold rounded-full" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full aspect-video rounded-[3rem] bg-brand-blue/5 overflow-hidden shadow-2xl relative">
               <img 
                 src={i === 0 ? "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800" : "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"} 
                 className="w-full h-full object-cover transition-transform hover:scale-110 duration-700"
               />
            </div>
          </div>
        ))}
      </section>

      <section className="py-24 bg-brand-blue text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif mb-12">Beyond The Classroom</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
               { icon: <Cpu />, label: "Coding & AI" },
               { icon: <Palette />, label: "Creative Arts" },
               { icon: <Globe />, label: "Public Speaking" },
               { icon: <Calculator />, label: "Mental Math" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="bg-white/10 p-4 rounded-2xl text-brand-gold">{item.icon}</div>
                <span className="text-sm font-bold opacity-70">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
