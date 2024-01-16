import { useEffect } from "react"
import { StepOptions } from "../StepOtions"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { useData } from "@/hook/useData"
import { CardAddons } from "../CardAddons"
import { useStep } from "@/hook/useStep"

export function StepThree() {
    const { setStep } = useStep()
    const { personal, planType, valueType, } = useData()
    useEffect(() => {
        console.log("VALUE", personal, planType, valueType)
    }, [])
    return (
        <div className="flex gap-32 h-full">
            <StepOptions />
            <div className="flex flex-col gap-12 flex-1 p-8">
                <div className="space-y-2">
                    <h1 className="font-bold text-3xl">Pick add-ons</h1>
                    <p className="text-cool-gray">Add-ons help enhance your gaming experience</p>
                </div>

                <div className="space-y-4">
                    <CardAddons title="Online service" description="Access to multiplayer games" value={`${valueType === 'M' ? '+$1/mo' : '$10/yr'}`} />
                    <CardAddons title="Larger storage" description="Extra 1TB cloud save" value={`${valueType === 'M' ? '+$2/mo' : '$20/yr'}`} />
                    <CardAddons title="Customizable profile" description="Custom theme on your profile" value={`${valueType === 'M' ? '+$2/mo' : '$20/yr'}`} />
                </div>
                <div className="flex justify-between">
                    <Button className="w-24 text-cool-gray" variant={"ghost"} onClick={() => setStep(2)}>Go back</Button>
                    <Button className="w-24 bg-marine-blue hover:bg-marine-blue/90 ml-auto" onClick={() => setStep(4)}>Next Step</Button>
                </div>
            </div>
        </div >
    )
}