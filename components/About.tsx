import React from 'react'
import { Separator } from './ui/separator'
import { CardDescription } from './ui/card'
import { Button } from './ui/button'
import { ArrowDown } from 'lucide-react'
import Link from 'next/link'
import { Badge } from './ui/badge'

const About = () => {
  return (
    <div className='w-full h-screen p-10 flex flex-col justify-center border-t'>
          <h2 className="text-[3em] pl-10 pt-0 pb-0">About</h2> 
          <div className="px-10 pt-2">
              <Separator /> 
          </div>
          <div className="flex p-10">
              <div className="w-[70%]">
                  <p className="leading-[2em]">I&apos;m a Computer Science student and aspiring software engineer passionate about
                      building modern, user-focused applications. My experience spans full-stack web development, cloud technologies,
                      API integration, and IT support.
                      <br></br><br></br>
                      Using technologies like Next.js, React, TypeScript, and Supabase, I build projects that solve real-world
                      problems, from client websites to SaaS applications. I&apos;m always exploring new technologies, strengthening my
                      engineering skills, and looking for opportunities to contribute to a collaborative team while growing as a
                      developer.</p>
                  <br></br>
                  <Link href="/#contact"><Button className="bg-white! pl-0 text-[#28D8A9]! text-lg">Contact Me<ArrowDown/></Button></Link>
              </div>
              <div className="w-[40%] flex justify-end">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <p className="text-md text-black">Focus</p>
                        <CardDescription className="text-sm">Software Engineering</CardDescription>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-md text-black">Based In</p>
                        <CardDescription className="text-sm">IL, USA</CardDescription>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-md text-black">Future Aspirations</p>
                        <CardDescription className="text-sm">Bioinformatics</CardDescription>
                      </div>
                      <Badge className="bg-white! pl-0 text-black text-sm"> <span className="ms-px size-1.25 rounded-full! bg-green-500 mr-1 animate-pulse" />Open To Work</Badge>
                </div>
              </div>
          </div>
         
    </div>
  )
}

export default About