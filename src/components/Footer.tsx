import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-around gap-4 bg-slate-100 py-4 text-gray-700 sm:flex-row sm:justify-center">
      <p className="text-sm sm:text-base">Desenvolvido por Daniel Yamashita</p>
      <div className="flex gap-x-4">
        <Link href="https://github.com/YDan08/Ecommerce" className="flex gap-1" target="_blank">
          <Github />
        </Link>
        <Link href="https://www.linkedin.com/in/daniel-yamashita-35b742208/">
          <Linkedin />
        </Link>
      </div>
    </footer>
  )
}
