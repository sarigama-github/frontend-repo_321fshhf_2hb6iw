import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      {/* background gradient + orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_10%_-20%,rgba(16,185,129,0.25),transparent),radial-gradient(800px_500px_at_90%_10%,rgba(45,212,191,0.18),transparent)]" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-emerald-500/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="absolute -bottom-24 -left-24 w-[520px] h-[520px] rounded-full bg-teal-400/10 blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-xs rounded-full border border-white/15 bg-white/5 backdrop-blur px-3 py-1 text-white/80"
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              New: Merch automation for creators
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-5xl sm:text-6xl font-bold tracking-tight text-white"
            >
              Launch custom merch in minutes with Ethiofy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-5 text-lg text-white/70 max-w-xl"
            >
              A minimalist print-on-demand platform inspired by Printify — streamlined for speed, simplicity, and gorgeous results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#cta" className="inline-flex justify-center items-center rounded-lg bg-emerald-400 text-slate-900 px-5 py-3 font-medium hover:bg-emerald-300 transition-colors">
                Start free
              </a>
              <a href="#features" className="inline-flex justify-center items-center rounded-lg border border-white/15 bg-white/5 text-white px-5 py-3 font-medium hover:bg-white/10 transition-colors">
                Explore features
              </a>
            </motion.div>

            <div className="mt-10 flex items-center gap-4 text-white/60">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <span key={i} className="relative inline-flex h-8 w-8 rounded-full ring-2 ring-slate-900 bg-gradient-to-br from-white/40 to-white/10" />
                ))}
              </div>
              <p className="text-sm">Join 1,200+ creators</p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4"
            >
              <div className="aspect-[4/3] w-full rounded-xl bg-slate-900/60 grid place-items-center overflow-hidden">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="rounded-xl border border-white/10 bg-slate-800/60 p-6 shadow-2xl"
                >
                  <div className="h-40 w-64 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500" />
                  <p className="mt-4 text-center text-white/80 text-sm">Live product preview</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
