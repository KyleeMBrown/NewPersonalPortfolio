import CaseStudyPage from "@/components/CaseStudyPage"
import { Spinner } from "@/components/ui/spinner"
import { Metadata } from "next"
import { Suspense } from "react"

// page props
type PageProps = {
  params: Promise<{ slug: string }>
}

// generate static params
export async function generateStaticParams() {
  return [
    { slug: "kbs-kustomz" },
    { slug: "jarvis-bot" },
  ];
}

//metadata
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const studies: Record<
    string,
    { title: string; description: string }
  > = {
    "kbs-kustomz": {
      title: "KB's Kustomz V2 | Case Study",
      description:
        "Explore KB's Kustomz V2, a production-ready auto body shop website and custom CMS built with Next.js, Supabase, and Vercel.",
    },
    "jarvis-bot": {
      title: "Discord AI Bot | Case Study",
      description:
        "Explore a Python Discord bot integrating the OpenAI API to deliver AI-powered interactions within Discord communities.",
    },
  };

  const study = studies[slug];

  if (!study) {
    return {
      title: "Study Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl =
    `https://kyleebrown.vercel.app/case-study/${slug}`;

  return {
    title: study.title,
    description: study.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: study.title,
      description: study.description,
      url: canonicalUrl,
      type: "article",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const page = ({params}: PageProps) => {

    return (
        <>
            <Suspense fallback={<div className="w-full h-[91.5vh] flex items-center justify-center text-black uppercase"><Spinner /></div>}>
                <CaseStudyPage params={params} />
            </Suspense>
       </>
    )
}

export default page