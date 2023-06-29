"use client"
import ContadorProdutoCarrinho from "@/components/ContadorProdutoCarrinho"
import { useCarrinho } from "@/context/AppContext"
import { Trash2Icon } from "lucide-react"
import Image from "next/image"

export const Carrinho = () => {
	const { carrinho, handleReset } = useCarrinho()
	return (
		<main className='flex-1  px-36 py-20'>
			<div className='flex flex-col bg-white border border-zinc-400 p-10 rounded-2xl'>
				<div className='flex justify-between items-center mb-14'>
					<h1 className='font-semibold text-3xl'>Carrinho de Compras</h1>
					<button
						className='p-4 rounded-lg text-red-700 border border-red-700 flex'
						onClick={handleReset}
					>
						<Trash2Icon className='mr-2' />
						Remover todos os produtos
					</button>
				</div>
				<div className='flex flex-col border-t border-zinc-400'>
					{carrinho ? (
						carrinho.length !== 0 ? (
							carrinho.map(item => (
								<div className='flex flex-col' key={item.produto.codigo_produto}>
									<div className='flex justify-between items-center mt-10'>
										<Image
											src={item.produto.imagem_produto}
											alt='processador'
											width={80}
											height={80}
										/>
										<h3>{item.produto.nome}</h3>

										<button className='p-4 rounded-lg text-red-700 flex'>
											<Trash2Icon className='mr-2' /> Remover
										</button>
										<ContadorProdutoCarrinho codigoProduto={item.produto.codigo_produto} />
									</div>
								</div>
							))
						) : (
							<h2 className='text-center mt-20 font-semibold'>
								Não há produtos adicionados no carrinho
							</h2>
						)
					) : (
						<h2 className='text-center mt-20 font-semibold'>
							Não há produtos adicionados no carrinho
						</h2>
					)}
				</div>
			</div>
		</main>
	)
}

export default Carrinho
