'use client'

import { create } from 'zustand'

type EarthState = {
  click: boolean
  setClick: (v: boolean) => void
  toggleClick: () => void
}

export const useEarthStore = create<EarthState>((set) => ({
  click: false,
  setClick: (v) => set({ click: v }),
  toggleClick: () => set((s) => ({ click: !s.click })),
}))
