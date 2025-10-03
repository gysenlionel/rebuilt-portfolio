'use client'

import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { Engine } from '@tsparticles/engine'
import { loadFull } from 'tsparticles'

import configDark from '../../config/particules-config'

export default function ParticuleComponent() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      // charge toutes les features
      await loadFull(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  if (!init) return null
  return (
    <div className="absolute inset-0 z-0">
      <Particles
        id="tsparticles"
        options={configDark}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  )
}
