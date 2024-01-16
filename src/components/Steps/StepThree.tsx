import { StepOptions } from "../StepOptions"
import { Button } from "../ui/button"

import { useData } from "@/hook/useData"
import { CardAddons } from "../CardAddons"
import { useStep } from "@/hook/useStep"

export function StepThree() {
    const { setStep } = useStep()
    const { valueType, } = useData()
    return (
        <div className="flex gap-12 h-full">
            <StepOptions />
            <div className="flex flex-col flex-1 p-8 justify-between">
                <div className="flex flex-col gap-12 ">
                    <div className="space-y-2">
                        <h1 className="font-bold text-3xl">Pick add-ons</h1>
                        <p className="text-cool-gray">Add-ons help enhance your gaming experience</p>
                    </div>

                    <div className="space-y-4">
                        <CardAddons title="Online service" description="Access to multiplayer games" value={valueType === 'M' ? 1 : 10} />
                        <CardAddons title="Larger storage" description="Extra 1TB cloud save" value={valueType === 'M' ? 2 : 20} />
                        <CardAddons title="Customizable profile" description="Custom theme on your profile" value={valueType === 'M' ? 2 : 20} />
                    </div>
                </div>
                <div className="flex justify-between">
                    <Button className="w-24 text-cool-gray transition duration-300 hover:text-marine-blue" variant={"ghost"} onClick={() => setStep(2)}>Go back</Button>
                    <Button className="w-24 bg-marine-blue hover:bg-marine-blue/80 ml-auto" onClick={() => setStep(4)}>Next Step</Button>
                </div>
            </div>
        </div >
    )
}