import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles, Star, Camera } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to ensure text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
          <Sparkles className="h-4 w-4 text-yellow-300" />
          <span className="text-sm">Personalized Gifts • Frames • Polaroids</span>
        </div>
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          Turn Moments Into Timeless Keepsakes
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-base text-white/90 md:text-lg">
          Custom frames and polaroids crafted to tell your story. Upload photos, add text, and preview your design in seconds.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#customize" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-black shadow hover:bg-white/90">
            <Camera className="h-5 w-5" /> Start Customizing
          </a>
          <a href="#gallery" className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-transparent px-6 py-3 font-medium text-white hover:bg-white/10">
            <Star className="h-5 w-5" /> Explore Gallery
          </a>
        </div>
        <p className="mt-6 text-sm text-white/80">USP: Premium-quality prints, live previews, and delivery you can count on.</p>
      </div>
    </section>
  );
}
