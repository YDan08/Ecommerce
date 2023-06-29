"use client"

import { useCarrinho } from "@/context/AppContext"
import { ListaProduto, Produto } from "@/types/produto"
import Image from "next/image"
import Link from "next/link"

interface ProdutoItemProps {
	produto: ListaProduto
}

const transformProduto = (produto: ListaProduto): Produto => {
	return {
		...produto,
		nome: produto.nome_produto,
		codigo_produto: Number(produto.codigo_produto),
	} as unknown as Produto
}

export const ProdutoItem = ({ produto }: ProdutoItemProps) => {
	const { handleAdd } = useCarrinho()

	const handleBuy = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()
		e.stopPropagation()
		handleAdd(transformProduto(produto), 1)
	}

	return (
		<Link href={`products/${produto.codigo_produto}`} key={produto.codigo_produto}>
			<div className='flex flex-col items-center rounded-2xl bg-white p-6'>
				<Image src={produto.imagem_produto} alt='foto' width={80} height={80} />
				<h1 className='my-3 text-lg font-semibold'>{produto.nome_produto}</h1>
				<button
					className='bg-green-600 py-2 px-7 rounded-lg text-white text-sm'
					onClick={handleBuy}
				>
					Adicionar ao carrinho
				</button>
			</div>
		</Link>
	)
}

export default ProdutoItem
