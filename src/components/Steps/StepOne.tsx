import { useStep } from "@/hook/useStep"
import { StepOptions } from "../StepOptions"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { useForm } from "react-hook-form"
import { PersonalFormSchema, personalFormSchema } from "@/schemas/personal-form-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useData } from "@/hook/useData"
import { normalizePhoneNumber } from "@/utils/mask"


export function StepOne() {
    const { setStep } = useStep()
    const { setPersonal, personal } = useData()
    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<PersonalFormSchema>({
        resolver: zodResolver(personalFormSchema)
    })
    async function handlePersonalForm(data: PersonalFormSchema) {
        if (data) {
            setPersonal(data)
            setStep(2)
        }
    }

    function handleInputChange(e: any) {
        let valueInputNumber = e.target.value
        setValue('phoneNumber', normalizePhoneNumber(valueInputNumber))
    }

    return (
        <div className="flex gap-12 h-full">
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
                            {errors.name && <span className="float-right text-red-600 text-xs ">This field is required</span>}
                            <Input className="h-10 font-medium placeholder:text-cool-gray" defaultValue={personal.name} placeholder="e.g. Stephen King" {...register('name')} />

                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="email" className="text-sm font-normal">Email Address</Label>
                            {errors.email && <span className="float-right text-red-600 text-xs ">This field is required</span>}
                            <Input type="email" className="h-10 font-medium placeholder:text-cool-gray " defaultValue={personal.email} placeholder="e.g. stephanking@lorem.com" {...register('email')} />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="phoneNumber" className="text-sm font-normal">Phone Number</Label>
                            {errors.phoneNumber && <span className="float-right text-red-600 text-xs ">This field is required</span>}
                            <Input
                                className="h-10 font-medium placeholder:text-cool-gray "
                                defaultValue={personal.phoneNumber} placeholder="e.g. +1 234 567 890" {...register('phoneNumber')}
                                onChangeCapture={(e) => handleInputChange(e)}
                            />

                        </div>
                    </div>

                    <Button className="w-24 bg-marine-blue hover:bg-marine-blue/80 ml-auto" type="submit" >Next Step</Button>

                </form>

            </div>
        </div>
    )
}