import { useState, useEffect } from 'react';
import { db, auth } from '../../lib/firebase';
import { collection, query, orderBy, onSnapshot, updateDoc, doc } from 'firebase/firestore';
import { Application, ApplicationStatus } from '../../types';
import { motion, AnimatePresence } from 'motion/react';
import { Users, FileText, CheckCircle, XCircle, Clock, Search, LogOut } from 'lucide-react';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';

export default function AdminDashboard() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
      if (u && db) {
        const q = query(collection(db, 'applications'), orderBy('createdAt', 'desc'));
        const unsubApps = onSnapshot(q, (snapshot) => {
          const apps = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Application));
          setApplications(apps);
          setLoading(false);
        }, (error) => {
          console.error("Firestore Error:", error);
          setLoading(false);
        });
        return () => unsubApps();
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = () => {
    if (!auth) return alert("Firebase is not configured. Please check your setup.");
    signInWithPopup(auth, new GoogleAuthProvider());
  };

  const handleLogout = () => {
    if (!auth) return;
    signOut(auth);
  };

  const updateStatus = async (appId: string, newStatus: ApplicationStatus) => {
    if (!db) return;
    try {
      await updateDoc(doc(db, 'applications', appId), {
        status: newStatus,
        updatedAt: new Date().toISOString(), // In rules we check serverTimestamp, this is just for UI
      });
    } catch (error) {
      alert("Permission denied. Only admins can update status.");
    }
  };

  if (loading) return <div className="flex items-center justify-center min-h-screen">Loading Dashboard...</div>;

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-cream px-4">
        <div className="max-w-md w-full bg-white p-12 rounded-[3rem] shadow-2xl text-center space-y-8">
          <div className="w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center text-white font-serif font-bold text-2xl mx-auto">SK</div>
          <h1 className="text-3xl font-serif text-brand-blue">Admin Portal</h1>
          <p className="text-brand-blue/60">Please sign in with your authorized school email to access the dashboard.</p>
          <button 
            onClick={handleLogin}
            className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-brand-gold transition-all"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  const filteredApps = applications.filter(app => 
    app.childFirstName.toLowerCase().includes(filter.toLowerCase()) || 
    app.childLastName.toLowerCase().includes(filter.toLowerCase()) ||
    app.parentName.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-blue text-white p-8 flex flex-col hidden lg:flex">
        <div className="font-serif font-bold text-xl mb-12">Admin Panel</div>
        <nav className="space-y-4 flex-1">
          <div className="bg-white/10 p-4 rounded-xl flex items-center gap-3 cursor-pointer">
            <Users size={20} />
            <span className="font-bold text-sm">Applications</span>
          </div>
          <div className="p-4 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-white/5 opacity-60">
            <FileText size={20} />
            <span className="font-bold text-sm">Inquiries</span>
          </div>
        </nav>
        <button onClick={handleLogout} className="flex items-center gap-3 text-brand-sky/60 hover:text-white transition-colors">
          <LogOut size={18} />
          <span className="text-sm font-bold">Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="grow p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-serif text-brand-blue">Student Applications</h1>
            <p className="text-brand-blue/40 text-sm">Manage new enrollment requests</p>
          </div>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-blue/20" size={18} />
            <input 
              type="text" 
              placeholder="Search by name..." 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-white border rounded-full pl-12 pr-6 py-3 text-sm focus:outline-none focus:border-brand-gold w-64 shadow-sm"
            />
          </div>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { label: 'Total Pending', count: applications.filter(a => a.status === ApplicationStatus.PENDING).length, icon: <Clock className="text-orange-500" />, bg: 'bg-orange-50' },
            { label: 'Total Accepted', count: applications.filter(a => a.status === ApplicationStatus.ACCEPTED).length, icon: <CheckCircle className="text-green-500" />, bg: 'bg-green-50' },
            { label: 'Total Requests', count: applications.length, icon: <Users className="text-brand-blue" />, bg: 'bg-blue-50' },
          ].map((stat, i) => (
            <div key={i} className={`${stat.bg} p-8 rounded-3xl flex items-center justify-between shadow-sm border border-black/5`}>
              <div>
                <div className="text-3xl font-serif font-black text-brand-blue">{stat.count}</div>
                <div className="text-xs uppercase tracking-widest text-brand-blue/40 font-bold mt-1">{stat.label}</div>
              </div>
              <div className="p-4 bg-white rounded-2xl shadow-inner">{stat.icon}</div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-black/5">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="px-6 py-4 text-xs uppercase tracking-widest text-brand-blue/40 font-bold">Child Name</th>
                <th className="px-6 py-4 text-xs uppercase tracking-widest text-brand-blue/40 font-bold">Applying For</th>
                <th className="px-6 py-4 text-xs uppercase tracking-widest text-brand-blue/40 font-bold">Parent Name</th>
                <th className="px-6 py-4 text-xs uppercase tracking-widest text-brand-blue/40 font-bold">Status</th>
                <th className="px-6 py-4 text-xs uppercase tracking-widest text-brand-blue/40 font-bold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <AnimatePresence>
                {filteredApps.map((app) => (
                  <motion.tr 
                    key={app.id} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="px-6 py-6">
                      <div className="font-bold text-brand-blue">{app.childFirstName} {app.childLastName}</div>
                      <div className="text-xs text-brand-blue/40">DOB: {app.childDateOfBirth}</div>
                    </td>
                    <td className="px-6 py-6">
                      <span className="bg-brand-cream text-brand-blue px-3 py-1 rounded-full text-xs font-bold">{app.applyingForClass}</span>
                    </td>
                    <td className="px-6 py-6">
                      <div className="font-medium text-brand-blue/80 text-sm">{app.parentName}</div>
                      <div className="text-[10px] text-brand-blue/40">{app.parentEmail}</div>
                    </td>
                    <td className="px-6 py-6">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                        app.status === ApplicationStatus.ACCEPTED ? 'bg-green-100 text-green-700' :
                        app.status === ApplicationStatus.REJECTED ? 'bg-red-100 text-red-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex gap-2">
                        <button 
                          onClick={() => updateStatus(app.id!, ApplicationStatus.ACCEPTED)}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
                        >
                          <CheckCircle size={18} />
                        </button>
                        <button 
                          onClick={() => updateStatus(app.id!, ApplicationStatus.REJECTED)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                        >
                          <XCircle size={18} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
          {filteredApps.length === 0 && (
            <div className="p-12 text-center text-brand-blue/30 font-serif italic">No applications found.</div>
          )}
        </div>
      </main>
    </div>
  );
}
