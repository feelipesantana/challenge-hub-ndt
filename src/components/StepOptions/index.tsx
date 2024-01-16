import { Option } from "./Option";


export function StepOptions() {
    return (
        <div className="flex  max-w-[274px] w-full p-8">
            <ul className="space-y-6">
                <Option stepNumber={1} description="YOUR INFO" />
                <Option stepNumber={2} description="SELECT PLAN" />
                <Option stepNumber={3} description="ADD-ONS" />
                <Option stepNumber={4} description="SUMMARY" />
            </ul>
        </div>
    )
}