"use client"
import Link from "next/link"
import { useCarrinho } from "@/context/AppContext"
import { useContador } from "@/context/ProductContext"
import { Produto } from "@/types/produto"

interface BotaoAdicionarProps {
	produto: Produto
}

export const BotaoAdicionar = ({ produto }: BotaoAdicionarProps) => {
	const { handleAdd } = useCarrinho()
	const { quantidade } = useContador()

	return (
		<Link
			href='/carrinho'
			className='flex-1 py-3 text-center bg-green-600 rounded-lg text-white'
			onClick={() => handleAdd(produto, quantidade)}
		>
			Adicionar ao carrinho
		</Link>
	)
}
