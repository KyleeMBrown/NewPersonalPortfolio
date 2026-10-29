import { Badge } from './ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'

const Experience = () => {
  return (
       <div className='w-full h-screen p-10 flex flex-col justify-center border-t'>
          <h2 className="text-[3em] pl-10 pt-0 pb-0">Experience</h2>
          <div className="flex w-full p-10 gap-4">
              <Card className="w-[50%] ring-[#28D8A9]! ">
                <CardHeader className="flex justify-between">
                      <CardTitle className='text-[1.5em]'>Associate Supoport</CardTitle>
                      <Badge variant="outline" className="border-[#28D8A9]! text-[#28D8A9]!">Present</Badge>
                </CardHeader>
                <CardContent className="h-[30vh]">
                      <CardDescription>Dealer eProcess · Lisle, IL · Remote</CardDescription>
                      <div className="flex gap-1">
                          <Badge variant="default" className="bg-[#28D8A9]! text-white! mt-2 rounded-none">PHP</Badge>
                          <Badge variant="default" className="bg-[#28D8A9]! text-white! mt-2 rounded-none">SQL</Badge>
                          <Badge variant="default" className="bg-[#28D8A9]! text-white! mt-2 rounded-none">Hupspot</Badge>
                      </div>
                      <CardDescription className="py-4 text-black">
                        I provide Tier 1 IT support, helping users troubleshoot technical issues and resolve application problems.
                        </CardDescription>

                        <ul className="flex flex-col gap-2 text-black ml-2">
                            <li><span className="text-[#28D8A9]!">-</span> Troubleshoot hardware, software, network, and application issues.</li>
                            <li><span className="text-[#28D8A9]!">-</span> Diagnose problems and identify root causes.</li>
                            <li><span className="text-[#28D8A9]!">-</span> Assist with account access, software, and technical questions.</li>
                            <li><span className="text-[#28D8A9]!">-</span> Document solutions and work with teams to resolve issues.</li>
                      </ul>
                      
                  </CardContent>
                  <CardFooter className="w-full flex justify-end pt-2">
                     <CardDescription>April 1st 2024 - Now</CardDescription> 
                  </CardFooter>
              </Card>
              <Card className="w-[50%] ring-[#28D8A9]!">
                <CardHeader className="flex justify-between">
                      <CardTitle className='text-[1.5em]'>Frontend Developer</CardTitle>
                      <Badge variant="outline">Past</Badge>
                </CardHeader>
                <CardContent className="h-[30vh]">
                      <CardDescription>Harold Jean Louis Inc. · New York, NY · Remote</CardDescription>
                      <div className="flex gap-1">
                          <Badge variant="default" className="bg-[#28D8A9]! text-white! mt-2 rounded-none">Wordpress</Badge>
                          <Badge variant="default" className="bg-[#28D8A9]! text-white! mt-2 rounded-none">Figma</Badge>
                          <Badge variant="default" className="bg-[#28D8A9]! text-white! mt-2 rounded-none">Slack</Badge>
                      </div>
                      <CardDescription className="py-4 text-black">
                        I worked as a Frontend Developer Intern, helping build and improve web applications while collaborating with developers.
                        </CardDescription>

                        <ul className="flex flex-col gap-2 text-black ml-2">
                        <li><span className="text-[#28D8A9]!">-</span> Developed and maintained frontend components for web applications.</li>
                        <li><span className="text-[#28D8A9]!">-</span> Used JavaScript and frontend technologies to implement UI features.</li>
                        <li><span className="text-[#28D8A9]!">-</span> Collaborated with developers through daily standups and team discussions.</li>
                        <li><span className="text-[#28D8A9]!">-</span> Tested and debugged features to improve functionality and user experience.</li>
                        </ul>
                      
                  </CardContent>
                  <CardFooter className="w-full flex justify-end pt-2">
                     <CardDescription>Oct 2023 - Dec 2023</CardDescription> 
                  </CardFooter>
              </Card>
          </div>
      </div>
  )
}

export default Experience