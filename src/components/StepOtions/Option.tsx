'use client'
import { useStep } from "@/hook/useStep"
interface OptionProps {
    stepNumber: number
    description: string
}
export function Option({ stepNumber, description }: OptionProps) {
    const { step } = useStep()

    return (
        <li className="flex items-center gap-3">
            <div className={`${step === stepNumber ? 'bg-light-blue text-marine-blue border-transparent' : 'border-white text-white bg-transparent'} w-8 h-8 border  font-bold rounded-full flex items-center justify-center`}>
                {stepNumber}
            </div>
            <div className="">
                <p className="text-xs text-light-gray ">STEP {stepNumber}</p>
                <span className="text-white text-sm font-bold tracking-wider">{description}</span>
            </div>
        </li>
    )
}