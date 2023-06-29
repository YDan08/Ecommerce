import { createContext, useReducer, useState, useContext } from "react"
import { ProdutosCarrinho } from "@/types/context"
import { Produto } from "@/types/produto"

type State = {
	carrinho: ProdutosCarrinho[]
}

type Action =
	| { type: "add"; produto: Produto; quantidade: number }
	| { type: "remove"; codigo: number }
	| { type: "increment"; codigo: number }
	| { type: "decrement"; codigo: number }
	| { type: "reset" }

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

export const useCarrinho = () => useContext(AppContext)

function reducer(state: State, action: Action) {
	switch (action.type) {
		case "add": {
			const existsProduto = state.carrinho.some(
				item => item.produto.codigo_produto === action.produto.codigo_produto
			)

			if (!existsProduto) {
				return {
					...state,
					carrinho: [
						...state.carrinho,
						{ produto: action.produto, quantidade: action.quantidade },
					],
				}
			}

			return {
				...state,
				carrinho: state.carrinho.map(prevProduto =>
					prevProduto.produto.codigo_produto === action.produto.codigo_produto
						? { ...prevProduto, quantidade: prevProduto.quantidade + action.quantidade }
						: prevProduto
				),
			}
		}

		case "remove": {
			return {
				...state,
				carrinho: state.carrinho.filter(
					prevProduto => prevProduto.produto.codigo_produto != action.codigo
				),
			}
		}

		case "increment": {
			const existsProduto = state.carrinho.some(
				produto => produto.produto.codigo_produto === action.codigo
			)

			if (existsProduto) {
				return {
					...state,
					carrinho: state.carrinho.map(prevProduto =>
						prevProduto.produto.codigo_produto === action.codigo
							? { ...prevProduto, quantidade: prevProduto.quantidade + 1 }
							: prevProduto
					),
				}
			}
		}

		case "decrement": {
			const produto = state.carrinho.find(
				item => item.produto.codigo_produto === action.codigo
			)

			if (!produto) return state

			if (produto.quantidade <= 1) {
				return {
					...state,
					carrinho: state.carrinho.filter(
						preProduto => preProduto.produto.codigo_produto !== action.codigo
					),
				}
			}

			return {
				...state,
				carrinho: state.carrinho.map(preProduto =>
					preProduto.produto.codigo_produto === action.codigo
						? { ...preProduto, quantidade: preProduto.quantidade - 1 }
						: preProduto
				),
			}
		}

		case "reset": {
			return {
				...state,
				carrinho: [],
			}
		}

		default:
			return state
	}
}

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, { carrinho: [] })

	const handleAdd = (produto: Produto, quantidade: number) => {
		dispatch({ type: "add", produto, quantidade })
	}

	const handleRemove = (codigo: number) => {
		dispatch({ type: "remove", codigo })
	}

	const handleReset = () => {
		dispatch({ type: "reset" })
	}

	const handleProductIncrement = (codigo: number) => {
		dispatch({ type: "increment", codigo })
	}

	const handleProductDecrement = (codigo: number) => {
		dispatch({ type: "decrement", codigo })
	}

	return (
		<AppContext.Provider
			value={{
				carrinho: state.carrinho,
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
