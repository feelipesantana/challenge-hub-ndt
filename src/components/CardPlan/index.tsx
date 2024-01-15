import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useState } from "react";
import { PlanTypeProps, useData } from "@/hook/useData";
interface CardPlanProps {
    title: PlanTypeProps
    image: string
    value: string
}

export function CardPlan({ title, image, value }: CardPlanProps) {

    const [select, setSelect] = useState(false)
    const { planType, setPlanType, valueType } = useData()
    function handlePlan() {
        setPlanType(title)
    }
    return (
        <Card className={`${planType === title && 'border-black'} border rounded-md cursor-pointer w-full`} onClick={handlePlan} >
            <CardHeader>
                <CardTitle><Image src={`/assets/icons/${image}`} width={20} height={20} alt="Image Title Card" /></CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-1">
                <strong className="text-marine-blue text-sm">{title}</strong>
                <span className="text-cool-gray text-xs">{value}</span>
                {valueType === "M" && <span className="text-xs text-marine-blue">2 month free </span>}
            </CardContent>
        </Card>
    )
}