import ProdutoItem from "@/components/ProdutoItem"
import { ListaProduto } from "@/types/produto"
import axios from "axios"

export const metadata = {
	title: "Ecommerce",
	description: "Projeto de ecommerce",
}

const Home = async () => {
	const { data: produtos } = await axios.get<ListaProduto[]>(
		"https://apihomolog.innovationbrindes.com.br/api/site/v2/teste/listagem-produtos"
	)

	return (
		<main className='flex-1 p-12'>
			<div className='grid gap-12 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto'>
				{produtos.map(produto => (
					<ProdutoItem key={produto.codigo_produto} produto={produto} />
				))}
			</div>
		</main>
	)
}

export default Home
