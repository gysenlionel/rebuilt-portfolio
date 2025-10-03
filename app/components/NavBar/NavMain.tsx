'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEarthStore } from '@/app/store/earthClick'
import { Github, Linkedin } from '@/app/svg/AllSvg'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
export default function NavMain() {
  const pathname = usePathname()
  const [width, setWidth] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 0
  )
  const click = useEarthStore((s) => s.click)

  useEffect(() => {
    let updateDimension = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', updateDimension)
    return () => window.removeEventListener('resize', updateDimension)
  }, [])

  return (
    <>
      <div
        className={`${
          pathname !== '/'
            ? 'hidden'
            : 'flex flex-col items-center fixed bottom-0 right-8 z-30 gap-4 text-[13px]'
        } md:flex md:flex-col md:items-center md:fixed md:bottom-0 md:right-8 md:z-30 md:gap-4 md:text-[13px]`}
      >
        <motion.div
          className="inline-flex"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 1.3, 1] }}
          transition={{
            duration: 1,
            delay: 1.2,
            ease: 'easeInOut',
            times: [0, 0.6, 0.85, 1],
          }}
        >
          <Link
            href="/work"
            className={`${
              pathname === '/'
                ? click
                  ? 'border-customBlue bg-customBlue text-customWhite'
                  : 'border-black bg-black text-customWhite'
                : 'border-customWhite bg-customWhite text-black font-bold'
            } border-2 border-solid size-10 rounded-full flex justify-center items-center decoration-0 font-bold scale-100 transition ease-in-out duration-300 hover:scale-[1.2]`}
          >
            <h5>Work</h5>
          </Link>
        </motion.div>
        <motion.div
          className="inline-flex"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 1.3, 1] }}
          transition={{
            duration: 1,
            delay: 1.4,
            ease: 'easeInOut',
            times: [0, 0.6, 0.85, 1],
          }}
        >
          <Link
            href="/about"
            className={`${
              pathname === '/'
                ? click
                  ? 'border-customBlue bg-customBlue text-customWhite'
                  : ' border-black bg-black text-customWhite'
                : 'border-customWhite bg-customWhite text-black'
            } border-2 border-solid size-10 rounded-full flex justify-center items-center decoration-0 font-bold scale-100 transition ease-in-out duration-300 hover:scale-[1.2] `}
          >
            <h5>About</h5>
          </Link>
        </motion.div>
        <motion.div
          className={`${
            pathname === '/'
              ? click
                ? 'bg-customBlue'
                : 'bg-black'
              : 'bg-customWhite'
          } w-0.5 h-32`}
          initial={{ height: 0 }}
          animate={{ height: '8rem' }} // h-32
          transition={{ type: 'spring', duration: 1, delay: 0.8 }}
        ></motion.div>
      </div>

      <div
        className={`${
          pathname !== '/'
            ? 'hidden'
            : 'flex flex-col items-center fixed bottom-0 left-8 z-30 gap-4'
        } md:flex md:flex-col md:items-center md:fixed md:bottom-0 md:left-8 md:z-30 md:gap-4`}
      >
        <motion.div
          className="inline-flex"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 1.3, 1] }}
          transition={{
            duration: 1,
            delay: 1.2,
            ease: 'easeInOut',
            times: [0, 0.6, 0.85, 1],
          }}
        >
          <a href="https://github.com/gysenlionel" rel="github" target="_blank">
            <Github
              fill={
                pathname === '/'
                  ? click
                    ? width > 1024
                      ? 'rgb(var(--customWhite-rgba))'
                      : 'rgb(var(--customBlue-rgba))'
                    : 'black'
                  : 'rgb(var(--customWhite-rgba))'
              }
              className={`scale-100 transition ease-in-out duration-300 hover:scale-[1.2] size-7.5 `}
            />
          </a>
        </motion.div>

        <motion.div
          className="inline-flex"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 1.3, 1] }}
          transition={{
            duration: 1,
            delay: 1.4,
            ease: 'easeInOut',
            times: [0, 0.6, 0.85, 1],
          }}
        >
          <a
            href="https://www.linkedin.com/in/lionel-gysen/"
            rel="linkedin"
            target="_blank"
          >
            <Linkedin
              fill={
                pathname === '/'
                  ? click
                    ? width > 1024
                      ? 'rgb(var(--customWhite-rgba))'
                      : 'rgb(var(--customBlue-rgba))'
                    : 'black'
                  : 'rgb(var(--customWhite-rgba))'
              }
              className={`scale-100 transition ease-in-out duration-300 hover:scale-[1.2] size-7.5  z-30`}
            />
          </a>
        </motion.div>

        <motion.div
          className={`w-0.5 h-32 ${
            pathname === '/'
              ? click
                ? 'bg-customBlue lg:bg-customWhite'
                : 'bg-black'
              : 'bg-customWhite'
          }`}
          initial={{ height: 0 }}
          animate={{ height: '8rem' }} // h-32
          transition={{ type: 'spring', duration: 1, delay: 0.8 }}
        />
      </div>
    </>
  )
}
