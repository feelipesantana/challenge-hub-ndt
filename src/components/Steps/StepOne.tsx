'use client'
import { useStep } from "@/hook/useStep"
import { StepOptions } from "../StepOtions"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { useForm } from "react-hook-form"
import { PersonalFormSchema, personalFormSchema } from "@/schemas/personal-form-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useData } from "@/hook/useData"


export function StepOne() {
    const { setStep } = useStep()
    const { setPersonal } = useData()
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<PersonalFormSchema>({
        resolver: zodResolver(personalFormSchema)
    })

    async function handlePersonalForm(data: PersonalFormSchema) {
        if (data) {
            setPersonal(data)
            setStep(2)
        }
    }
    return (
        <div className="flex gap-32 h-full">
            <StepOptions />
            <div className="flex flex-col gap-12 flex-1 p-8">
                <div className="space-y-2">
                    <h1 className="font-bold  text-3xl">Personal info</h1>
                    <p className="text-cool-gray">Please provide your name, email address, and phone number.</p>
                </div>
                <form action="" className="flex flex-col justify-between  h-full w-full" onSubmit={handleSubmit(handlePersonalForm)}>
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <Label htmlFor="name" className="text-sm font-normal">Name</Label>
                            <Input className="h-10 font-medium placeholder:text-cool-gray " placeholder="e.g. Stephen King" {...register('name')} />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="email" className="text-sm font-normal">Email Address</Label>
                            <Input type="email" className="h-10 font-medium placeholder:text-cool-gray " placeholder="e.g. stephanking@lorem.com" {...register('email')} />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="phoneNumber" className="text-sm font-normal">Phone Number</Label>
                            <Input className="h-10 font-medium placeholder:text-cool-gray " placeholder="e.g. +1 234 567 890" {...register('phoneNumber')} />
                        </div>
                    </div>

                    <Button className="w-24 bg-marine-blue hover:bg-marine-blue/90 ml-auto" type="submit" >Next Step</Button>

                </form>

            </div>
        </div>
    )
}