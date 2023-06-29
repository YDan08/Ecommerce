import { createContext, useReducer, useContext, useCallback, useMemo, useEffect } from 'react'
import { ProdutosCarrinho } from '@/types/context'
import { Produto } from '@/types/produto'

interface State {
  carrinho: ProdutosCarrinho[]
}

type Action =
  | { type: 'add'; produto: Produto; quantidade: number }
  | { type: 'remove'; codigo: number }
  | { type: 'increment'; codigo: number }
  | { type: 'decrement'; codigo: number }
  | { type: 'reset' }
  | { type: 'set'; carrinho: ProdutosCarrinho[] }

interface AppContextProps {
  carrinho: ProdutosCarrinho[]
  handleAdd: (produto: Produto, quantidade: number) => void
  handleRemove: (codigo: number) => void
  handleProductIncrement: (codigo: number) => void
  handleProductDecrement: (codigo: number) => void
  handleReset: () => void
}

// @ts-ignore
export const AppContext = createContext<AppContextProps>({
  carrinho: []
})

export const useCarrinho = () => useContext(AppContext)

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'add': {
      const existsProduto = state.carrinho.some(
        item => item.produto.codigo_produto === action.produto.codigo_produto
      )

      if (!existsProduto) {
        return {
          ...state,
          carrinho: [...state.carrinho, { produto: action.produto, quantidade: action.quantidade }]
        }
      }

      return {
        ...state,
        carrinho: state.carrinho.map(prevProduto =>
          prevProduto.produto.codigo_produto === action.produto.codigo_produto
            ? { ...prevProduto, quantidade: prevProduto.quantidade + action.quantidade }
            : prevProduto
        )
      }
    }

    case 'remove': {
      return {
        ...state,
        carrinho: state.carrinho.filter(
          prevProduto => prevProduto.produto.codigo_produto !== action.codigo
        )
      }
    }

    case 'increment': {
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
          )
        }
      }

      return state
    }

    case 'decrement': {
      const produto = state.carrinho.find(item => item.produto.codigo_produto === action.codigo)

      if (!produto) return state

      if (produto.quantidade <= 1) {
        return {
          ...state,
          carrinho: state.carrinho.filter(
            preProduto => preProduto.produto.codigo_produto !== action.codigo
          )
        }
      }

      return {
        ...state,
        carrinho: state.carrinho.map(preProduto =>
          preProduto.produto.codigo_produto === action.codigo
            ? { ...preProduto, quantidade: preProduto.quantidade - 1 }
            : preProduto
        )
      }
    }

    case 'reset': {
      return {
        ...state,
        carrinho: []
      }
    }

    case 'set': {
      return {
        ...state,
        carrinho: action.carrinho
      }
    }

    default:
      return state
  }
}

const getCarrinho = (): ProdutosCarrinho[] => {
  if (typeof window === 'undefined') return []

  const res = localStorage.getItem('carrinho')

  if (!res) return []

  const carrinho = JSON.parse(res)

  if (!Array.isArray(carrinho)) {
    localStorage.removeItem('carrinho')

    return []
  }

  return carrinho
}

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, { carrinho: [] })

  useEffect(() => {
    const carrinho = getCarrinho()
    dispatch({ type: 'set', carrinho })
  }, [])

  useEffect(() => {
    const carrinho = JSON.stringify(state.carrinho)
    localStorage.setItem('carrinho', carrinho)
  }, [state.carrinho])

  const handleAdd = useCallback((produto: Produto, quantidade: number) => {
    dispatch({ type: 'add', produto, quantidade })
  }, [])

  const handleRemove = useCallback((codigo: number) => {
    dispatch({ type: 'remove', codigo })
  }, [])

  const handleReset = useCallback(() => {
    dispatch({ type: 'reset' })
  }, [])

  const handleProductIncrement = useCallback((codigo: number) => {
    dispatch({ type: 'increment', codigo })
  }, [])

  const handleProductDecrement = useCallback((codigo: number) => {
    dispatch({ type: 'decrement', codigo })
  }, [])

  const context = useMemo(() => {
    return {
      carrinho: state.carrinho,
      handleAdd,
      handleRemove,
      handleProductDecrement,
      handleProductIncrement,
      handleReset
    }
  }, [
    state.carrinho,
    handleAdd,
    handleRemove,
    handleProductDecrement,
    handleProductIncrement,
    handleReset
  ])

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}
