import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useEffect, useState } from "react";
import { PlanType, useData } from "@/hook/useData";
interface CardPlanProps {
    title: PlanType
    image: string
    value: number
}

export function CardPlan({ title, image, value }: CardPlanProps) {
    const { plan, setPlan, valueType } = useData()

    function handlePlan() {
        setPlan({ item: title, amount: value })
    }

    useEffect(() => {
        if (plan.item === title) {
            setPlan({ item: title, amount: value })
        }
    }, [valueType])

    return (
        <Card
            className={`${plan.item === title ? 'border-marine-blue' : 'border-light-gray'} 
        border rounded-md cursor-pointer w-full h-[180px] flex flex-col justify-between 
        transition duration-300 hover:border-marine-blue`}
            onClick={handlePlan}
        >
            <CardHeader>
                <CardTitle><Image src={`/assets/icons/${image}`} width={40} height={40} alt="Image Title Card" /></CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-1">
                <strong className="text-marine-blue text-sm">{title} </strong>
                <span className="text-cool-gray text-xs">${value}{valueType === "M" ? '/mo' : '/yr'}</span>
                {valueType === "Y" && <span className="text-xs text-marine-blue">2 month free </span>}
            </CardContent>
        </Card>
    )
}