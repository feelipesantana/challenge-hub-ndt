import { useData } from "@/hook/useData"
import { StepOptions } from "../StepOptions"
import { Button } from "../ui/button"

import { useStep } from "@/hook/useStep"
import { Separator } from "../ui/separator"
import { useEffect, useState } from "react"

export function StepFour() {
    const { addons, plan, valueType } = useData()
    const { setStep } = useStep()
    const [total, setTotal] = useState<number>()

    useEffect(() => {
        const totalAddons = addons.reduce((total, addon) => total + (addon.amount || 0), 0);

        setTotal(totalAddons + plan.amount)
    }, [])
    return (
        <div className="flex gap-12 h-full">
            <StepOptions />
            <div className="flex flex-col justify-between gap-12 flex-1 p-8">
                <div className="flex flex-col gap-12">
                    <div className="space-y-2">
                        <h1 className="font-bold text-3xl">Finishing up</h1>
                        <p className="text-cool-gray">Double-check everything looks OK before confirming</p>
                    </div>

                    <div className=" bg-alabaster p-4 rounded-md">
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col items-start gap-0">
                                <span className="font-medium">{plan.item} {valueType === "M" ? '(Monthly)' : '(Yearly)'}</span>
                                <Button variant={"link"} onClick={() => setStep(2)} className=" h-6 inline-block text-sm font-medium p-0 underline text-cool-gray hover:text-pastel-blue">
                                    Change
                                </Button>
                            </div>
                            <strong className="">${plan.amount} {valueType === "M" ? '/mo' : '/yr'}</strong>
                        </div>

                        <Separator className="my-6" />

                        <ul className="flex flex-col space-y-2 ">
                            {addons &&
                                addons.map(res => {
                                    return (
                                        <li key={res.title} className="flex items-center justify-between w-full ">
                                            <span className="text-cool-gray text-sm">{res.title}</span>
                                            <span className=" text-xs">+ ${res.amount} {valueType === 'M' ? '/mo' : '/yr'}</span>
                                        </li>
                                    )
                                })

                            }
                        </ul>

                        <div className="flex justify-between items-center mt-10">
                            <span className="text-cool-gray text-sm">Total {valueType === 'M' ? '(Per Month)' : '(Per Year)'}</span>
                            <span className="text-lg text-purplish-blue font-bold">${total}{valueType === 'M' ? '/mo' : '/yr'}</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <Button className="w-24 text-cool-gray transition duration-300 hover:text-marine-blue" variant={"ghost"} onClick={() => setStep(3)}>Go back</Button>
                    <Button className="w-24 bg-marine-blue transition ease-in-out duration-300 active:bg-purplish-blue hover:bg-pastel-blue ml-auto" onClick={() => setStep(0)}>Confirm</Button>
                </div>
            </div>
        </div >
    )
}