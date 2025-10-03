'use client'

import { motion } from 'framer-motion'

export default function Aside({
  width,
  lgTop,
  children,
}: {
  width: number
  lgTop: string
  children: React.ReactNode
}) {
  return (
    <motion.div
      className={`shadow-[0px_2px_7px_rgba(255,254,254,0.6)] rounded-[2px] text-customWhite flex items-center !px-8 !py-4 lg:absolute lg:right-[calc(5rem+5vw)] ${lgTop}  h-[15vh] backdrop-blur-[2px] lg:flex lg:justify-center lg:items-center lg:flex-col static md:w-[30vw] lg:w-[20vw] w-[60vw]`}
      initial={{ height: 0 }}
      animate={width > 1024 ? { height: '30vh' } : { height: '35vh' }}
      transition={{ type: 'spring', duration: 2.5, delay: 0 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
