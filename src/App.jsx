import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import VideoShowcase from './components/VideoShowcase';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Features />
      <VideoShowcase />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
