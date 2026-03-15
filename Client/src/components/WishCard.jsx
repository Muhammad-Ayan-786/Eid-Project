import React from 'react'

const GreetCard = ({ WishSection }) => {
  return (
    <div ref={WishSection} className="min-h-screen flex items-center justify-center px-6 py-24 bg-gradient-to-b from-[#070b14] via-[#0c1222] to-[#070b14]" >

      <div className="w-full max-w-xl">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50">

          {/* Card Glow */}
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-amber-500/40 via-amber-500/10 to-transparent opacity-60" />
          <div className="relative rounded-3xl bg-gradient-to-br from-slate-800/95 via-slate-900/95 to-slate-800/95 border border-amber-500/25 p-8 md:p-12 backdrop-blur-xl">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
            <div className="relative">
              <p className="text-slate-200/95 text-lg md:text-xl leading-relaxed mb-8">
                Shahrukh Mama, <span className="text-amber-300 font-medium">Eid Mubarak!</span> 🌙
                Thank you for guiding me on this programming journey. You&apos;ve always encouraged
                me to learn and grow. I started with frontend development exactly two years ago,
                and I recently began learning backend too. This little project is my way of sharing
                the progress I&apos;ve made. <span className="text-amber-200/90">Thank you soo much</span> for everything!
              </p>
              <p className="text-amber-400/90 text-sm md:text-base font-medium">
                Built with ❤️ by Ayan ; Future Software Engineer
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default GreetCard