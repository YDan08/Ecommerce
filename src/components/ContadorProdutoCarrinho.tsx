"use client"
import { AppContext } from "@/context/AppContext"
import { MinusIcon, PlusIcon } from "lucide-react"
import { useContext } from "react"

interface ContadorProdutoCarrinhoProps {
	codigoProduto: number
	estoque?: number
}

export const ContadorProdutoCarrinho = ({
	estoque,
	codigoProduto,
}: ContadorProdutoCarrinhoProps) => {
	const { carrinho, handleProductDecrement, handleProductIncrement } =
		useContext(AppContext)
	return (
		<div className='border-t border-zinc-400 mt-8 mb-5 pt-4'>
			<h2 className='mb-3'>Quantidade</h2>

			<div className='mb-3 flex items-center text-center'>
				<button
					className='bg-gray-400 rounded-full p-1'
					onClick={() => handleProductDecrement(codigoProduto)}
				>
					<MinusIcon />
				</button>
				<p className='mx-5'>
					{
						carrinho?.filter(produto => produto.produto.codigo_produto === codigoProduto)[0]
							.quantidade
					}
				</p>
				<button
					className='bg-gray-400 rounded-full p-1'
					onClick={() => handleProductIncrement(codigoProduto)}
				>
					<PlusIcon />
				</button>
			</div>
			<h2 className='text-green-800'>Estoque: {estoque}</h2>
		</div>
	)
}

export default ContadorProdutoCarrinho
