import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSkills } from '../store/features/skillAPISlice'
import SkillCard from './SkillCard'

const Skills = () => {

  const allSkills = useSelector((state) => state.skills.skills)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSkills())
  }, [])

  return (
    <>
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-14 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 bg-clip-text text-transparent py-2">
        My Developer Journey So Far
      </h2>
      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {allSkills.map(skill => (
          <SkillCard key={skill._id} skill={skill} />
        ))}
      </div>
    </>
  )
}

export default Skills