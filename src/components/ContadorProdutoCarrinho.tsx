"use client"
import { useCarrinho } from "@/context/AppContext"
import { MinusIcon, PlusIcon } from "lucide-react"

interface ContadorProdutoCarrinhoProps {
	codigoProduto: number
	estoque?: number
}

export const ContadorProdutoCarrinho = ({
	estoque,
	codigoProduto,
}: ContadorProdutoCarrinhoProps) => {
	const { carrinho, handleProductDecrement, handleProductIncrement } = useCarrinho()
	const quantidade = carrinho?.filter(
		produto => produto.produto.codigo_produto === codigoProduto
	)[0].quantidade
	return (
		<div className='mt-8 mb-5 pt-4 flex flex-col justify-center items-center'>
			{quantidade && estoque && (
				<div className='mb-3 flex items-center text-center'>
					<button
						className='bg-indigo-100 rounded-md py-1 px-2 text-indigo-800'
						onClick={() => handleProductDecrement(codigoProduto)}
					>
						<MinusIcon width={16} />
					</button>
					<p className='mx-5'>{quantidade}</p>
					<button
						className='bg-indigo-100 rounded-md py-1 px-2 text-indigo-800 disabled:opacity-25'
						onClick={() => handleProductIncrement(codigoProduto)}
						disabled={estoque <= quantidade}
					>
						<PlusIcon width={16} />
					</button>
				</div>
			)}
		</div>
	)
}

export default ContadorProdutoCarrinho
