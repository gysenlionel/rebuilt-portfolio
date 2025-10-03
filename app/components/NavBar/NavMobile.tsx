'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function NavMobile() {
  const pathname = usePathname()
  return (
    <div className={`${pathname === '/' && 'hidden'}`}>
      <div className="flex flex-col items-center fixed top-8 left-[30%] -translate-x-1/2 translate-y-0 z-30 [&>*:not(:last-child)]:my-2 md:hidden">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 1.3, 1] }}
          transition={{
            duration: 0.7,
            delay: 1.2,
            ease: 'easeInOut',
            times: [0, 0.6, 0.85, 1],
          }}
        >
          <Link
            href="/work"
            className={`text-sm border-customWhite bg-customWhite text-black font-bold border-2 border-solid size-11 rounded-full flex justify-center items-center decoration-0 scale-100 transition ease-in-out duration-300 hover:scale-[1.2] !p-2`}
          >
            <h5>Work</h5>
          </Link>
        </motion.div>
      </div>

      <div className="flex flex-col items-center fixed top-8 right-[30%] translate-x-1/2 translate-y-0 z-30 [&>*:not(:last-child)]:my-2 md:hidden">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 1.3, 1] }}
          transition={{
            duration: 0.7,
            delay: 1.4,
            ease: 'easeInOut',
            times: [0, 0.6, 0.85, 1],
          }}
        >
          <Link
            href="/about"
            className={`text-sm border-customWhite bg-customWhite text-black font-bold border-2 border-solid size-11 rounded-full flex justify-center items-center decoration-0 scale-100 transition ease-in-out duration-300 hover:scale-[1.2]`}
          >
            <h5>About</h5>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
