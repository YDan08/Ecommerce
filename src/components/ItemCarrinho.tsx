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
    <div className="flex border-t border-zinc-400  pb-6" key={item.produto.codigo_produto}>
      <div className="mt-10 flex flex-1 flex-col items-center justify-between gap-4 text-center lg:flex-row">
        <Image src={item.produto.imagem_produto} alt="processador" width={80} height={80} />
        <h3 className="font-semibold capitalize ">{item.produto.nome.toLowerCase()}</h3>

        <ContadorProdutoCarrinho
          codigoProduto={item.produto.codigo_produto}
          estoque={Number(item.produto.estoque)}
        />

        <button
          className="flex rounded-lg p-4 text-red-700 "
          onClick={() => handleRemove(item.produto.codigo_produto)}
        >
          <Trash2Icon className="mr-2" /> Remover
        </button>
      </div>
    </div>
  )
}
