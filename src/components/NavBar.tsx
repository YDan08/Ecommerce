import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useCarrinho } from '@/context/AppContext'

export const NavBar = () => {
  const { carrinho } = useCarrinho()
  return (
    <nav className="sticky top-0 flex justify-between bg-slate-100 px-10 py-5 text-gray-700">
      <Link href="/">
        <h1 className="font-semibold">Ecommerce</h1>
      </Link>

      <Link href="/carrinho">
        <div className="flex">
          <ShoppingCart className="text-gray-500" />
          <h2 className="ml-2">{carrinho?.length}</h2>
        </div>
      </Link>
    </nav>
  )
}
