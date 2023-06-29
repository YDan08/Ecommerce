import { useCarrinho } from "@/context/AppContext"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"

export const NavBar = () => {
	const { carrinho } = useCarrinho()
	return (
		<nav className='flex justify-between px-10 py-5 bg-green-600 text-white'>
			<Link href={"/"}>
				<h1>Ecommerce</h1>
			</Link>

			<Link href={"/carrinho"}>
				<div className='flex'>
					<ShoppingCart />
					<h2 className='ml-2'>{carrinho?.length} itens</h2>
				</div>
			</Link>
		</nav>
	)
}

export default NavBar
