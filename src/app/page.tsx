import { ListaProduto } from "@/types/produto"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"

const Home = async () => {
	const { data: produtos } = await axios.get<ListaProduto[]>(
		"https://apihomolog.innovationbrindes.com.br/api/site/v2/teste/listagem-produtos"
	)

	return (
		<main className='flex-1 p-12'>
			<div className='grid gap-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
				{produtos.map(produto => (
					<div
						className='flex flex-col items-center rounded-2xl bg-white p-6'
						key={produto.codigo_produto}
					>
						<Image src={produto.imagem_produto} alt='foto' width={80} height={80} />
						<h1 className='my-3 text-lg font-semibold'>{produto.nome_produto}</h1>
						<Link href={`products/${produto.codigo_produto}`}>
							<button className='bg-green-600 py-2 px-7 rounded-lg text-white text-sm'>
								Comprar
							</button>
						</Link>
					</div>
				))}
			</div>
		</main>
	)
}

export default Home
