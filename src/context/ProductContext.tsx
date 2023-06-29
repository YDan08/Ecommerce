"use client"
import { createContext, useContext, useReducer } from "react"

type State = {
	quantidade: number
}

type Action = { type: "increment" } | { type: "decrement" }

interface ProductContextProps {
	quantidade: number
	handleIncrement: () => void
	handleDecrement: () => void
}

export const ProductContext = createContext<ProductContextProps>({
	quantidade: 1,
	handleIncrement: () => {},
	handleDecrement: () => {},
})

export const useContador = () => useContext(ProductContext)

function reducer(state: State, action: Action) {
	switch (action.type) {
		case "increment":
			return {
				...state,
				quantidade: state.quantidade + 1,
			}
		case "decrement":
			return {
				...state,
				quantidade: state.quantidade - 1,
			}
		default:
			return state
	}
}

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispath] = useReducer(reducer, { quantidade: 1 })

	const handleIncrement = () => {
		dispath({ type: "increment" })
	}

	const handleDecrement = () => {
		dispath({ type: "decrement" })
	}

	return (
		<ProductContext.Provider
			value={{ handleIncrement, handleDecrement, quantidade: state.quantidade }}
		>
			{children}
		</ProductContext.Provider>
	)
}

export default ProductProvider
