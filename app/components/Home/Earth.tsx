'use client'

import { Earth as EarthSVG, Moon } from '../../svg/AllSvg'
import { useEarthStore } from '@/app/store/earthClick'

export default function Earth() {
  const toggleClick = useEarthStore((s) => s.toggleClick)
  const click = useEarthStore((s) => s.click)
  return (
    <>
      <div
        className={`absolute ${
          click
            ? 'top-[90%] left-1/2 md:left-[80%] lg:left-[85%] lg:top-[85%]'
            : 'top-1/2 left-1/2'
        } z-40 pointer-events-none transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)]`}
      >
        <Moon
          width={click ? 30 : 50}
          className="pointer-events-none animate-[lune-transform_6s_linear_infinite] will-change-transform"
        />
      </div>
      <button
        className={`absolute ${
          click
            ? 'top-[90%] left-1/2 md:top-[90%] md:left-[80%] lg:top-[85%] lg:left-[85%] gap-0'
            : 'top-1/2 left-1/2 gap-4'
        } border-none outline-none bg-transparent cursor-pointer flex flex-col justify-center items-center -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)]`}
      >
        <EarthSVG
          width={click ? 80 : 150}
          height={click ? 80 : 150}
          onClick={toggleClick}
        />
        <span className={`text-[13px] ${click ? 'hidden' : 'block'}`}>
          click here
        </span>
      </button>
    </>
  )
}
