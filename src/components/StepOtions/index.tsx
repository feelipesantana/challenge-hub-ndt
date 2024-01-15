'use client'
import { useStep } from "@/hook/useStep";

export function StepOptions() {
    const { step } = useStep()
    return (
        <div className="flex  max-w-[274px] w-full p-8">
            <ul className="space-y-6">
                <li className="flex items-center gap-3">
                    <div className={`${step === 1 ? 'bg-light-blue text-marine-blue border-transparent' : 'border-white text-white bg-transparent'} w-8 h-8 border  font-bold rounded-full flex items-center justify-center`}>
                        1
                    </div>
                    <div className="">
                        <p className="text-xs text-light-gray ">STEP 1</p>
                        <span className="text-white text-sm font-bold tracking-wider">YOUR INFO</span>
                    </div>
                </li>
                <li className="flex items-center gap-3">
                    <div className={`${step === 2 && 'bg-light-blue text-blue-950 border-transparent'} w-8 h-8 border border-white text-white font-bold rounded-full flex items-center justify-center`}>
                        2
                    </div>
                    <div className="">
                        <p className="text-xs text-light-gray ">STEP 2</p>
                        <span className="text-white text-sm font-bold tracking-wider">SELECT PLAN</span>
                    </div>
                </li>
                <li className="flex items-center gap-3">
                    <div className={`${step === 3 && 'bg-light-blue text-blue-950 border-transparent'}  w-8 h-8 border border-white text-white font-bold rounded-full flex items-center justify-center`}>
                        3
                    </div>
                    <div className="">
                        <p className="text-xs text-light-gray ">STEP 3</p>
                        <span className="text-white text-sm font-bold tracking-wider">ADD-ONS</span>
                    </div>
                </li>
                <li className="flex items-center gap-3">
                    <div className={`${step === 4 && 'bg-light-blue text-blue-950 border-transparent'} w-8 h-8 border border-white text-white font-bold rounded-full flex items-center justify-center`}>
                        4
                    </div>
                    <div className="">
                        <p className="text-xs text-light-gray ">STEP 4</p>
                        <span className="text-white text-sm font-bold tracking-wider">SUMMARY</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}