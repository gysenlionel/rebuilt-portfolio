'use client'

import { useEarthStore } from '@/app/store/earthClick'
import Earth from './Earth'
import Name from './Name'
import Intro from './Intro'
import Planets from './Planets'

export default function HomeComponent() {
  const click = useEarthStore((s) => s.click)
  return (
    <>
      <div className="p-8">
        <Name />
        <Earth />
      </div>
      {click && <Intro />}
      <Planets />
    </>
  )
}
