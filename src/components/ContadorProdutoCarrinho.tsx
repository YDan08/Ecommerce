'use client'

import { MinusIcon, PlusIcon } from 'lucide-react'
import { useCarrinho } from '@/context/AppContext'

interface ContadorProdutoCarrinhoProps {
  codigoProduto: number
  quantidade: number
  estoque?: number
}

export const ContadorProdutoCarrinho = ({
  estoque,
  quantidade,
  codigoProduto
}: ContadorProdutoCarrinhoProps) => {
  const { handleProductDecrement, handleProductIncrement } = useCarrinho()
  return (
    <div className="flex flex-col items-center justify-center pt-4">
      {estoque && (
        <div className="mb-3 flex items-center text-center">
          <button
            className="rounded-md bg-indigo-100 px-2 py-1 text-indigo-800"
            onClick={() => handleProductDecrement(codigoProduto)}
          >
            <MinusIcon width={16} />
          </button>
          <p className="mx-5">{quantidade}</p>
          <button
            className="rounded-md bg-indigo-100 px-2 py-1 text-indigo-800 disabled:opacity-25"
            onClick={() => handleProductIncrement(codigoProduto)}
            disabled={estoque <= quantidade}
          >
            <PlusIcon width={16} />
          </button>
        </div>
      )}
    </div>
  )
}
