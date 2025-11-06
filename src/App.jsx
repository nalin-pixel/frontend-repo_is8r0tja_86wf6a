import React from 'react';
import Hero from './components/Hero';
import CategoryFilters from './components/CategoryFilters';
import Customizer from './components/Customizer';
import Gallery from './components/Gallery';
import InfoSections from './components/InfoSections';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-white">
          <a href="#home" className="text-lg font-semibold tracking-tight">Keepsake Studio</a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#categories" className="hover:opacity-80">Categories</a>
            <a href="#customize" className="hover:opacity-80">Customize</a>
            <a href="#gallery" className="hover:opacity-80">Gallery</a>
            <a href="#info" className="hover:opacity-80">Info</a>
          </nav>
          <a href="#customize" className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black shadow hover:bg-white/90">Create Yours</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <CategoryFilters />
        <Customizer />
        <Gallery />
        <InfoSections />
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50 py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-gray-600">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p>© {new Date().getFullYear()} Keepsake Studio. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-gray-800">Privacy</a>
              <a href="#" className="hover:text-gray-800">Terms</a>
              <a href="#" className="hover:text-gray-800">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
