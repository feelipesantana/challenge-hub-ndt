'use client'
import { PersonalFormSchema } from '@/schemas/personal-form-schema'
import { create } from 'zustand'

export type PlanTypeProps = 'Arcade'| 'Advanced' | 'Pro'
export type ValueTypeProps = 'M' | 'Y' 

export interface useDataProps{
    personal:PersonalFormSchema
    planType: PlanTypeProps
    valueType: ValueTypeProps
    addons: string[]
    setPersonal: (value: PersonalFormSchema) => void
    setPlanType: (value: PlanTypeProps) => void
    setValueType: (value: ValueTypeProps) => void 
    setAddons: (value: string) => void
}
export const useData = create<useDataProps>((set) => ({
    personal: {
        name: "",
        email: "",
        phoneNumber: ""
    },
    planType:'Arcade',
    valueType: 'M',
    addons: [],
    setPersonal: (value) => set(({personal: value })),
    setPlanType: (value) => set(({planType: value })),
    setValueType: (value) => set(({valueType: value })),
    setAddons: (value) => set((state) => {
        const verifyValue = state.addons.filter(data => value === data)
        if (verifyValue.length > 0) {
            const newAddons = state.addons.filter(data => data !== value);
            return { addons: newAddons };
        } else {
            return { addons: [...state.addons, value] };
        }
    })
}))