import { Star } from 'lucide-react';

const reviews = [
  { emoji: '😎', name: 'Tola', role: 'Tech Lead', text: 'Finally! No more chasing people for WiFi money. Everyone can see who paid.' },
  { emoji: '🚀', name: 'Emeka', role: 'Designer', text: 'Used it for our team trip. The transparency made everyone trust the process!' },
  { emoji: '✨', name: 'Seyi', role: 'Product Manager', text: 'Auto-refunds are genius. No awkward conversations when plans change.' },
];

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-white mb-4">Loved by Friend Groups</h2>
        <div className="flex justify-center gap-1 text-orange-500">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[32px]">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{r.emoji}</span>
              <div>
                <div className="font-bold text-white">{r.name}</div>
                <div className="text-sm text-slate-500">{r.role}</div>
              </div>
            </div>
            <p className="text-slate-300 italic leading-relaxed">"{r.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}