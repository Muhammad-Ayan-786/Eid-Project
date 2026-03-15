const SkillCard = ({ skill }) => {
  return (
    <div
      className="group flex flex-col items-center rounded-2xl bg-slate-800/50 border border-slate-700/60 p-6 text-center hover:border-amber-500/40 hover:bg-slate-800/80 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-1.5"
    >
      <img
        src={skill.url}
        className="w-32 h-32 object-cover mb-2 block transform group-hover:scale-110 transition-transform duration-300"
      />
      <h2 className="font-semibold text-2xl mb-2 text-slate-100 group-hover:text-amber-200 transition-colors">
        {skill.title}
      </h2>
      <p className="font-semibold text-slate-100 group-hover:text-amber-200 transition-colors">
        {skill.description}
      </p>
    </div>)
}

export default SkillCard