import { useStep } from "@/hook/useStep"
import { StepOptions } from "../StepOptions"

import { useData } from "@/hook/useData"
import { CardPlan } from "../CardPlan"
import { Switch } from "../ui/switch"
import { Button } from "../ui/button"

export function StepTwo() {
    const { setStep } = useStep()
    const { setValueType, valueType } = useData()

    function handleSwitch() {
        if (valueType === 'M') {
            setValueType('Y')
        } else {
            setValueType('M')
        }
    }

    return (
        <div className="flex gap-12 h-full">
            <StepOptions />
            <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex flex-col gap-12 ">
                    <div className="space-y-2">
                        <h1 className="font-bold  text-3xl">Select Plan</h1>
                        <p className="text-cool-gray">You have the option of monthly of yearly billing.</p>
                    </div>
                    <div className="flex gap-6 justify-center">
                        <CardPlan image="icon-arcade.svg" title="Arcade" value={valueType === "M" ? 9 : 90} />
                        <CardPlan image="icon-advanced.svg" title="Advanced" value={valueType === "M" ? 12 : 120} />
                        <CardPlan image="icon-pro.svg" title="Pro" value={valueType === "M" ? 15 : 150} />
                    </div>
                    <div className="flex gap-2 items-center justify-center text-sm bg-magnolia p-3 rounded-md">
                        <strong className={`${valueType === "Y" ? 'text-cool-gray' : 'text-marine-blue'}`}>Monthly</strong>
                        <Switch defaultChecked={valueType === "M" ? false : true} onCheckedChange={handleSwitch} className="data-[state=checked]:bg-marine-blue data-[state=unchecked]:bg-marine-blue" />
                        <strong className={`${valueType === "M" ? 'text-cool-gray' : 'text-marine-blue'}`}>Yearly</strong>
                    </div>
                </div>
                <div className="flex justify-between">
                    <Button className="w-24 text-cool-gray transition duration-300 hover:text-marine-blue " variant={"ghost"} onClick={() => setStep(1)}>Go back</Button>
                    <Button className="w-24 bg-marine-blue hover:bg-marine-blue/80 ml-auto" onClick={() => setStep(3)}>Next Step</Button>
                </div>
            </div>
        </div >
    )
}