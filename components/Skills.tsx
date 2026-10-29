import React from 'react'
import { CardDescription } from './ui/card'

const Skills = () => {
  return (
    <div className='w-full h-screen p-10 flex flex-col justify-center border-t'>
        <h2 className="text-[3em] pl-10 pt-0 pb-0">Skills</h2>

        <div className="p-10 ">
                <div className="border-t border-b py-4 border-t-gray-300 border-b-gray-300">
                    <h3>Backend & Database Development</h3>
                    <CardDescription>Supabase · PostgreSQL · Authentication · SQL · Row Level Security · Server Actions · API integration</CardDescription>
                </div>
                <div className=" border-b py-4 border-b-gray-300">
                    <h3>Frontend Development</h3>
                    <CardDescription>React · Next.js · TypeScript · JavaScript · Tailwind CSS · Responsive UI · Component-based architecture</CardDescription>
                </div>
                <div className=" border-b py-4 border-b-gray-300">
                    <h3>AI & API Integration</h3>
                    <CardDescription>Python · GoogleAI API · Discord API · Third-party integrations · Request/response workflows</CardDescription>
                </div>
                <div className=" border-b py-4 border-b-gray-300">
                    <h3>Security & Authentication</h3>
                    <CardDescription>OAuth · Supabase Auth · Role-based access control · Database policies · Secure environment variables</CardDescription>
                </div>
                <div className=" border-b py-4 border-b-gray-300">
                    <h3>Technical Troubleshooting</h3>
                    <CardDescription>Browser DevTools · Network debugging · Root-cause analysis · Application testing · Incident documentation · Vendor coordination</CardDescription>
            </div>
        </div>
    </div>
  )
}

export default Skills