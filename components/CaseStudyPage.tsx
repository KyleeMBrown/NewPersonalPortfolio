import caseStudies from "@/data/caseStudies.json"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { Separator } from "./ui/separator"
import { CollapseItem } from "./CollapseItem"

type PageProps = {
  params: Promise<{ slug: string }>
}

const CaseStudyPage = async ({ params }: PageProps) => {

    const { slug } = await params
    const study = caseStudies[slug as keyof typeof caseStudies];

    const studySchema = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: study.title,
        description: study.description,
        author: {
            "@type": "Person",
            name: "Kylee Brown",
            url: "https://kyleebrown.vercel.app",
        },
        url: `https://kyleebrown.vercel.app/case-study/${slug}`,
    };


    return (
      <>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
        __html: JSON.stringify(studySchema).replace(/</g, "\u003c"),
        }}
    />
      <div className="w-full h-auto ">
        
          <Link href="/#work"><Button className="ml-5 mt-4"><ArrowLeft />Back</Button></Link>
          <div className="w-full p-10 max-[768px]:p-5">
              <div className="flex justify-between">
                  <div className="max-[768px]:text-sm">Case Study <span className="text-[#28D8A9]">|</span> {study.date}</div>
                  <Badge>
                      {study.status == "Live" && <span className="ml-px mr-1 size-1.5 rounded-full bg-green-500 animate-[pulse_1s_ease-in-out_infinite] shadow-[0_0_8px_3px_rgba(34,197,94,0.65)]" />}
                      {study.status == "In Progress" && <span className="ml-px mr-1 size-1.5 rounded-full bg-yellow-400 animate-[pulse_1s_ease-in-out_infinite] shadow-[0_0_8px_3px_rgba(250,204,21,0.65)]" />}
                      {study.status}
                  </Badge>
              </div>
              <h2 className="text-[4em] font-bold max-[768px]:text-[2em] max-[768px]:py-4">{study.title}</h2>
              <p className="mb-4">Role: {study.role}</p>
              <div className="flex gap-2 max-[768px]:flex-wrap">
                  {study.stack.map((badge) => (
                      <Badge variant='outline' key={badge}>{badge}</Badge>
                  ))}
              </div>
              <div className="mt-6 flex items-center gap-1 ">
                  <Link href={study.liveUrl} target="blank"><Button className=" px-6 py-5 uppercase bg-white! border border-[#28D8A9]">{study.linkTitle}<ArrowUpRight /></Button></Link>
                  <Link href={study.githubUrl} target="blank"><Button className="px-6 py-5 uppercase"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                  </svg>Github<ArrowUpRight /></Button>
                  </Link>
              </div>
              <Separator className="my-6" />
              <div className="w-full flex max-[768px]:flex-col max-[768px]:gap-4">
                  <div className="w-[40%] max-[380px]:w-full">
                        <h3 className="mb-4 capitalize">Key features</h3>
                        <div className="flex flex-wrap gap-2 pr-5 border-r border-r-gray-300 max-[380px]:border-r-0">
                        {study.keyFeatures.map((feature) => (
                            <Badge variant="outline" className="bg-white border-[#28D8A9] capitalize text-black py-4 rounded-sm! max-[768px]:text-[10px]" key={feature}>{feature}</Badge>
                        ))}
                        </div>
                  </div>
                  <div className="p-10 w-[60%] max-[768px]:w-full max-[768px]:p-2 max-[768px]:h-full h-[35vh] max-[768px]:overflow-y-auto  overflow-y-scroll">
                      <h2 className="text-[1.5em] uppercase font-bold">Overview</h2>
                      <br></br>
                      <p>{study.description}</p>
                        <br></br>
                      <h2 className="text-[1.5em] uppercase font-bold">Problem</h2>
                      <br></br>
                      <p>{study.problem}</p>
                       <br></br>
                      <h2 className="text-[1.5em] uppercase font-bold">Solution</h2>
                      <br></br>
                      <p>{study.solution}</p>
                  </div>
              </div>
              <div className="w-full my-15 max-[768px]:my-10">
                  <h2 className="text-[1.5em] uppercase font-bold">technical Challenges</h2>
                    <div>
                    {study.technicalChallenges.map((challenge) => (
                      <CollapseItem key={challenge.title} item={challenge} />
                    ))}
                    </div>
                  
              </div>
              <div className="w-full flex max-[768px]:flex-col max-[768px]:gap-6">
                  <div className="w-[50%] max-[768px]:w-full">
                        <h2 className="text-[1.5em] uppercase font-bold">Outcomes</h2>
                      <br></br>
                      <ul className="ml-[2.5em] flex flex-col gap-4 list-disc">
                          {study.outcomes.map((outcome) => (
                              <li key={outcome}>{outcome}</li>
                          ))}
                      </ul>
                  </div>
                  <div className="w-[50%] max-[768px]:w-full">
                        <h2 className="text-[1.5em] uppercase font-bold">What I Learned</h2>
                      <br></br>
                      <ul className="ml-[2.5em] flex flex-col gap-4 list-disc">
                          {study.lessonsLearned.map((lesson) => (
                              <li key={lesson}>{lesson}</li>
                          ))}
                      </ul>
                  </div>
              </div>
          </div>
    </div>
    </>
  )
}

export default CaseStudyPage