import { useRef } from 'react'
import Blessing from '../components/Blessing'
import HeroLayout from '../components/HeroLayout'
import Skills from '../components/Skills'
import SweetFooter from '../components/SweetFooter'
import WishCard from '../components/WishCard'

const SPA = () => {

  const WishSection = useRef(null)

  return (
    <>
      <section>
        <HeroLayout WishSection={WishSection} />
        <WishCard WishSection={WishSection} />
      </section>

      <section className='px-6 py-24'>
        <Skills />
      </section>

      <section className='px-6 py-24'>
        <Blessing />
      </section>

      <section>
        <SweetFooter />
      </section>
    </>
  )
}

export default SPA