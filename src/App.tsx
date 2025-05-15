import React from 'react';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  // Simple client-side routing implementation
  const path = window.location.pathname;
  
  // Extract service path if present
  const serviceMatch = path.match(/^\/services\/([a-z-]+)/);
  const servicePath = serviceMatch ? serviceMatch[1] : null;

  return (
    <>
      <Layout>
        {path === '/' && <HomePage />}
        {servicePath && <ServiceDetailPage service={servicePath} />}
      </Layout>
      <ScrollToTop />
    </>
  );
}

export default App;