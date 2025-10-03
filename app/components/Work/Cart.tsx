'use client'

import { IWork } from '../../data/Works'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
export default function Cart({ work }: { work: IWork }) {
  const Item: Variants = {
    hidden: {
      scale: 0,
    },
    show: {
      scale: 1,
      transition: {
        type: 'spring',
        duration: 0.5,
      },
    },
  }
  return (
    <motion.div variants={Item}>
      <a
        className="lg:w-[calc(10rem+15vw)] md:w-[cacl(18rem+20vw)] w-[calc(10rem+20vw)]  decoration-0 h-[22rem]  text-center 
                shadow-[0_3px_8px_rgba(0,0,0,0.6)] 
                rounded-[4px]
                flex flex-col items-center text-white scale-100 transition-transform duration-300 ease-in-out hover:scale-105"
        href={work.links}
        target="_blank"
      >
        <div className="relative w-full h-30 md:h-44">
          <Image
            src={work.img}
            alt="Website image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority
            className=" rounded-t-[4px]"
          />
        </div>
        <h4 className="!pt-6 !pb-8 !px-2 font-semibold">{work.explain}</h4>
        <p className="text-white/90 !px-2">{work.techno}</p>
      </a>
    </motion.div>
  )
}
