import CaseStudyPage from "@/components/CaseStudyPage"
import { Spinner } from "@/components/ui/spinner"
import { Metadata } from "next"
import caseStudies from "@/data/caseStudies.json"

import { Suspense } from "react"

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
        params,
        }: PageProps): Promise<Metadata> {
        const { slug } = await params;

        const studies: Record<string, { title: string; description: string }> = {
            "kbs-kustomz": {
            title: "KB's Kustomz V2 | Software Project",
            description:
                "Explore KB's Kustomz V2, a production-ready auto body shop website and custom CMS built with Next.js, Supabase, and Vercel.",
            },
            "jarvis-bot": {
            title: "Discord AI Bot | Software Project",
            description:
                "Explore a Python Discord bot integrating the OpenAI API to deliver AI-powered interactions within Discord communities.",
            },
        };

        const study = studies[slug];

        if (!study) {
            return {
            title: "Study Not Found",
            description: "Explore software engineering studies by Kylee Brown.",
            };
        }

        return {
            title: study.title,
            description: study.description,
            openGraph: {
            title: study.title,
            description: study.description,
            type: "article",
            },
        };
    }

const page = async({params}: PageProps) => {

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
            url: "https://yourdomain.com",
        },
        url: `https://yourdomain.com/projects/${slug}`,
    };

    return (
        <>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
        __html: JSON.stringify(studySchema).replace(/</g, "\u003c"),
        }}
        />
            <Suspense fallback={<div className="w-full h-[91.5vh] flex items-center justify-center text-black uppercase"><Spinner /></div>}>
                <CaseStudyPage params={params} />
            </Suspense>
       </>
    )
}

export default page