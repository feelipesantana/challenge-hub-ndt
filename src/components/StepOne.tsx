import { StepOptions } from "./StepOtions"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export function StepOne() {
    return (
        <div className="flex gap-32 h-full">
            <StepOptions step={1} />
            <div className="flex flex-col gap-12 flex-1 p-8">
                <div className="space-y-2">
                    <h1 className="font-bold  text-3xl">Personal info</h1>
                    <p className="text-cool-gray">Please provide your name, email address, and phone number.</p>
                </div>
                <form action="" className="flex flex-col justify-between  h-full w-full">
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <Label htmlFor="name" className="text-sm font-normal">Name</Label>
                            <Input className="h-10 font-medium placeholder:text-cool-grayx " placeholder="e.g. Stephen King" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="name" className="text-sm font-normal">Email Address</Label>
                            <Input className="h-10 font-medium placeholder:text-cool-grayx " placeholder="e.g. stephanking@lorem.com" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="name" className="text-sm font-normal">Phone Number</Label>
                            <Input className="h-10 font-medium placeholder:text-cool-grayx " placeholder="e.g. +1 234 567 890" />
                        </div>
                    </div>

                    <Button className="w-24 bg-marine-blue hover:bg-marine-blue/90 ml-auto">Next Step</Button>

                </form>

            </div>
        </div>
    )
}