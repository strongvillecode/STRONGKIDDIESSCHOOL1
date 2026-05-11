import { motion } from 'motion/react';
import { ArrowRight, Star, Shield, BookOpen, Users, Trophy, CheckCircle2, MessageSquare, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden bg-brand-cream">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 border-2 border-brand-gold rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-blue rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-gold px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest border border-brand-gold/20">
            <Star size={14} fill="currentColor" />
            Empowering the Next Generation
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-black leading-[1.1] text-brand-blue">
            Building <span className="text-brand-gold">Future Leaders</span> Through Excellence & Innovation
          </h1>
          
          <p className="text-lg text-brand-blue/70 max-w-xl leading-relaxed">
            Strong Kiddies Nursery & Primary School provides a world-class British-Nigerian Montessori blend that nurtures confidence, discipline, and academic brilliance.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link 
              to="/admissions" 
              className="bg-brand-blue text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-brand-gold transition-all flex items-center gap-2 group"
            >
              Apply Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/about" 
              className="bg-white text-brand-blue px-8 py-4 rounded-full font-bold shadow-md hover:shadow-lg transition-all border border-brand-blue/10 flex items-center gap-2"
            >
              Book a Tour
            </Link>
          </div>

          <div className="flex items-center gap-6 pt-4 border-t border-brand-blue/10">
            <div>
              <div className="text-2xl font-serif font-bold text-brand-blue">500+</div>
              <div className="text-xs text-brand-blue/50 uppercase font-bold tracking-wider">Happy Students</div>
            </div>
            <div className="w-px h-10 bg-brand-blue/10" />
            <div>
              <div className="text-2xl font-serif font-bold text-brand-blue">15+</div>
              <div className="text-xs text-brand-blue/50 uppercase font-bold tracking-wider">Years Excellence</div>
            </div>
            <div className="w-px h-10 bg-brand-blue/10" />
            <div>
              <div className="text-2xl font-serif font-bold text-brand-blue">100%</div>
              <div className="text-xs text-brand-blue/50 uppercase font-bold tracking-wider">Success Rate</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl skew-y-2 border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800" 
              alt="Happy Students at Strong Kiddies" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay" />
          </div>
          
          {/* Floating badge */}
          <div className="absolute -bottom-10 -left-10 z-20 glass p-6 rounded-2xl shadow-xl max-w-[200px] animate-bounce-slow">
            <div className="bg-brand-gold w-10 h-10 rounded-full flex items-center justify-center text-white mb-2">
              <Shield size={20} />
            </div>
            <h4 className="font-bold text-sm text-brand-blue">Safe & Secure Environment</h4>
            <p className="text-[10px] text-brand-blue/60 mt-1">24/7 CCTV & Professional Security Guards.</p>
          </div>

          <div className="absolute -top-6 -right-6 z-20 glass p-6 rounded-2xl shadow-xl animate-float">
             <div className="flex gap-1 text-brand-gold mb-1">
               {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
             </div>
             <p className="text-xs font-bold text-brand-blue italic italic">"Best school in Bariga!"</p>
             <p className="text-[10px] text-brand-blue/50">- Mrs. Adeboye</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const cards = [
    {
      title: "Montessori Excellence",
      desc: "Child-centered learning that fosters independence and natural developmental milestones.",
      icon: <Users className="text-brand-gold" size={28} />,
    },
    {
      title: "British & Nigerian Curriculum",
      desc: "A powerful blend of international standards and rich local educational heritage.",
      icon: <BookOpen className="text-brand-gold" size={28} />,
    },
    {
      title: "Leadership & Morals",
      desc: "Integrating Islamic values and leadership training to raise ethical world changers.",
      icon: <Trophy className="text-brand-gold" size={28} />,
    },
    {
       title: "STEM & Innovation",
       desc: "Early exposure to coding, AI, and science to prepare kids for a technology-driven future.",
       icon: <Shield className="text-brand-gold" size={28} />,
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-blue">Why Parents Trust Us</h2>
          <p className="text-brand-blue/60 leading-relaxed">
            We don't just teach students; we nurture brilliance and character through a proven educational framework and a loving environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-brand-cream border border-brand-blue/5 hover:border-brand-gold/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                {card.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-blue mb-3">{card.title}</h3>
              <p className="text-sm text-brand-blue/60 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
   const reviews = [
     {
       name: "Alhaja Fatimah",
       role: "Parent of 3",
       text: "The progress my children have made in their communication skills and confidence since joining Strong Kiddies is remarkable. The blend of academics and morals is perfect.",
       avatar: "https://i.pravatar.cc/150?u=1"
     },
     {
       name: "Mr. Chukwuemeka",
       role: "Surulere Resident",
       text: "I was looking for a school with high discipline and standard British curriculum. I found more than that here. The teachers are incredibly professional and dedicated.",
       avatar: "https://i.pravatar.cc/150?u=2"
     }
   ];

   return (
     <section className="py-24 bg-brand-blue text-white overflow-hidden relative">
       <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5" />
       
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
         <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">What Our Parents Say</h2>
            <div className="space-y-8">
               {reviews.map((r, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   className="flex gap-6 items-start"
                 >
                   <img src={r.avatar} alt={r.name} className="w-16 h-16 rounded-full border-2 border-brand-gold p-1" />
                   <div>
                     <div className="flex gap-1 text-brand-gold mb-2">
                       {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                     </div>
                     <p className="text-lg italic text-brand-sky/80 mb-4 leading-relaxed">"{r.text}"</p>
                     <h4 className="font-bold text-brand-gold">{r.name}</h4>
                     <p className="text-xs text-brand-sky/50 uppercase tracking-widest">{r.role}</p>
                   </div>
                 </motion.div>
               ))}
            </div>
         </div>

         <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800" 
                 alt="Students learning" 
                 className="w-full h-full object-cover"
               />
            </div>
            {/* Play Button */}
            <button className="absolute inset-0 m-auto w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center text-brand-blue shadow-2xl hover:scale-110 transition-transform cursor-pointer">
               <Play size={32} fill="currentColor" />
            </button>
         </div>
       </div>
     </section>
   );
};

const CTA = () => {
  return (
    <section className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="premium-gradient rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          {/* Background circles */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/5 rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-gold/10 rounded-full" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-8 text-white">
            <h2 className="text-4xl md:text-6xl font-serif">Enroll Your Child Today</h2>
            <p className="text-brand-sky/80 text-lg leading-relaxed">
              Don't miss out on securing the brightest future for your child. Admissions are currently open for 2026/2027 academic session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link 
                to="/admissions" 
                className="bg-brand-gold text-brand-blue px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-xl"
              >
                Start Application Now
              </Link>
              <a 
                href="https://wa.me/2341234567890" 
                className="inline-flex items-center justify-center gap-2 border border-white/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
              >
                <MessageSquare size={20} />
                Chat with Admission Officer
              </a>
            </div>
            <p className="text-xs text-brand-sky/40">Limited slots available for Nursery and Primary sections.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  );
}
