'use client'

import { MinusIcon, PlusIcon } from 'lucide-react'
import { useContador } from '@/context/ProductContext'

interface ContadorProps {
  estoque: number
}

export const Contador = ({ estoque }: ContadorProps) => {
  const { quantidade, handleDecrement, handleIncrement } = useContador()
  return (
    <div className="mb-5 mt-8 border-t border-gray-200 pt-4">
      <h2 className="mb-3">Quantidade</h2>
      {estoque > 0 ? (
        <>
          <div className="mb-3 flex items-center text-center">
            <button
              className="rounded-md bg-indigo-50 px-2 py-1 text-indigo-800 transition-colors duration-150 ease-in-out hover:bg-indigo-200 disabled:opacity-50 disabled:hover:bg-indigo-50"
              onClick={handleDecrement}
              disabled={quantidade <= 1}
            >
              <MinusIcon width={16} />
            </button>
            <p className="mx-5">{quantidade}</p>
            <button
              className="rounded-md bg-indigo-50 px-2 py-1 text-indigo-800 transition-colors duration-150 ease-in-out hover:bg-indigo-200 disabled:opacity-50 disabled:hover:bg-indigo-50"
              onClick={handleIncrement}
              disabled={estoque <= quantidade}
            >
              <PlusIcon width={16} />
            </button>
          </div>
          <h2 className="font-medium text-[#007600]">Em estoque</h2>
        </>
      ) : (
        <h2 className="text-red-800">Produto indisponivel</h2>
      )}
    </div>
  )
}
