import CaseStudyPage from "@/components/CaseStudyPage"
import { Spinner } from "@/components/ui/spinner"

import { Suspense } from "react"

type PageProps = {
  params: Promise<{ slug: string }>
}

const page = ({params}: PageProps) => {
    
    return (
        <Suspense fallback={<div className="w-full h-[91.5vh] flex items-center justify-center text-black uppercase"><Spinner /></div>}>
            <CaseStudyPage params={params} />
        </Suspense>
       
    )
}

export default page