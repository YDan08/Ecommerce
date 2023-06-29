import { Produto } from "@/types/produto"
import { ImagesCarousel } from "./ImagesCarousel"
import { Contador } from "../Contador"
import { BotaoAdicionar } from "../BotaoAdicionar"

export interface ProductOverviewProps {
	produto: Produto
}

export const ProductOverview = ({ produto }: ProductOverviewProps) => {
	const images = Array.from({ length: produto.quantidade_imagens }, (_, i) => {
		const index = i + 1

		return `${produto.imagem_produto.replace("1-1", `${index}-${index}`)}`
	})

	return (
		<div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex-1'>
			<div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 '>
				<ImagesCarousel images={images} productName={produto.nome} />
				<div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 w-full flex flex-col'>
					<h1 className='text-3xl font-bold tracking-tight text-gray-900 capitalize'>
						{produto.nome.toLowerCase()}
					</h1>
					<div className='mt-6'>
						<h3 className='sr-only'>Descrição</h3>
						<p className='text-base text-gray-700'>{produto.descricao}</p>
					</div>

					<Contador estoque={Number(produto.estoque)} />

					{Number(produto.estoque) != 0 ? (
						<BotaoAdicionar produto={produto} />
					) : (
						<button
							className='flex-1 py-3 text-center bg-gray-600 rounded-lg text-white cursor-default'
							disabled
						>
							Produto indisponível
						</button>
					)}
				</div>
			</div>
		</div>
	)
}
