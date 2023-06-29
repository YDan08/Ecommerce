import { Github } from 'lucide-react'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="flex items-center justify-around bg-slate-100 py-4 text-gray-700">
      <p>Desenvolvido por Daniel Yamashita</p>
      <Link href="https://github.com/YDan08/Ecommerce" className="flex gap-1" target="_blank">
        <Github />
        <span className="font-semibold">Repositório</span>
      </Link>
    </footer>
  )
}
