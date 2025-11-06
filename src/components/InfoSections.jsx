import React from 'react';
import { Truck, Clock, Shield, HelpCircle } from 'lucide-react';

export default function InfoSections() {
  return (
    <section id="info" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
            <Clock className="mb-3 h-6 w-6 text-gray-800" />
            <h3 className="font-semibold">Lead Times</h3>
            <p className="mt-1 text-sm text-gray-600">Design proof in 24 hours. Production 2-4 business days. Rush options available.</p>
          </div>

          <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
            <Truck className="mb-3 h-6 w-6 text-gray-800" />
            <h3 className="font-semibold">Shipping</h3>
            <p className="mt-1 text-sm text-gray-600">Flat-rate shipping, free over $60. Real-time tracking on all orders.</p>
          </div>

          <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
            <Shield className="mb-3 h-6 w-6 text-gray-800" />
            <h3 className="font-semibold">Quality Guarantee</h3>
            <p className="mt-1 text-sm text-gray-600">Premium archival papers and UV-safe inks. If you’re not thrilled, we’ll make it right.</p>
          </div>

          <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
            <HelpCircle className="mb-3 h-6 w-6 text-gray-800" />
            <h3 className="font-semibold">How It Works</h3>
            <p className="mt-1 text-sm text-gray-600">Upload photo → Add text → Preview → Approve → We craft and ship with care.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
