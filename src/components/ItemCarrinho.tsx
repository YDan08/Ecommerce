"use client"
import { ProdutosCarrinho } from "@/types/context"
import Image from "next/image"
import ContadorProdutoCarrinho from "./ContadorProdutoCarrinho"
import { Trash2Icon } from "lucide-react"
import { useCarrinho } from "@/context/AppContext"

interface ItemCarrinhoProps {
	item: ProdutosCarrinho
}

export const ItemCarrinho = ({ item }: ItemCarrinhoProps) => {
	const { handleRemove } = useCarrinho()

	return (
		<div className='flex flex-col' key={item.produto.codigo_produto}>
			<div className='flex justify-between items-center mt-10'>
				<Image src={item.produto.imagem_produto} alt='processador' width={80} height={80} />
				<h3 className='font-semibold capitalize'>{item.produto.nome.toLowerCase()}</h3>

				<ContadorProdutoCarrinho
					codigoProduto={item.produto.codigo_produto}
					estoque={Number(item.produto.estoque)}
				/>

				<button
					className='p-4 rounded-lg text-red-700 flex'
					onClick={() => handleRemove(item.produto.codigo_produto)}
				>
					<Trash2Icon className='mr-2' /> Remover
				</button>
			</div>
		</div>
	)
}
