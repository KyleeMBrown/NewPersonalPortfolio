import Link from 'next/link'

import Contact from './Contact'

const Footer = () => {
    return (
        <div>
            <span id="contact"></span>
            <Contact/>
        <div className="w-full py-4 px-6 flex text-gray-500 justify-between items-center border-t border-t-gray-300">
          <p>© 2026 Kylee Brown</p>
          <div className='flex gap-2 font-semibold '>
            <Link href="https://github.com/KyleeMBrown">GitHub</Link>
            <Link href="https://www.linkedin.com/in/kylee-brown-7167b9274/">LinkedIn</Link>
          </div>
          
        </div>
      </div>
    
  )
}

export default Footer