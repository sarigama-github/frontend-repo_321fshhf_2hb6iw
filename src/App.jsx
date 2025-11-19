import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      {/* Subtle grid/pattern */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(1000px_600px_at_20%_-10%,rgba(16,185,129,0.12),transparent),radial-gradient(800px_500px_at_90%_10%,rgba(45,212,191,0.08),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,transparent,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px]" />

      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>

      <footer className="py-10 border-t border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Ethiofy. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#features" className="text-white/70 hover:text-white">Features</a>
            <a href="#pricing" className="text-white/70 hover:text-white">Pricing</a>
            <a href="#" className="text-white/70 hover:text-white">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
