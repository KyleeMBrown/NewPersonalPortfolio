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
    <div className="flex w-full items-center justify-center p-6">
      <Carousel
        opts={{
          align: "center",
        }}
        orientation="vertical"
        className="w-full"
      >
        <CarouselContent className="-mt-1 h-[65vh] p-4">
          {workData.map((work, index) => (
            <CarouselItem key={index} className="basis-1/2 pt-1">
              <div className="p-1">
                    <Card className="h-[50vh] relative overflow-hidden border-0 p-10">
                    <div className="flex justify-between">
                    <CardTitle className="text-[2.5em] font-bold">{work.title}</CardTitle>
                    <Badge variant="default" className="text-white bg-[#28D8A9] uppercase">{work.status}</Badge>
                    </div>
                  <CardDescription>{work.stack}</CardDescription>
                  <CardDescription>{work.date}</CardDescription>
                  <CardDescription className="text-lg w-[70%] text-gray-600">{work.description}</CardDescription>
                  <div className="flex gap-1 mt-4">
                    <Link href={work.link} target="_blank"><Button className="bg-white! border-[#28D8A9]">{work.linkTitle}<ArrowUpRight /></Button></Link>
                    <Link href={work.github_link} target="_blank"><Button className="text-white!">Github<ArrowUpRight /></Button></Link>
                  </div>
                
                    <Link href={`/case-study/${work.slug}`}><Button className="bg-white! absolute bottom-5 right-5 border border-b-[#28D8A9] uppercase">Case Study <ArrowUpRight /></Button></Link>
             
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
