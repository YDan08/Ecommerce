import { Produto } from "@/types/produto"
import axios from "axios"
import Image from "next/image"
import { Contador } from "@/components/Contador"
import { BotaoAdicionar } from "@/components/BotaoAdicionar"

interface ProductProps {
	params: {
		id: string
	}
}

export const Product = async ({ params }: ProductProps) => {
	const { data: produto } = await axios.get<Produto>(
		`https://apihomolog.innovationbrindes.com.br/api/site/v2/produto/${params.id}`
	)

	return (
		<main className='flex-1  px-36 py-20'>
			<div className='flex flex-col bg-white border border-zinc-400 p-10 rounded-2xl'>
				<h1 className='font-semibold text-3xl'>{produto.nome}</h1>
				<div className='flex justify-between items-center mt-12 md:flex-col lg:flex-row'>
					<div className='flex justify-center items-center flex-1 '>
						<Image
							src={produto.imagem_produto}
							alt='imagem do produto'
							width={240}
							height={240}
						/>
					</div>

					<div className='flex flex-col md:w-full lg:w-1/2 '>
						<h2 className='my-2 mb-5'>Descrição:</h2>
						<p>{produto.caracteristicas}</p>

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
		</main>
	)
}

export default Product
