import { Star } from 'lucide-react';

const reviews = [
  { emoji: '😎', name: 'Tola', role: 'Tech Lead', text: 'Finally! No more chasing people for WiFi money. Everyone can see who paid.' },
  { emoji: '🚀', name: 'Emeka', role: 'Designer', text: 'Used it for our team trip. The transparency made everyone trust the process!' },
  { emoji: '✨', name: 'Seyi', role: 'Product Manager', text: 'Auto-refunds are genius. No awkward conversations when plans change.' },
];
export function Testimonials() {
  // const reviews = [
  //   { name: "Tunde", role: "Trip Organizer", text: "No more chasing people for flight money. The escrow feature is a lifesaver.", emoji: "✈️" },
  //   { name: "Sarah", role: "Wedding Planner", text: "GlassWallet made collecting for the bridal shower so transparent. Everyone loved it!", emoji: "💍" },
  //   { name: "Chidi", role: "Gamer", text: "We used it for our local tournament prize pool. The witness system is genius.", emoji: "🎮" }
  // ];

  return (
    <section className="py-10">
      <div className="text-center mb-12">
        {/* 1. Headline: Theme-aware color transition */}
        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 transition-colors">
          Loved by Friend Groups
        </h2>
        {/* Stars: Orange-500 works great in both modes */}
        <div className="flex justify-center gap-1 text-orange-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-current" />
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div 
            key={i} 
            /* 2. Card: bg-white/70 for light, bg-white/5 for dark */
            className="bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 p-8 rounded-[32px] shadow-lg dark:shadow-none transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{r.emoji}</span>
              <div>
                <div className="font-bold text-slate-900 dark:text-white transition-colors">{r.name}</div>
                <div className="text-sm text-slate-500 dark:text-slate-500">{r.role}</div>
              </div>
            </div>
            {/* 3. Quote: Italicized text with better contrast for light mode */}
            <p className="text-slate-600 dark:text-slate-300 italic leading-relaxed transition-colors">
              "{r.text}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
