'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Takeoff from './Takeoff'
import { Works } from '../../data/Works'
import Cart from './Cart'
import SocialMobile from '../NavBar/SocialMobile'

export default function WorkComponent() {
  const [numbers, setNumbers] = useState(0)

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30
    setNumbers(parseInt(num.toString()))
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,

      transition: {
        staggerChildren: 0.5,
        duration: 1,
      },
    },
  }
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
      className="bg-[url('/assets/img/earthBack.webp')] 
               bg-cover 
               bg-no-repeat 
               bg-fixed 
               bg-center 
                w-screen "
    >
      <div className="bg-black/30 w-full relative">
        <Takeoff numbers={numbers} />
        <div className="flex justify-center items-center">
          <div
            className="grid  lg:grid-cols-[repeat(2,minmax(calc(10rem+15vw),1fr))] 
                gap-[calc(3rem+2vw)] grid-cols-[1,minmax(calc(10rem+15vw),1fr))] lg:!py-40 !py-30"
          >
            {Works.slice(0)
              .reverse()
              .map((work) => (
                <Cart work={work} key={work.id} />
              ))}
          </div>
        </div>
        <SocialMobile />
      </div>
    </motion.div>
  )
}
