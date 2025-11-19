import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="cta" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-400 to-teal-400 p-8 sm:p-12"
        >
          <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-white/25 blur-2xl" />
          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/20 blur-2xl" />

          <div className="relative">
            <h3 className="text-3xl font-bold text-slate-900">Ready to launch with Ethiofy?</h3>
            <p className="mt-2 text-slate-800/80 max-w-2xl">Create your first product, publish your store, and start selling today. No subscription required.</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-3 font-medium hover:bg-slate-800 transition-colors">Create a product</a>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 font-medium hover:bg-white/90 transition-colors">See pricing</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
