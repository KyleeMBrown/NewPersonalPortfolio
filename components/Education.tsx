
import { Separator } from './ui/separator'
import { CardDescription } from './ui/card'
import Countdown from './Countdown'

const Education = () => {
  return (
      <div className='w-full h-[55vh] max-[768px]:h-full p-10 max-[768px]:p-5 max-[768px]:py-8  flex flex-col justify-center border-t'>
          <h2 className="text-[3em] pl-10 max-[768px]:pl-0 pt-0 pb-0">Education</h2>
          <div className="pl-10 max-[768px]:pl-0">
            <Separator className="my-6 max-[768px]:mt-3" />
            <div className="flex justify-between max-[768px]:flex-col max-[768px]:gap-2">
                <div>
                    <h2 className="text-[1.5em] max-[768px]:text-[1.35em] max-[768px]:mb-1">Southern New Hampshire University</h2>
                    <CardDescription>BS in Computer Science · Concentration in Software Engineering</CardDescription>
                </div>
                <div className="flex flex-col items-end max-[768px]:items-start gap-3 max-[768px]:gap-6">
                    <p className="max-[768px]:text-sm">August 2022 - August 28 2027</p>
                        <Countdown/>
                    
                </div>
            </div>
        </div>
          
        </div>
  )
}

export default Education