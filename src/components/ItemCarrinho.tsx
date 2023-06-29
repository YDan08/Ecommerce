'use client'

import Image from 'next/image'
import { Trash2Icon } from 'lucide-react'
import { ProdutosCarrinho } from '@/types/context'
import { useCarrinho } from '@/context/AppContext'
import { ContadorProdutoCarrinho } from './ContadorProdutoCarrinho'

interface ItemCarrinhoProps {
  item: ProdutosCarrinho
}

export const ItemCarrinho = ({ item }: ItemCarrinhoProps) => {
  const { handleRemove } = useCarrinho()

  return (
    <div className="flex divide-y divide-gray-200 border-t pb-6" key={item.produto.codigo_produto}>
      <div className="mt-10 grid w-full grid-cols-1 items-center gap-4 text-center lg:grid-cols-4">
        <Image src={item.produto.imagem_produto} alt="processador" width={80} height={80} />
        <h3 className="font-medium capitalize ">{item.produto.nome.toLowerCase()}</h3>

        <ContadorProdutoCarrinho
          codigoProduto={item.produto.codigo_produto}
          estoque={Number(item.produto.estoque)}
        />

        <button
          className="bg linear ml-auto flex rounded-lg px-4 py-3 text-red-700 transition-colors duration-200 hover:bg-red-50"
          onClick={() => handleRemove(item.produto.codigo_produto)}
        >
          <Trash2Icon className="mr-2" /> Remover
        </button>
      </div>
    </div>
  )
}
