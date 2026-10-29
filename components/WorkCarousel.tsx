import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from "./ui/badge"
import workData from "@/data/workData.json";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function WorkCarousel() {
  return (
    <div className="flex w-full items-center justify-center p-6 max-[768px]:py-20 max-[768px]:px-0">
      <Carousel
        opts={{
          align: "center",
        }}
        orientation="vertical"
        className="w-full"
      >
        <CarouselContent className="-mt-1 h-[65vh] max-[768px]:h-[57vh] p-4 max-[768px]:p-0">
          {workData.map((work, index) => (
            <CarouselItem key={index} className="basis-1/2 pt-1 ">
              <div className="p-1 ">
                    <Card className="h-[50vh]  max-[768px]:max-h-[38vh] max-[376px]:h-[54vh] max-[376px]:max-h-[54vh] relative overflow-hidden border-0 p-10 max-[768px]:p-6">
                    <div className="flex justify-between">
                    <CardTitle className="text-[2.5em] max-[768px]:text-[1.5em] font-bold">{work.title}</CardTitle>
                    <Badge variant="default" className="text-white bg-[#28D8A9] max-[768px]:text-[10px] uppercase">{work.status}</Badge>
                    </div>
                  <CardDescription className="max-[768px]:text-xs">{work.stack}</CardDescription>
                  <CardDescription className="max-[768px]:text-xs">{work.date}</CardDescription>
                  <CardDescription className="text-lg w-[70%] text-gray-600 max-[768px]:text-[12px] max-[768px]:w-full">{work.description}</CardDescription>
                  <div className="flex gap-1 mt-4 max-[768px]:mt-0.5">
                    <Link href={work.link} target="_blank"><Button className="bg-white! border-[#28D8A9]">{work.linkTitle}<ArrowUpRight /></Button></Link>
                    <Link href={work.github_link} target="_blank"><Button className="text-white!">Github<ArrowUpRight /></Button></Link>
                  </div>
                
                    <Link href={`/case-study/${work.slug}`}><Button className="bg-white!  absolute bottom-5 max-[768px]:text-xs max-[768px]:right-3 max-[768px]:bottom-3 right-5 border border-b-[#28D8A9] uppercase">Case Study <ArrowUpRight /></Button></Link>
             
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border border-black text-black! bg-white! rounded-[1em]! "/>
        <CarouselNext className="border border-black text-black! bg-white! rounded-[1em]! "/>
      </Carousel>
    </div>
  )
}
