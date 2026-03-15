import confetti from "canvas-confetti";

const HeroLayout = ({ WishSection }) => {

  const conteffiPlay = () => {
    WishSection.current.scrollIntoView({ behavior: 'smooth' })
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#fbbf24', '#f59e0b', '#d4af37', '#ffffff', '#60a5fa'],
    })
  }

  return (
    <div className="max-h-screen h-screen flex justify-center items-center text-slate-100 bg-[#070b14] antialiased relative">

      {/* Layered gradient orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-amber-500/20 blur-[120px] hero-glow pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full bg-amber-600/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[300px] rounded-full bg-amber-500/10 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[350px] h-[250px] rounded-full bg-amber-400/5 blur-[60px] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(253, 224, 71, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(253, 224, 71, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />


      <div className="relative z-10 text-center max-w-3xl hero-float">
        {/* Decorative top line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-amber-500/60" />
          <span className="text-amber-500/70 text-sm font-medium tracking-[0.3em] uppercase">
            Eid Greetings
          </span>
          <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-amber-500/60" />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-b from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(251,191,36,0.3)]">
            Eid Mubarak
          </span>
          <br />
          <span className="bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(251,191,36,0.25)]">
            Shahrukh Mama
          </span>
          <span className="ml-2 inline-block animate-pulse">🌙</span>
        </h1>

        <p className="text-slate-300/90 text-lg md:text-xl mb-12 leading-relaxed max-w-xl mx-auto">
          I built something special to show what I&apos;ve been learning in programming.
          <span className="text-amber-200/80"> I hope you like it!</span>
        </p>

        <button
          onClick={conteffiPlay}
          className="group relative px-10 py-4 rounded-2xl font-semibold text-lg text-slate-900 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 shadow-xl shadow-amber-500/25 hover:shadow-2xl hover:shadow-amber-500/35 hover:from-amber-300 hover:via-amber-400 hover:to-amber-500 hover:scale-105 transition-all duration-300"
        >
          <span className="flex items-center gap-2">
            Open My Eid Card
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </span>
        </button>

      </div>
    </div>
  )
}

export default HeroLayout