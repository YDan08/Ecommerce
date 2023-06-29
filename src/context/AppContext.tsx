import { ProdutosCarrinho } from "@/types/context"
import { Produto } from "@/types/produto"
import { createContext, useState } from "react"

interface AppContextProps {
	carrinho?: ProdutosCarrinho[]
	handleAdd: (produto: Produto, quantidade: number) => void
	handleRemove: (codigo: number) => void
	handleProductIncrement: (codigo: number) => void
	handleProductDecrement: (codigo: number) => void
	handleReset: () => void
}

export const AppContext = createContext<AppContextProps>({
	carrinho: [],
	handleAdd: (produto: Produto, quantidade: number) => {},
	handleRemove: (codigo: number) => {},
	handleProductIncrement: (codigo: number) => {},
	handleProductDecrement: (codigo: number) => {},
	handleReset: () => {},
})

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	const [carrinho, setCarrinho] = useState<ProdutosCarrinho[]>([])
	console.log(carrinho)
	const handleAdd = (produto: Produto, quantidade: number) => {
		const item = carrinho.filter(
			item => item.produto.codigo_produto === produto.codigo_produto
		)

		if (item.length != 0) {
			const novaQuantidade = item[0].quantidade + quantidade
			const produtos = carrinho.filter(
				item => item.produto.codigo_produto !== produto.codigo_produto
			)
			return setCarrinho([...produtos, { produto, quantidade: novaQuantidade }])
		}
		setCarrinho([...carrinho, { produto, quantidade }])
	}

	const handleRemove = (codigo: number) => {
		const produtos = carrinho.filter(produto => produto.produto.codigo_produto != codigo)
		setCarrinho(produtos)
	}

	const handleReset = () => {
		setCarrinho([])
	}

	const handleProductIncrement = (codigo: number) => {
		const produto = carrinho.filter(produto => produto.produto.codigo_produto === codigo)
		if (produto.length !== 0) {
			const novaQuantidade = produto[0].quantidade + 1
			const produtos = carrinho.filter(produto => produto.produto.codigo_produto !== codigo)
			setCarrinho([
				...produtos,
				{ produto: produto[0].produto, quantidade: novaQuantidade },
			])
		}
	}

	const handleProductDecrement = (codigo: number) => {
		const produto = carrinho.filter(item => item.produto.codigo_produto === codigo)
		if (produto.length !== 0) {
			const produtos = carrinho.filter(item => item.produto.codigo_produto !== codigo)
			console.log([produto[0].quantidade, "remove"])
			if (produto[0].quantidade < 2) {
				setCarrinho([...produtos])
			} else {
				const novaQuantidade = produto[0].quantidade - 1
				setCarrinho([
					...produtos,
					{ produto: produto[0].produto, quantidade: novaQuantidade },
				])
			}
		}
	}

	return (
		<AppContext.Provider
			value={{
				carrinho,
				handleAdd,
				handleRemove,
				handleProductDecrement,
				handleProductIncrement,
				handleReset,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
