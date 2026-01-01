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
  // const steps = [
  //   { step: "01", icon: "🏺", title: "Create a Pot", desc: "Set a goal, deadline, and invite your friends. Choose if it's all-or-nothing or flexible." },
  //   { step: "02", icon: "🤝", title: "Friends Join", desc: "Everyone contributes securely. Progress is tracked live on the group wall for everyone to see." },
  //   { step: "03", icon: "⚖️", title: "Automated Release", desc: "Once the goal is met, funds are released. If not, everyone gets an automatic refund." }
  // ];

  return (
    <section className="py-10">
      <div className="text-center mb-16">
        {/* 1. Headline: Vertical gradient light mode, solid white dark mode */}
        <h2 className="text-4xl md:text-5xl font-black mb-4 transition-all duration-300
          text-slate-900 dark:text-white
          bg-gradient-to-b from-purple-600 to-orange-500 bg-clip-text text-transparent dark:bg-none">
          How GlassWallet Works
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 transition-colors">
          Three simple steps to trusted group payments
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((item, index) => (
          <div key={index} className="relative group">
            {/* 2. Card: bg-white/70 for light mode "milky" glass */}
            <div className="bg-white/70 dark:bg-white/5 border border-white/80 dark:border-white/10 rounded-[40px] p-8 hover:bg-white/90 dark:hover:bg-white/[0.08] transition-all h-full shadow-xl dark:shadow-none">
              <div className="text-6xl mb-6">{item.icon}</div>
              
              <div className="text-orange-600 dark:text-orange-500 font-black text-sm uppercase tracking-widest mb-2">
                Step {item.step}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}