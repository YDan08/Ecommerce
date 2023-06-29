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
	const handleAdd = (produto: Produto, quantidade: number) => {
		const existsProduto = carrinho.some(
			item => item.produto.codigo_produto === produto.codigo_produto
		)

		if (!existsProduto) {
			return setCarrinho(prevProdutos => [...prevProdutos, { produto, quantidade }])
		}

		setCarrinho(prevProdutos =>
			prevProdutos.map(prevProduto =>
				prevProduto.produto.codigo_produto === produto.codigo_produto
					? { ...prevProduto, quantidade: prevProduto.quantidade + quantidade }
					: prevProduto
			)
		)
	}

	const handleRemove = (codigo: number) => {
		setCarrinho(prevProdutos =>
			prevProdutos.filter(produto => produto.produto.codigo_produto != codigo)
		)
	}

	const handleReset = () => {
		setCarrinho([])
	}

	const handleProductIncrement = (codigo: number) => {
		const existsProduto = carrinho.some(
			produto => produto.produto.codigo_produto === codigo
		)

		if (existsProduto) {
			setCarrinho(prevProdutos =>
				prevProdutos.map(prevProduto =>
					prevProduto.produto.codigo_produto === codigo
						? { ...prevProduto, quantidade: prevProduto.quantidade + 1 }
						: prevProduto
				)
			)
		}
	}

	const handleProductDecrement = (codigo: number) => {
		const produto = carrinho.find(item => item.produto.codigo_produto === codigo)
		if (produto) {
			if (produto.quantidade <= 1) {
				setCarrinho(prevProduto =>
					prevProduto.filter(prevProduto => prevProduto.produto.codigo_produto !== codigo)
				)
			} else {
				setCarrinho(prevProduto =>
					prevProduto.map(prevProduto =>
						prevProduto.produto.codigo_produto === codigo
							? { ...prevProduto, quantidade: prevProduto.quantidade - 1 }
							: prevProduto
					)
				)
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
