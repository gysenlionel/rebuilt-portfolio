'use client'

import { useEarthStore } from '@/app/store/earthClick'
import { motion } from 'framer-motion'
export default function Name() {
  const click = useEarthStore((s) => s.click)
  return (
    <div className="text-[32px] font-semibold">
      <div
        className={`absolute lg:top-0 bg-customBlue lg:bottom-0 lg:right-1/2 ${
          click ? 'w-full lg:w-1/2 h-1/2 lg:h-full' : 'w-0 h-0'
        } transition-[height,width] [transition-duration:500ms,1000ms] [transition-delay:0ms,500ms] [transition-timing-function:ease,ease] z-10`}
      />
      <div
        className={`inline-block ${
          click ? 'text-customWhite' : 'text-black'
        } font-pacifico fixed left-8 top-8 z-30`}
      >
        <motion.h1
          initial={{
            y: -200,
            transition: { type: 'spring', duration: 1.5, delay: 1 },
          }}
          animate={{
            y: 0,
            transition: { type: 'spring', duration: 1.5, delay: 1 },
          }}
        >
          Lionel
        </motion.h1>
      </div>
      <div
        className={`${
          click ? 'text-customWhite lg:text-customBlue' : 'text-black'
        } font-pacifico font-semibold absolute top-8 right-[calc(1rem_+_2vw)] z-10`}
      >
        <motion.h1
          initial={{
            y: -200,
            transition: { type: 'spring', duration: 1.5, delay: 1 },
          }}
          animate={{
            y: 0,
            transition: { type: 'spring', duration: 1.5, delay: 1 },
          }}
        >
          Gysen
        </motion.h1>
      </div>
    </div>
  )
}
