import { motion } from 'framer-motion';
import { Users, Eye, Shield, Zap } from 'lucide-react';

const featureData = [
  {
    icon: <Users className="w-8 h-8 text-orange-500" />,
    emoji: '👥',
    title: 'Group Together',
    description: 'Invite friends via link. Everyone contributes to one shared goal without the awkward "who owes what" chats.',
  },
  {
    icon: <Eye className="w-8 h-8 text-red-500" />,
    emoji: '👀',
    title: 'Total Transparency',
    description: 'Our Live Wall shows contributions in real-time. Full visibility for every member, no hidden math.',
  },
  {
    icon: <Shield className="w-8 h-8 text-purple-500" />,
    emoji: '🔒',
    title: 'Escrow Protected',
    description: 'Your money is held safely. If the goal isn’t met, the system triggers automatic refunds to everyone.',
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    emoji: '⚡',
    title: 'Instant Updates',
    description: 'Push notifications let you know the second a friend pays. No more manual checking of bank apps.',
  },
];

export function Features() {
//   const featureData = [
//     {
//       title: "Escrow Protection",
//       description: "Funds are held securely and only released when the goal is met or everyone confirms.",
//       icon: <Lock className="w-8 h-8 text-orange-500" />
//     },
//     {
//       title: "Real-time Witnessing",
//       description: "Transparency for all. Every group member sees exactly who has paid and who hasn't.",
//       icon: <Users className="w-8 h-8 text-orange-500" />
//     },
//     // ... add more features
//   ];

  return (
    <section className="py-20">
      <div className="text-center mb-16">
        {/* 1. Headline: Vertical gradient light mode, solid white dark mode */}
        <h2 className="text-4xl md:text-5xl font-black mb-4 transition-all duration-300
          text-slate-900 dark:text-white
          bg-gradient-to-b from-purple-600 to-orange-500 bg-clip-text text-transparent dark:bg-none">
          Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Trust</span>
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors">
          Every feature is designed to eliminate the stress of collecting money from friends.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {featureData.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            /* 2. Card: bg-white/70 for light mode "milky" glass */
            className="group bg-white/70 dark:bg-white/5 border border-white/80 dark:border-white/10 p-10 rounded-[40px] hover:bg-white/90 dark:hover:bg-white/[0.07] transition-all shadow-xl dark:shadow-none"
          >
            <div className="flex flex-col sm:flex-row items-start gap-6">
              {/* 3. Icon Wrapper: Slate-100 in light mode for a softer look */}
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-white/5 group-hover:scale-110 transition-all duration-300">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}