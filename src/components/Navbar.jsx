import { Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <nav className="flex items-center justify-between px-4 sm:px-6 py-3">
            <motion.a
              href="#"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-white"
            >
              <span className="relative grid place-items-center w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500">
                <span className="absolute inset-0 rounded-lg shadow-[0_0_24px_rgba(16,185,129,0.55)]" />
                <span className="font-black">E</span>
              </span>
              <span className="font-semibold tracking-tight">Ethiofy</span>
            </motion.a>

            <div className="hidden sm:flex items-center gap-8 text-sm">
              <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
              <a href="#how" className="text-white/80 hover:text-white transition-colors">How it works</a>
              <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
            </div>

            <div className="flex items-center gap-3">
              <a href="#" className="hidden sm:inline-flex text-sm font-medium text-white/80 hover:text-white">Sign in</a>
              <a href="#cta" className="inline-flex items-center text-sm font-medium px-3.5 py-2 rounded-lg bg-emerald-500 text-slate-900 hover:bg-emerald-400 transition-colors">
                Start free
              </a>
              <button className="sm:hidden inline-flex items-center p-2 rounded-lg text-white/80 hover:text-white">
                <Menu size={20} />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
