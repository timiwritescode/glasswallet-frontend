import { motion } from 'framer-motion';

const steps = [
  {
    step: '01',
    icon: '🎯',
    title: 'Create Your Pot',
    desc: 'Set a goal, pick a template, and share the link with your crew.',
  },
  {
    step: '02',
    icon: '💸',
    title: 'Friends Contribute',
    desc: 'Everyone pays via bank transfer. Names appear on the live wall instantly.',
  },
  {
    step: '03',
    icon: '✅',
    title: 'Withdraw with Proof',
    desc: 'Upload receipt, get 1 approval, money moves to your account. Done!',
  },
];

export function HowItWorks() {
  return (
    <section className="py-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">How GlassWallet Works</h2>
        <p className="text-xl text-slate-400">Three simple steps to trusted group payments</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((item, index) => (
          <div key={index} className="relative group">
            <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 hover:bg-white/[0.08] transition-all h-full">
              <div className="text-6xl mb-6">{item.icon}</div>
              <div className="text-orange-500 font-black text-sm uppercase tracking-widest mb-2">Step {item.step}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}