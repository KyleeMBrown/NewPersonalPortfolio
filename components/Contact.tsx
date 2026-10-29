import { ArrowRight } from "lucide-react"
import ContactForm from "./ContactForm"
import { Button } from "./ui/button"
import Link from "next/link"
import { Card, CardDescription } from "./ui/card"
import { Badge } from "./ui/badge"


const Contact = () => {
  return (
    <div className='w-full h-screen max-[768px]:h-full p-10 max-[768px]:p-8  max-[380px]:p-4 flex flex-col justify-center border-t'>
        <h2 className="text-[3em] pl-10 pt-0 pb-0 max-[768px]:pl-0">Contact</h2>
          <div className="p-10 flex gap-4 max-[768px]:p-0 max-[768px]:flex-col">
              <div className="w-[40%] p-10 pt-0 pl-0 max-[768px]:w-full max-[768px]:p-0">
                  <p className="max-[768px]:text-sm">Have a project in mind, an opportunity to discuss, or just want to connect?
                      <br></br><br></br>
                      I&apos;d love to hear from you! Feel free to reach out, and let&apos;s build something great
                      together.</p>
                <br></br>
                
                <Badge className="bg-white! text-black text-sm"> <span className="ml-px mr-1 size-1.5 rounded-full bg-green-500 animate-[pulse_1s_ease-in-out_infinite] shadow-[0_0_8px_3px_rgba(34,197,94,0.65)]" />Open To Work</Badge>
                  <br></br><br></br>
                  <Link href="https://www.linkedin.com/in/kylee-brown-7167b9274/"><Button className="bg-white! pl-0 text-[#28D8A9]! text-lg">Message me on LinkedIn<ArrowRight /></Button></Link>
              </div>
              <Card className="w-[60%] max-[768px]:w-full p-10 max-[768px]:p-5">
                  <h2 className="text-[2em]">Let&apos;s Chat!</h2>
                  <CardDescription>Fill out the form below to send me a message!</CardDescription>
                  <br></br>
                  <ContactForm/>
              </Card>
              
        </div>
    </div>
  )
}

export default Contact