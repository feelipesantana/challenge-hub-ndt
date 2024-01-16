import { useData } from "@/hook/useData"
import { StepOptions } from "../StepOtions"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

export function StepFour() {
    const { addons } = useData()
    console.log("ADDONS", addons)
    return (
        <div>Step 4</div>
    )
}