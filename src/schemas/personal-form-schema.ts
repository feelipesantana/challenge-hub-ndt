import { z } from "zod";

export const personalFormSchema = z.object({
    name:z.string().min(1),
    email: z.string().email("It must be a email!"),
    phoneNumber: z.string().min(1)
})


export type PersonalFormSchema = z.infer<typeof personalFormSchema>
