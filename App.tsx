import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/layout';
import { Home, About, Founder } from './pages/main';
import { ServicesMain, ServiceDetail } from './pages/services';
import { Blog, Research, IndustriesPage, PartnersPage } from './pages/resources';
import { Contact } from './pages/contact';

// ScrollToTop component to handle scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Ensures pages start at top */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Company Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/founder" element={<Founder />} />
          
          {/* Service Pages */}
          <Route path="/services" element={<ServicesMain />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          
          {/* Resource Pages */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/research" element={<Research />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          
          {/* Contact */}
          <Route path="/contact" element={<Contact />} />
          
          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;