'use client'

import { Github, Linkedin } from '../../../app/svg/AllSvg'
import { motion } from 'framer-motion'

export default function SocialMobile() {
  return (
    <div className="flex items-center justify-center relative gap-4 bottom-16 z-30 md:hidden">
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
        <a
          href="https://github.com/gysenlionel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github
            fill={'rgb(var(--customWhite-rgba))'}
            className="scale-100 transition ease-in-out duration-300 hover:scale-[1.2] size-7.5"
          />
        </a>
      </motion.div>

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
        <a
          href="https://www.linkedin.com/in/lionel-gysen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin
            fill={'rgb(var(--customWhite-rgba))'}
            className="scale-100 transition ease-in-out duration-300 hover:scale-[1.2] size-7.5"
          />
        </a>
      </motion.div>
    </div>
  )
}
