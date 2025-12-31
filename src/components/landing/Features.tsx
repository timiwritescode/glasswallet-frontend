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
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Trust</span>
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Every feature is designed to eliminate the stress of collecting money from friends.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {featureData.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="group bg-white/5 border border-white/10 p-10 rounded-[40px] hover:bg-white/[0.07] hover:border-white/20 transition-all"
          >
            <div className="flex items-start gap-6">
              <div className="bg-slate-900 p-4 rounded-2xl border border-white/5 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed">
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