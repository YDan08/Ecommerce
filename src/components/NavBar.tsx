import { useCarrinho } from "@/context/AppContext"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"

export const NavBar = () => {
	const { carrinho } = useCarrinho()
	return (
		<nav className='sticky flex justify-between px-10 py-5 bg-slate-100 text-gray-700'>
			<Link href={"/"}>
				<h1 className='font-semibold'>Ecommerce</h1>
			</Link>

			<Link href={"/carrinho"}>
				<div className='flex'>
					<ShoppingCart className='text-gray-500' />
					<h2 className='ml-2'>{carrinho?.length}</h2>
				</div>
			</Link>
		</nav>
	)
}

export default NavBar
