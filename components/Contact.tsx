import { ArrowRight } from "lucide-react"
import ContactForm from "./ContactForm"
import { Button } from "./ui/button"
import Link from "next/link"
import { Card, CardDescription } from "./ui/card"
import { Badge } from "./ui/badge"


const Contact = () => {
  return (
    <div className='w-full h-screen p-10 flex flex-col justify-center border-t'>
        <h2 className="text-[3em] pl-10 pt-0 pb-0">Contact</h2>
          <div className="p-10 flex gap-4">
              <div className="w-[40%] p-10 pt-0 pl-0">
                  <p>Have a project in mind, an opportunity to discuss, or just want to connect?
                      <br></br><br></br>
                      I&apos;d love to hear from you! Feel free to reach out, and let&apos;s build something great
                      together.</p>
                <br></br>
                
                <Badge className="bg-white! pl-0 text-black text-sm"> <span className="ms-px size-1.25 rounded-full! bg-green-500 mr-1 animate-pulse" />Open To Work</Badge>
                  <br></br><br></br>
                  <Link href="https://www.linkedin.com/in/kylee-brown-7167b9274/"><Button className="bg-white! pl-0 text-[#28D8A9]! text-lg">Message me on LinkedIn<ArrowRight /></Button></Link>
              </div>
              <Card className="w-[60%] p-10">
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