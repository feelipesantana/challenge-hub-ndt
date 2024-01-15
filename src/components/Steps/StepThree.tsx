import { useEffect } from "react"
import { StepOptions } from "../StepOtions"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { useData } from "@/hook/useData"

export function StepThree() {
    const { personal, planType, valueType } = useData()
    useEffect(() => {
        console.log("VALUE", personal, planType, valueType)
    }, [])
    return (
        <div>Step 3</div>
    )
}