'use client'

import Link from 'next/link'
import { toast, Flip } from 'react-toastify'
import { ShoppingCart } from 'lucide-react'
import { useCarrinho } from '@/context/AppContext'
import { ListaProduto, Produto } from '@/types/produto'

interface ProdutoItemProps {
  produto: ListaProduto
}

const transformProduto = (produto: ListaProduto): Produto => {
  return {
    ...produto,
    nome: produto.nome_produto,
    estoque: produto.estoque_disponivel,
    codigo_produto: Number(produto.codigo_produto)
  } as unknown as Produto
}

export const ProdutoItem = ({ produto }: ProdutoItemProps) => {
  const { handleAdd } = useCarrinho()

  const handleBuy = () => {
    handleAdd(transformProduto(produto), 1)
    toast.success('Produto adicionado!', {
      position: 'top-center',
      autoClose: 2000,
      closeOnClick: true,
      icon: <ShoppingCart className="text-gray-500" />,
      transition: Flip
    })
  }

  return (
    <div className="p-10 md:p-0">
      <Link href={`products/${produto.codigo_produto}`} key={produto.codigo_produto}>
        <div className="group relative">
          <div className="aspect-h-[0.4] aspect-w-[0.4] sm:aspect-h-1 sm:aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 transition group-hover:opacity-75 lg:h-80">
            <img
              src={produto.imagem_produto}
              alt={produto.nome_produto}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="relative mt-4">
            <h3 className="text-center text-sm font-medium capitalize text-gray-900 sm:text-left">
              {produto.nome_produto.toLowerCase()}
            </h3>
          </div>
        </div>
      </Link>
      <div className="mt-6">
        <button
          className="relative flex w-full items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
          onClick={handleBuy}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}
