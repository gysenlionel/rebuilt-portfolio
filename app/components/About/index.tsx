'use client'

import { motion } from 'framer-motion'
import ParticuleComponent from '../Particules/ParticuleComponent'
import { Satellite } from '../../../app/svg/AllSvg'
import { useEffect, useState } from 'react'
import SocialMobile from '../NavBar/SocialMobile'
import Aside from './Aside'

export default function AboutComponent() {
  const [width, setWidth] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 0
  )

  useEffect(() => {
    const updateDimension = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', updateDimension)
    return () => window.removeEventListener('resize', updateDimension)
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
      className={`bg-[url('/assets/img/luneEarth.webp')] 
               bg-cover 
               bg-no-repeat 
               bg-fixed 
               bg-center 
                w-screen `}
    >
      <div className="lg:h-screen relative lg:block h-auto flex flex-col justify-center items-center">
        <ParticuleComponent />
        <Satellite
          width={180}
          className={`lg:animate-[satelite-float_4s_ease_infinite] lg:absolute lg:top-[10%] lg:right-[5%] hidden lg:block`}
        />
        <motion.div
          initial={{ height: 0 }}
          animate={width > 425 ? { height: '65vh' } : { height: '60vh' }}
          transition={{ type: 'spring', duration: 2.5, delay: 0 }}
          className="shadow-[0px_2px_7px_rgba(255,254,254,0.6)] rounded-[2px] text-customWhite lg:!p-8 lg:w-[35vw] h-[70vh] lg:z-30 leading-normal flex justify-center items-center backdrop-blur-[2px] lg:absolute left-[calc(5rem+5vw)] top-[10rem] static z-0 w-[60vw] !p-4 lg:!mt-0 !mt-32"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <p>
              I&apos;m Lionel Gysen, i live in Brussels and i am a web
              developer.
            </p>
            <br />

            <p>
              I like to discover and test new features. Learn new things about
              React, Next.js and other frameworks.
            </p>
            <br />

            <p>
              I also like the backend, learning more about Node.js and Symfony
              to improve my knowledge of Javascript and PHP.
            </p>
          </motion.div>
        </motion.div>
        <div className="relative w-screen lg:w-auto flex flex-col md:flex-row lg:block items-center justify-evenly !mt-8 !pt-4 lg:!mt-0 lg:!pt-0 !space-y-12 md:!space-y-0 !mb-24 md:!mb-8 lg:!mb-0">
          <Aside lgTop="lg:top-40" width={width}>
            <h3 className="text-xl ">Frontend</h3>
            <br />
            <br />
            <p>
              Html, Css, Javascript, Typescript, React, Next.js, Tailwind, Sass,
              Bootstrap, Shadcn, Styled-components,Chart.js, Git.
            </p>
          </Aside>
          <Aside lgTop="lg:top-[calc(5rem+50vh)]" width={width}>
            <h3 className="text-xl">Backend</h3>
            <br />
            <br />
            <p>
              Node.js, Express, Fastify, Apollo, PHP, Symfony, Api-Platform,
              MySQL,MongoDB, PostgreSQL, SQL.
            </p>
          </Aside>
        </div>
      </div>
      <SocialMobile />
    </motion.div>
  )
}
