import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { Badge } from "./ui/badge"
import { Menu } from "lucide-react"

const MobileMenu = () => {
  return (
    <div className="items-center justify-center hidden max-[768]:flex max-[768px]:fixed max-[768px]:z-9999 max-[768px]:top-4 max-[768px]:right-4">
      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button variant="outline" className="w-fit rounded-sm! border-none" />}
        >
          <Menu className="text-white"/>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Navigation</DropdownMenuLabel>
            <DropdownMenuItem><Link href="/#home">Home</Link></DropdownMenuItem>
        <DropdownMenuItem><Link href="/#work">Selected Work</Link></DropdownMenuItem>
         <DropdownMenuItem><Link href="/#experience">Experience</Link></DropdownMenuItem>
         <DropdownMenuItem><Link href="/#education">Education</Link></DropdownMenuItem>
         <DropdownMenuItem><Link href="/#skills">Skills</Link></DropdownMenuItem>
         <DropdownMenuItem><Link href="/#about">About</Link></DropdownMenuItem>
         <DropdownMenuItem><Link href="/#contact">Contact</Link></DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                       <DropdownMenuLabel>Socials</DropdownMenuLabel>
            <DropdownMenuItem><Link href="https://www.linkedin.com/in/kylee-brown-7167b9274/">LinkedIn</Link></DropdownMenuItem>
            <DropdownMenuItem><Link href="https://github.com/KyleeMBrown">GitHub</Link></DropdownMenuItem>
            
            <DropdownMenuItem disabled><Badge className="bg-transparent! text-black text-sm"> <span className="ml-px mr-1 size-1.5 rounded-full bg-green-500 animate-[pulse_1s_ease-in-out_infinite] shadow-[0_0_8px_3px_rgba(34,197,94,0.65)]" />Available</Badge></DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>

  )
}

export default MobileMenu