'use client'
import { create } from 'zustand'
interface useStepProps{
    step: number
    setStep: (value: number) => void 
}
export const useStep = create<useStepProps>((set) => ({
    step: 1,
    setStep: (value) => set(({ step: value })),
  
}))