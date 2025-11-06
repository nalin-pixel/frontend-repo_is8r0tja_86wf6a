import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

const samples = [
  { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop', title: 'Anniversary Frame' },
  { src: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=1200&auto=format&fit=crop', title: 'Travel Polaroids' },
  { src: 'https://images.unsplash.com/photo-1640978217349-1b7cb1f893c3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbm5pdmVyc2FyeSUyMEZyYW1lfGVufDB8MHx8fDE3NjI0MzEyOTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', title: 'New Baby Collage' },
  { src: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=1200&auto=format&fit=crop', title: 'Minimal Desk Plaque' },
  { src: 'https://images.unsplash.com/photo-1640978217349-1b7cb1f893c3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbm5pdmVyc2FyeSUyMEZyYW1lfGVufDB8MHx8fDE3NjI0MzEyOTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', title: 'Wedding Keepsake' },
  { src: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1200&auto=format&fit=crop', title: 'Friendship Memories' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6 flex items-center gap-2">
          <ImageIcon className="h-6 w-6 text-gray-800" />
          <h2 className="text-2xl font-semibold md:text-3xl">Customer Favorites</h2>
        </div>
        <p className="mb-8 text-gray-600">A peek at real designs made by our community.</p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {samples.map((item) => (
            <figure key={item.title} className="group relative overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
              <img src={item.src} alt={item.title} className="h-64 w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <span className="text-sm">{item.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
