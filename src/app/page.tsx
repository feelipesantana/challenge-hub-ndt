import { StepOne } from '@/components/StepOne'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-[80%] max-w-[1440px] w-full  mx-auto flex items-center justify-center    ">
      <div className='bg-base bg-white bg-auto bg-no-repeat bg-left-almost-full h-[600px]  w-full  m-10 p-4 shadow-lg rounded-[16px]'>
        <StepOne />
      </div>
    </main >
  )
}
