'use client'

import Link from 'next/link'
import { useCarrinho } from '@/context/AppContext'
import { useContador } from '@/context/ProductContext'
import { Produto } from '@/types/produto'

interface BotaoAdicionarProps {
  produto: Produto
}

export const BotaoAdicionar = ({ produto }: BotaoAdicionarProps) => {
  const { handleAdd } = useCarrinho()
  const { quantidade } = useContador()

  return (
    <Link
      href="/carrinho"
      className="flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
      onClick={() => handleAdd(produto, quantidade)}
    >
      Adicionar ao carrinho
    </Link>
  )
}
