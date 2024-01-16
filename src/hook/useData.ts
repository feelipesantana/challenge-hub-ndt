'use client'
import { PersonalFormSchema } from '@/schemas/personal-form-schema'
import { create } from 'zustand'

export type PlanType =  'Arcade'| 'Advanced' | 'Pro'
export type ValueTypeProps = 'M' | 'Y' 

export interface PlanProps{
    item: PlanType
    amount: number
}

export interface AddonsProps{
    title?:string,
    amount?:number
}

export interface UseDataProps{
    personal:PersonalFormSchema
    plan: PlanProps
    valueType: ValueTypeProps
    addons: AddonsProps[]

    setPersonal: (value: PersonalFormSchema) => void
    setPlan: (value: PlanProps) => void
    setValueType: (value: ValueTypeProps) => void 
    setAddons: (value: AddonsProps[]) => void
}
export const useData = create<UseDataProps>((set) => ({
    personal: {
        name: "",
        email: "",
        phoneNumber: ""
    },
    plan:{
        item: 'Arcade',
        amount: 9
    },
    valueType: 'M',
    addons: [
        
    ],
    setPersonal: (value) => set(({personal: value })),
    setPlan: (value) => set(({plan: value })),
    setValueType: (value) => set(({valueType: value })),
    
    setAddons: (value) => set((state) => {
        
        const updatedAddons = value.reduce((acc, addon) => {
            const existingAddon = state.addons.find(data => data.title === addon.title);

            if (existingAddon) {
                acc = acc.filter(data => data.title !== addon.title);
            }else{
                acc.push(addon);
            }
            return acc;
        }, state.addons);

        return { addons: updatedAddons };
       
    })
}))