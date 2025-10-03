'use client'

import { useEarthStore } from '@/app/store/earthClick'
import { Jupiter, RedPlanet } from '@/app/svg/AllSvg'
import { motion } from 'framer-motion'

export default function Planets() {
  const click = useEarthStore((s) => s.click)
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          transition: { type: 'spring', duration: 1.5, delay: 1 },
        }}
        animate={{
          opacity: 1,
          transition: { type: 'spring', duration: 1.5, delay: 1.5 },
        }}
      >
        <div
          className={`hidden ${
            click ? 'hidden' : 'lg:flex'
          } flex-col items-center fixed bottom-0 left-80 z-30 [&>*:not(:last-child)]:m-[0.5rem_0] gap-1`}
        >
          <Jupiter
            width={55}
            height={55}
            className="animate-[rotate-planet_5s_linear_infinite] origin-center [transform-box:fill-box] will-change-transform"
          />
          <span className="w-[2px] h-20 bg-black" />
        </div>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          transition: { type: 'spring', duration: 1.5, delay: 1 },
        }}
        animate={{
          opacity: 1,
          transition: { type: 'spring', duration: 1.5, delay: 1.5 },
        }}
      >
        <div
          className={`hidden ${
            click ? 'hidden' : 'lg:flex'
          } flex-col items-center fixed bottom-0 right-80 z-30 [&>*:not(:last-child)]:m-[0.5rem_0]`}
        >
          <RedPlanet
            width={60}
            className="animate-[rotate-planet_5s_linear_infinite] origin-center [transform-box:fill-box] will-change-transform"
          />
          <span className="w-[2px] h-20 bg-black" />
        </div>
      </motion.div>
    </>
  )
}
