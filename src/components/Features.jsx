import { motion } from "framer-motion";
import { Sparkles, Shield, Clock, Palette } from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "One-click setup",
    desc: "Pick a product, upload your art, and go live in minutes.",
  },
  {
    icon: Palette,
    title: "Crisp mockups",
    desc: "Auto-generated previews that look stunning everywhere.",
  },
  {
    icon: Clock,
    title: "Fast fulfillment",
    desc: "Reliable partners deliver on-time worldwide.",
  },
  {
    icon: Shield,
    title: "Quality-first",
    desc: "We vet every supplier so your brand always shines.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Minimal. Modern. Powerful.</h2>
          <p className="mt-3 text-white/70">Everything you need to sell custom merch without the clutter.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/20 text-emerald-300">
                <it.icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-white/70">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
