'use client'

import { StepFour } from '@/components/Steps/StepFour'
import { StepOne } from '@/components/Steps/StepOne'
import { StepThree } from '@/components/Steps/StepThree'
import { StepTwo } from '@/components/Steps/StepTwo'
import { useStep } from '@/hook/useStep'
import Image from 'next/image'

export default function Home() {
  const { step } = useStep()
  return (
    <main className="h-[80%] max-w-[1440px] w-full  mx-auto flex items-center justify-center ">
      <div className='bg-base bg-white bg-auto bg-no-repeat bg-left-almost-full h-[600px]  w-[900px]  m-10 p-4 shadow-lg rounded-[16px]'>
        {step === 1 ? <StepOne />
          : step === 2 ? <StepTwo />
            : step === 3 ? <StepThree />
              : <StepFour />
        }


        { }
      </div>
    </main >
  )
}
