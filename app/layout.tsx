import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kyleebrown.vercel.app"),

   verification: {
    google: "hgv3jUmikq65xlHuKk2IxMyVaC18qZrqZSQUqsImq54",
  },

  title: {
    default: "Kylee Brown | Software Engineer",
    template: "%s | Kylee Brown",
  },

  description:
    "Kylee Brown is a software engineer specializing in TypeScript, JavaScript, React, and Next.js. Explore software projects, full-stack applications, and experience building modern, scalable web solutions.",

  keywords: [
    "Kylee Brown",
    "Software Engineer",
    "Software Engineer Portfolio",
    "Junior Software Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Full-Stack Development",
  ],

  authors: [{ name: "Kylee Brown" }],
  creator: "Kylee Brown",

  openGraph: {
    type: "website",
    url: "https://kyleebrown.vercel.app",
    siteName: "Kylee Brown Portfolio",
    title: "Kylee Brown | Software Engineer",
    description:
      "Explore software engineering projects built with React, Next.js, TypeScript, Supabase, and modern web technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kylee Brown | Software Engineer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kylee Brown | Software Engineer",
    description:
      "Software engineer building modern web applications with React, Next.js, and TypeScript.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kylee Brown",
  url: "https://kyleebrown.vercel.app",
  jobTitle: "Software Engineer",
  description:
  "Software engineer specializing in modern web development and full-stack applications.",
  sameAs: [
  "https://github.com/KyleeMBrown",
  "https://www.linkedin.com/in/kylee-brown-7167b9274/",
  ],
  knowsAbout: [
  "Software Engineering",
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Python",
  "PostgreSQL",
  "Supabase",
  "Full-Stack Web Development",
  ],
};

export default function RootLayout({ children }:{children:ReactNode}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
     
      <body className="min-h-full flex flex-col">  
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\u003c"),
        }}
        />
          <Menu/>
        {children}
        <footer>
        <Footer />
        </footer>
        </body>
      
    </html>
  );
}
