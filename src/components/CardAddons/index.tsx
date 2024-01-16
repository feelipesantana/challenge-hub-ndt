import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { useData } from "@/hook/useData";

interface CardAddonsProps {
    title: string
    description: string
    value: string
}
export function CardAddons({ title, description, value }: CardAddonsProps) {
    const [checkCard, setCheckCard] = useState(false)
    const { setAddons } = useData()

    function handleAddons() {
        setAddons(title)
        setCheckCard(!checkCard)
    }

    return (
        <Card className={` ${checkCard ? ' border-marine-blue' : 'border-light-gray'} border h-20 flex items-center p-4 cursor-pointer`}
            onClick={handleAddons}>

            <div className="flex items-center justify-between w-full">
                <div className="flex items-center justify-start gap-6">
                    <Checkbox checked={checkCard} className="data-[state=checked]:bg-purplish-blue h-5 w-5 border-light-gray" value={title} />
                    <Label
                        htmlFor={title}
                        className="space-y-2"
                    >
                        <strong className="text-base font-medium text-marine-blue ">{title}</strong>
                        <p className="text-sm text-cool-gray font-normal"> {description}</p>
                    </Label>
                </div>
                <span className="text-xs text-purplish-blue ">{value}</span>
            </div>
        </Card>
    )
}