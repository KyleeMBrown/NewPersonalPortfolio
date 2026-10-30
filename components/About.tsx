import React from 'react'
import { Separator } from './ui/separator'
import { CardDescription } from './ui/card'
import { Button } from './ui/button'
import { ArrowDown } from 'lucide-react'
import Link from 'next/link'
import { Badge } from './ui/badge'

const About = () => {
  return (
    <div className='w-full h-screen max-[768px]:h-full p-10 flex flex-col justify-center border-t'>
          <h2 className="text-[3em] pl-10 pt-0 pb-0 max-[768px]:pl-0">About</h2> 
          <div className="px-10 max-[768px]:p-0 max-[768px]:py-4 pt-2">
              <Separator /> 
          </div>
          <div className="flex p-10 max-[768px]:flex-col max-[768px]:p-0 max-[768px]:gap-2">
              <div className="w-[70%] max-[768px]:w-full">
                  <p className="leading-[2em] max-[768px]:text-sm">I&apos;m a Computer Science student and aspiring software engineer passionate about
                      building modern, user-focused applications. My experience spans full-stack web development,
                      API integration, and IT support.
                      <br></br><br></br>
                      Using technologies like Next.js, React, TypeScript, and Supabase, I build projects that solve real-world
                      problems, from client websites to SaaS applications. I&apos;m always exploring new technologies, strengthening my
                      engineering skills, and looking for opportunities to contribute to a collaborative team while growing as a
                      developer.</p>
                  <br></br>
                  <Link href="/#contact"><Button className="bg-white! pl-0 text-[#28D8A9]! text-lg">Contact Me<ArrowDown/></Button></Link>
              </div>
              <div className="w-[40%] max-[768px]:w-full flex justify-end max-[768px]:justify-start">
                <div className="flex flex-col max-[768px]:flex-row max-[768px]:flex-wrap max-[768px]:items-center gap-4">
                    <div className="flex flex-col gap-2 max-[768px]:w-[45%]">
                        <p className="text-md text-black">Focus</p>
                        <CardDescription className="text-sm">Software Engineering</CardDescription>
                    </div>
                    <div className="flex flex-col gap-2 max-[768px]:w-[45%]">
                        <p className="text-md text-black">Based In</p>
                        <CardDescription className="text-sm">IL, USA</CardDescription>
                    </div>
                    <div className="flex flex-col gap-2 max-[768px]:w-[45%]">
                        <p className="text-md text-black">Future Aspirations</p>
                        <CardDescription className="text-sm">Bioinformatics</CardDescription>
                      </div>
                      <Badge className="bg-white! text-black text-sm"> <span className="ml-px mr-1 size-1.5 rounded-full bg-green-500 animate-[pulse_1s_ease-in-out_infinite] shadow-[0_0_8px_3px_rgba(34,197,94,0.65)]" />Open To Relocation</Badge>
                </div>
              </div>
          </div>
         
    </div>
  )
}

export default About