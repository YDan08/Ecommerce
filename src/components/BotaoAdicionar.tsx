"use client"
import { AppContext } from "@/context/AppContext"
import { ProductContext } from "@/context/ProductContext"
import { Produto } from "@/types/produto"
import Link from "next/link"

import { useContext } from "react"

interface BotaoAdicionarProps {
	produto: Produto
}

export const BotaoAdicionar = ({ produto }: BotaoAdicionarProps) => {
	const { quantidade } = useContext(ProductContext)
	const { handleAdd } = useContext(AppContext)
	return (
		<Link
			href={"/carrinho"}
			className='flex-1 py-3 text-center bg-green-600 rounded-lg text-white'
			onClick={() => handleAdd(produto, quantidade)}
		>
			Adicionar ao carrinho
		</Link>
	)
}
