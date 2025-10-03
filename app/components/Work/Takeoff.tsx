'use client'

import { Flame, Rocket } from '../../svg/AllSvg'
import { useEffect, useRef } from 'react'

export default function Takeoff({ numbers }: { numbers: number }) {
  const ref: any = useRef(null)
  const hiddenRef: any = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.pageYOffset
      let windowSize = window.innerHeight
      let bodyHeight = document.body.offsetHeight

      let diff = Math.max(bodyHeight - (scrollPosition + windowSize))

      let diffP = (diff * 100) / (bodyHeight - windowSize)

      if (ref.current) {
        ref.current.style.transform = `translateY(${-diffP}%)`
      }

      if (window.pageYOffset > 5) {
        if (hiddenRef.current) {
          hiddenRef.current.style.display = 'none'
        }
      } else {
        if (hiddenRef.current) {
          hiddenRef.current.style.display = 'block'
        }
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="hidden md:block md:relative">
      <div className="absolute top-0 right-28" ref={hiddenRef}>
        <Rocket width={50} fill="#ccc" className="rotate-180" />
      </div>
      <div
        className="fixed top-0 right-24 flex justify-center items-center flex-col"
        style={{ transform: 'translateY(-100%)' }}
        ref={ref}
      >
        {[...Array(numbers)].map((x, id) => {
          return <Flame key={id} width={20} />
        })}
        <Rocket width={50} fill="#ccc" className="rotate-180" />
      </div>
    </div>
  )
}
