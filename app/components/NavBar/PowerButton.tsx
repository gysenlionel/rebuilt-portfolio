'use client'

import Link from 'next/link'
import { Rocket } from '../../svg/AllSvg'
import { usePathname } from 'next/navigation'

export default function PowerButton() {
  const pathname = usePathname()

  return (
    <>
      <Link href="/">
        <div
          className={`fixed top-8 ${
            pathname === '/work' ? 'left-[50.5%]' : 'left-1/2'
          } -translate-x-1/2 translate-y-0 bg-customWhite p-[0.3rem] rounded-full border-1 border-black size-10 flex flex-col justify-center items-center z-30 cursor-pointer hover:bg-[#e9e51866] hover:shadow-[0_0_8px_6px_#dde01833] [&>*:first-child]:no-underline [&>*:first-child]:text-inherit`}
        >
          <Rocket width={16} fill="#ccc" />
        </div>
        <p
          className={`${
            pathname === '/' ? 'text-black' : 'text-customWhite'
          } fixed top-20 ${
            pathname === '/work' ? 'left-[50.5%]' : 'left-1/2'
          } -translate-x-1/2 translate-y-0 text-[0.8rem] z-30`}
        >
          Home
        </p>
      </Link>
    </>
  )
}
