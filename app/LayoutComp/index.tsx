'use client'

import { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import NavBar from '../components/NavBar'
import PowerButton from '../components/NavBar/PowerButton'
import { usePathname } from 'next/navigation'

export default function LayoutComponent({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [pathname])
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <PowerButton />
          <NavBar />
          {children}
        </>
      )}
    </>
  )
}
