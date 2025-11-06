import React, { useRef, useState } from 'react';
import { Upload, Type, Download } from 'lucide-react';

export default function Customizer() {
  const fileRef = useRef(null);
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('A moment to remember');
  const [frame, setFrame] = useState('Classic White');

  const onFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
    }
  };

  const downloadPreview = () => {
    // Basic image download: open image in new tab
    if (image) window.open(image, '_blank');
  };

  return (
    <section id="customize" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold md:text-3xl">Design Your Gift</h2>
        <p className="mt-2 text-gray-600">Upload a photo, add text, and preview your frame instantly.</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* Controls */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Upload Photo</label>
                <div className="flex items-center gap-3">
                  <button onClick={() => fileRef.current?.click()} className="inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white hover:bg-black/90">
                    <Upload className="h-4 w-4" /> Choose Image
                  </button>
                  <input ref={fileRef} type="file" accept="image/*" onChange={onFileChange} className="hidden" />
                  {image && <span className="text-sm text-gray-600">Image selected</span>}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Caption</label>
                <div className="flex items-center gap-2">
                  <Type className="h-4 w-4 text-gray-500" />
                  <input
                    type="text"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-black focus:outline-none"
                    placeholder="Add a sweet note"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Frame Style</label>
                <div className="flex flex-wrap gap-2">
                  {['Classic White', 'Walnut', 'Black Matte', 'Gold'].map((style) => (
                    <button
                      key={style}
                      onClick={() => setFrame(style)}
                      className={`rounded-full border px-3 py-1 text-sm ${
                        frame === style ? 'border-black bg-black text-white' : 'border-gray-300 bg-white text-gray-800'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">Lead time: 2-4 business days • Ships worldwide</p>
                <button onClick={downloadPreview} className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 hover:bg-gray-50">
                  <Download className="h-4 w-4" /> Download Preview
                </button>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-md rounded-2xl border border-gray-200 bg-white p-4 shadow-md">
              <div className="flex h-full flex-col items-center justify-center rounded-xl bg-gray-100 p-4">
                <div className="relative w-full flex-1 overflow-hidden rounded-lg bg-white">
                  {image ? (
                    <img src={image} alt="preview" className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full items-center justify-center text-gray-400">Upload an image to preview</div>
                  )}
                </div>
                <div className="mt-3 w-full rounded-md bg-white p-3 text-center text-sm font-medium text-gray-800 shadow-sm">
                  {caption}
                </div>
                <div className="mt-2 text-xs text-gray-500">Frame: {frame}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
