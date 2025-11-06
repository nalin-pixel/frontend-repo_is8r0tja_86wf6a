import React from 'react';
import { Gift, Calendar, Users, Tag } from 'lucide-react';

const categories = [
  { label: 'Occasion', icon: Calendar, options: ['Birthday', 'Anniversary', 'New Baby', 'Graduation', 'Farewell'] },
  { label: 'Recipient', icon: Users, options: ['For Him', 'For Her', 'For Couples', 'For Parents', 'For Friends'] },
  { label: 'Price', icon: Tag, options: ['$0 - $25', '$25 - $50', '$50 - $100', '$100+'] },
  { label: 'Type', icon: Gift, options: ['Frames', 'Polaroids', 'Collages', 'Desk Plaques'] },
];

export default function CategoryFilters() {
  return (
    <section id="categories" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold md:text-3xl">Shop by Category</h2>
        <p className="mt-2 text-gray-600">Find the perfect personalized gift by occasion, recipient, or price.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <div key={cat.label} className="rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-sm transition hover:shadow">
              <div className="mb-3 flex items-center gap-2">
                <cat.icon className="h-5 w-5 text-gray-700" />
                <h3 className="font-medium">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.options.map((opt) => (
                  <button key={opt} className="rounded-full border border-gray-300 bg-white px-3 py-1 text-sm text-gray-700 hover:border-gray-400">
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
