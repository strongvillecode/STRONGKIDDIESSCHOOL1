/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import AdminDashboard from './pages/admin/Dashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Admin route doesn't use the standard public layout */}
        <Route path="/admin" element={<AdminDashboard />} />
        
        {/* Public routes use layout */}
        <Route path="*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/montessori" element={<Academics />} />
              <Route path="/school-life" element={<Home />} />
              <Route path="/gallery" element={<Home />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}
