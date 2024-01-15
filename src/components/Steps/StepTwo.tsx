'use client'
import { useStep } from "@/hook/useStep"
import { StepOptions } from "../StepOtions"

import { useEffect, useState } from "react"
import { useData } from "@/hook/useData"
import { CardPlan } from "../CardPlan"
import { Switch } from "../ui/switch"
import { Button } from "../ui/button"


export function StepTwo() {
    const [stateSwitch, setStateSwitch] = useState<boolean>(false)

    const { setStep } = useStep()
    const { setPlanType, personal, setValueType } = useData()

    useEffect(() => {
        if (stateSwitch) {
            setValueType('Y')
        } else {
            setValueType('M')
        }
    }, [stateSwitch])

    return (
        <div className="flex gap-32 h-full">
            <StepOptions />
            <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex flex-col gap-12 ">
                    <div className="space-y-2">
                        <h1 className="font-bold  text-3xl">Select Plan</h1>
                        <p className="text-cool-gray">Please provide your name, email address, and phone number.</p>
                    </div>
                    <div className="flex gap-2">
                        <CardPlan image="icon-arcade.svg" title="Arcade" value={!stateSwitch ? "$9/mo" : "$90/yr"} />
                        <CardPlan image="icon-advanced.svg" title="Advanced" value={!stateSwitch ? "$12/mo" : "$120/yr"} />
                        <CardPlan image="icon-pro.svg" title="Pro" value={!stateSwitch ? "$15/mo" : "$150/yr"} />
                    </div>
                    <div className="flex gap-2 items-center justify-center text-sm ">
                        <strong className={`${stateSwitch ? 'text-cool-gray' : 'text-marine-blue'}`}>Monthly</strong>
                        <Switch onCheckedChange={setStateSwitch} checked={stateSwitch} className="data-[state=checked]:bg-marine-blue data-[state=unchecked]:bg-marine-blue" />
                        <strong className={`${!stateSwitch ? 'text-cool-gray' : 'text-marine-blue'}`}>Yearly</strong>
                    </div>
                </div>
                <div className="flex justify-between">
                    <Button className="w-24" variant={"ghost"} onClick={() => setStep(1)}>Go back</Button>
                    <Button className="w-24 bg-marine-blue hover:bg-marine-blue/90 ml-auto" onClick={() => setStep(3)}>Next Step</Button>
                </div>
            </div>
        </div >
    )
}