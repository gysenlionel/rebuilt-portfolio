'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import img from '../../../public/assets/img/me.png'

export default function Intro() {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: '55vh' }}
      transition={{ type: 'spring', duration: 2, delay: 1 }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
    w-[65vw] h-[55vh] flex flex-col lg:flex-row 
    lg:bg-[linear-gradient(to_right,rgba(var(--customWhite-rgba),1)_50%,rgba(var(--customBlue-rgba),1)_50%),linear-gradient(to_right,rgba(var(--customWhite-rgba),1)_50%,rgba(var(--customBlue-rgba),1)_50%)]
    lg:bg-[length:100%_2px,100%_2px]
    lg:bg-[position:top,bottom]
    lg:bg-no-repeat
    lg:border-l-2 border-l-customWhite
    lg:border-r-2 border-r-customBlue z-10
    "
    >
      <div className="w-full relative flex justify-center lg:justify-normal">
        <div className="text-[calc(1rem_+_1.5vw)] text-customWhite !p-8 cursor-pointer flex flex-col justify-evenly items-center lg:items-start [&>*:last-child]:text-[rgba(var(--body-rgba),0.6)] [&>*:last-child]:text-[calc(0.5rem+1.5vw)] [&>*:last-child]:!font-light ">
          <h1 className="font-bold text-[2em] leading-10 lg:leading-none">
            Hi,
          </h1>
          <h3 className="text-[1.2em]">I'm Lionel.</h3>
          <h6 className="!font-karla text-[1em] leading-4 lg:leading-none">
            I'm a Web Developer.
          </h6>
        </div>
      </div>

      <div className="w-full relative flex justify-center lg:justify-normal">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <Image
            src={img}
            alt="Me"
            className="absolute bottom-[0%] left-1/2 -translate-x-[45%] translate-y-[80%] lg:-translate-x-1/2 lg:translate-y-[0%] w-[230px] md:w-[300px] lg:w-full h-auto max-h-[77vh] object-contain"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
