'use client'
import { PersonalFormSchema } from '@/schemas/personal-form-schema'
import { create } from 'zustand'

export type PlanTypeProps = 'Arcade'| 'Advanced' | 'Pro'
export type ValueTypeProps = 'M' | 'Y' 

export interface useDataProps{
    personal:PersonalFormSchema
    planType: PlanTypeProps
    valueType: ValueTypeProps
    setPersonal: (value: PersonalFormSchema) => void
    setPlanType: (value: PlanTypeProps) => void
    setValueType: (value: ValueTypeProps) => void 
}
export const useData = create<useDataProps>((set) => ({
    personal: {
        name: "",
        email: "",
        phoneNumber: ""
    },
    planType:'Arcade',
    valueType: 'M',

    setPersonal: (value) => set(({personal: value })),
    setPlanType: (value) => set(({planType: value })),
    setValueType: (value) => set(({valueType: value })),
}))