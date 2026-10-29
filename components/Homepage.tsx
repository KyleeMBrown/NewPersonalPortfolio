"use client"
import Link from 'next/link';
import { Button } from './ui/button'
import { ArrowDownToLine } from 'lucide-react'
import { CodeBlockComponent } from './CodeBlockComponent';


const Homepage = () => {
  return (
    <div className="w-full h-full flex gap-4 max-[768px]:flex-col">
          <div className="w-[90%] p-15 max-[768px]: max-[768px]:w-full h-[92vh] max-[768px]:h-auto text-black flex items-center justify-center ">
              <div className="flex flex-col gap-[1.5em]">
                  <h2 className="text-[6em] max-[768px]:text-[2.5em] capitalize leading-[0.85em] font-bold">From <span className="text-[#28D8A9]">idea</span> to implementation.</h2>
                  <h2 className="text-[4em] max-[768px]:text-[1.5em] capitalize leading-[0.85em] font-bold">Software Engineer</h2>
                  <h3 className="max-[768px]:text-sm max-[768px]:w-68"> Full-Stack Web Development · React · Next.js · TypeScript · Python</h3>
                  
                  <div className="flex gap-[1em] ">
                    <Link href="/#work"><Button className="text-[1em] px-4 py-4 bg-white! border-[#28D8A9]" variant='outline'>View Work</Button></Link>
                    <Link href="/Resume.pdf" download="KyleeBrownResume.pdf">
                      <Button className="px-4 py-4 text-[1em]">
                        <ArrowDownToLine/>Download Resume
                      </Button>
                    </Link>
                  </div>
              </div>
          </div>
          <div className="w-full p-15 pl-0 max-[768px]:p-5 max-[768px]:pt-0 flex items-center justify-center">
              <CodeBlockComponent/>
          </div>
    </div>
  )
}

export default Homepage