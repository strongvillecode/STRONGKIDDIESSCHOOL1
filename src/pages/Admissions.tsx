import { useState } from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, Upload, Send, HelpCircle, Phone, Mail } from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ApplicationStatus } from '../types';

const applicationSchema = z.object({
  childFirstName: z.string().min(2, 'Required'),
  childLastName: z.string().min(2, 'Required'),
  childDateOfBirth: z.string().min(1, 'Required'),
  childGender: z.enum(['Male', 'Female']),
  applyingForClass: z.string().min(1, 'Required'),
  parentName: z.string().min(2, 'Required'),
  parentEmail: z.string().email('Invalid email'),
  parentPhoneNumber: z.string().min(10, 'Invalid phone number'),
  residentialAddress: z.string().min(10, 'Please provide full address'),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

export default function Admissions() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
  });

  const onSubmit = async (data: ApplicationFormData) => {
    if (!db) {
      alert("Firebase is not configured. Please ensure your school has set up the database in AI Studio.");
      return;
    }
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'applications'), {
        ...data,
        status: ApplicationStatus.PENDING,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="py-24 max-w-2xl mx-auto px-4 text-center">
        <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           className="bg-white p-12 rounded-[2.5rem] shadow-2xl space-y-6"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-serif text-brand-blue">Application Submitted!</h2>
          <p className="text-brand-blue/60 leading-relaxed">
            Thank you for choosing Strong Kiddies. Our admission officer will review your application and contact you within 48 hours for the next steps.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="bg-brand-blue text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-brand-gold transition-all"
          >
            Submit Another Application
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Hero */}
      <section className="premium-gradient py-24 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Admissions Inquiry</h1>
          <p className="text-brand-sky/70 text-lg max-w-2xl mx-auto">
            Take the first step towards a bright future for your child. Complete the form below to begin the enrollment process.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-brand-blue/5">
              <h2 className="text-2xl font-serif text-brand-blue mb-8 pb-4 border-b">Online Application Form</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-blue/60">Child's First Name</label>
                    <input 
                      {...register('childFirstName')}
                      className={`w-full bg-brand-cream border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold transition-all ${errors.childFirstName ? 'border-red-500' : 'border-transparent'}`}
                      placeholder="Enter first name"
                    />
                    {errors.childFirstName && <span className="text-[10px] text-red-500 font-bold">{errors.childFirstName.message}</span>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-blue/60">Child's Last Name</label>
                    <input 
                      {...register('childLastName')}
                      className={`w-full bg-brand-cream border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold transition-all ${errors.childLastName ? 'border-red-500' : 'border-transparent'}`}
                      placeholder="Enter last name"
                    />
                    {errors.childLastName && <span className="text-[10px] text-red-500 font-bold">{errors.childLastName.message}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-blue/60">Date of Birth</label>
                    <input 
                      type="date"
                      {...register('childDateOfBirth')}
                      className="w-full bg-brand-cream border border-transparent rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-blue/60">Gender</label>
                    <select 
                      {...register('childGender')}
                      className="w-full bg-brand-cream border border-transparent rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-blue/60">Applying For Class</label>
                    <select 
                      {...register('applyingForClass')}
                      className="w-full bg-brand-cream border border-transparent rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold"
                    >
                      <option value="">Select Class</option>
                      <option value="Crèche">Crèche</option>
                      <option value="Nursery 1">Nursery 1</option>
                      <option value="Nursery 2">Nursery 2</option>
                      <option value="Primary 1">Primary 1</option>
                      <option value="Primary 2">Primary 2</option>
                      <option value="Primary 3">Primary 3</option>
                      <option value="Primary 4">Primary 4</option>
                      <option value="Primary 5">Primary 5</option>
                    </select>
                  </div>
                </div>

                <div className="bg-brand-sky/30 p-6 rounded-2xl space-y-6">
                  <h3 className="font-serif font-bold text-brand-blue border-b border-brand-blue/10 pb-2">Parent/Guardian Information</h3>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-blue/60">Parent Full Name</label>
                    <input 
                      {...register('parentName')}
                      className="w-full bg-white border border-transparent rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold"
                      placeholder="e.g. Mr. John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-blue/60">Email Address</label>
                      <input 
                        {...register('parentEmail')}
                        className="w-full bg-white border border-transparent rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-blue/60">Phone Number</label>
                      <input 
                        {...register('parentPhoneNumber')}
                        className="w-full bg-white border border-transparent rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold"
                        placeholder="+234 ..."
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-blue/60">Residential Address</label>
                    <textarea 
                      {...register('residentialAddress')}
                      rows={3}
                      className="w-full bg-white border border-transparent rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold"
                      placeholder="Enter home address in Lagos"
                    />
                  </div>
                </div>

                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-brand-gold transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting Application...' : (
                    <>
                      Submit Application
                      <Send size={20} />
                    </>
                  )}
                </button>
                <p className="text-center text-[10px] text-brand-blue/40 uppercase tracking-widest">By submitting, you agree to our terms and admission policies.</p>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-brand-blue/5">
              <h3 className="font-serif font-bold text-xl text-brand-blue mb-6">Admission Process</h3>
              <ul className="space-y-6">
                {[
                  { step: '01', title: 'Apply Online', desc: 'Fill the form with accurate details' },
                  { step: '02', title: 'Documentation', desc: 'Submit birth certificate & passport' },
                  { step: '03', title: 'Interview & Assessment', desc: 'Child assessment & parent interview' },
                  { step: '04', title: 'Enrollment', desc: 'Payment of fees & kit collection' }
                ].map(s => (
                  <li key={s.step} className="flex gap-4">
                    <span className="text-2xl font-black text-brand-gold/20 font-serif shrink-0">{s.step}</span>
                    <div>
                      <h4 className="font-bold text-sm text-brand-blue">{s.title}</h4>
                      <p className="text-xs text-brand-blue/60">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-blue text-white p-8 rounded-3xl shadow-lg">
              <h3 className="font-serif font-bold text-xl mb-6">Need Help?</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-lg"><Phone size={18} className="text-brand-gold" /></div>
                  <span className="text-sm">+234 123 456 7890</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-lg"><Mail size={18} className="text-brand-gold" /></div>
                  <span className="text-sm">admissions@strongkiddies.edu.ng</span>
                </div>
              </div>
              <button className="w-full bg-brand-gold text-brand-blue mt-8 py-3 rounded-xl font-bold text-sm hover:bg-white transition-all">
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
