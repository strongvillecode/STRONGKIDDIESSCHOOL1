import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-brand-cream">
      <section className="py-24 bg-brand-blue text-white text-center">
        <h1 className="text-4xl md:text-6xl font-serif mb-6">Get In Touch</h1>
        <p className="text-brand-sky/70 text-lg max-w-2xl mx-auto">
          We are happy to answer any questions you have about our school, admissions, or programs.
        </p>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-brand-blue/5">
               <h3 className="font-serif font-bold text-2xl text-brand-blue mb-8">Contact Information</h3>
               <div className="space-y-6">
                 {[
                   { icon: <MapPin className="text-brand-gold" />, title: "Address", desc: "Bariga, Lagos, Nigeria" },
                   { icon: <Phone className="text-brand-gold" />, title: "Phone", desc: "+234 123 456 7890" },
                   { icon: <Mail className="text-brand-gold" />, title: "Email", desc: "info@strongkiddies.edu.ng" },
                   { icon: <Clock className="text-brand-gold" />, title: "Working Hours", desc: "Mon - Fri: 8:00 AM - 4:00 PM" }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4">
                     <div className="bg-brand-cream p-3 rounded-xl h-fit">{item.icon}</div>
                     <div>
                       <h4 className="font-bold text-sm text-brand-blue">{item.title}</h4>
                       <p className="text-sm text-brand-blue/60">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>

            <a 
              href="https://wa.me/2341234567890" 
              target="_blank"
              className="block bg-green-500 text-white p-8 rounded-3xl shadow-xl hover:bg-green-600 transition-colors"
            >
              <div className="flex items-center gap-4">
                <MessageSquare size={32} />
                <div>
                  <h4 className="font-bold text-lg leading-none">Instant Chat</h4>
                  <p className="text-sm opacity-80 mt-1">Talk to us on WhatsApp</p>
                </div>
              </div>
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
             <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-brand-blue/5 h-full">
               <h3 className="font-serif font-bold text-2xl text-brand-blue mb-8">Send Us a Message</h3>
               <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-brand-blue/60">Full Name</label>
                   <input className="w-full bg-brand-cream border border-transparent rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold" placeholder="John Doe" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-brand-blue/60">Email Address</label>
                   <input className="w-full bg-brand-cream border border-transparent rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold" placeholder="john@example.com" />
                 </div>
                 <div className="space-y-2 md:col-span-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-brand-blue/60">Subject</label>
                   <input className="w-full bg-brand-cream border border-transparent rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold" placeholder="Admission Inquiry" />
                 </div>
                 <div className="space-y-2 md:col-span-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-brand-blue/60">Message</label>
                   <textarea rows={5} className="w-full bg-brand-cream border border-transparent rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold" placeholder="How can we help you?" />
                 </div>
                 <div className="md:col-span-2">
                   <button className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-brand-gold transition-all shadow-xl">
                     Send Message
                     <Send size={20} />
                   </button>
                 </div>
               </form>
             </div>
          </div>
        </div>
      </section>

      {/* Map integration placeholder */}
      <section className="h-[400px] w-full bg-gray-200 grayscale">
         <div className="w-full h-full flex items-center justify-center text-gray-500 font-serif italic text-center px-4">
            Interactive Google Map Placeholder (Bariga, Lagos) - Professional integration ready.
         </div>
      </section>
    </div>
  );
}
