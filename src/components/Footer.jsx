import React from 'react';

const Footer = () => {
  const handleImgError = (e) => {
    if (e?.target) e.target.style.display = 'none';
  };

  return (
    <footer className="bg-black border-t border-white/10 text-white">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/exr-logo.png" alt="EXR" className="h-8" onError={handleImgError} />
          <span className="text-zinc-300">© {new Date().getFullYear()} EXR Games. All rights reserved.</span>
        </div>
        <div className="text-sm text-zinc-400">
          Built for the Exclusive Program presentation.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
