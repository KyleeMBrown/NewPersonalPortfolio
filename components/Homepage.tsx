"use client"
import Link from 'next/link';
import { Button } from './ui/button'
import { ArrowDownToLine } from 'lucide-react'
import { Badge } from './ui/badge';
import { CodeBlockComponent } from './CodeBlockComponent';


const Homepage = () => {
  return (
    <div className="w-full h-full flex gap-4">
          <div className="w-[90%] p-15 h-[92vh] text-black flex items-center justify-center bg-pink-">
              <div className="flex flex-col gap-[1.5em]">
                  <h2 className="text-[6em] capitalize leading-[0.85em] font-bold">From <span className="text-[#28D8A9]">idea</span> to implementation.</h2>
              <h2 className="text-[4em] capitalize leading-[0.85em] font-bold">Software Engineer</h2>
                  <h3 > Full-Stack Web Development · React · Next.js · TypeScript · Python</h3>
                  
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
        <div className="w-full p-15 pl-0 flex items-center justify-center">
            <CodeBlockComponent/>
        </div>
    </div>
  )
}

export default Homepage