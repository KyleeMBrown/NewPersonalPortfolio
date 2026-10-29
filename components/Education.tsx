
import { Separator } from './ui/separator'
import { CardDescription } from './ui/card'
import Countdown from './Countdown'

const Education = () => {
  return (
      <div className='w-full h-[55vh] p-10 flex flex-col justify-center border-t'>
          <h2 className="text-[3em] pl-10 pt-0 pb-0">Education</h2>
          <div className="pl-10">
            <Separator className="my-6" />
            <div className="flex justify-between">
                <div>
                    <h2 className="text-[1.5em]">Southern New Hampshire University</h2>
                    <CardDescription>BS in Computer Science · Concentration in Software Engineering</CardDescription>
                </div>
                <div className="flex flex-col items-end gap-3">
                    <p>August 2022 - August 28 2027</p>
                        <Countdown/>
                    
                </div>
            </div>
        </div>
          
        </div>
  )
}

export default Education