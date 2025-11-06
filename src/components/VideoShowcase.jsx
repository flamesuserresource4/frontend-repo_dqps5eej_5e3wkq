import React from 'react';

const VideoShowcase = () => {
  return (
    <section id="video" className="relative py-20 bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <div className="relative container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">See What You Get Inside</h2>
          <p className="mt-4 text-zinc-300">
            A quick walkthrough of the Exclusive Program, benefits, and how to get started.
          </p>
        </div>
        <div className="aspect-video w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-black">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/jQIqVKbD6TU"
            title="EXR Exclusive Program Overview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
