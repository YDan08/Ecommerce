'use client'

import { Trash2Icon } from 'lucide-react'
import { ItemCarrinho } from '@/components/ItemCarrinho'
import { useCarrinho } from '@/context/AppContext'

export const metadata = {
  title: 'Carrinho - ecommerce',
  description: 'Projeto de ecommerce'
}

export const Carrinho = () => {
  const { carrinho, handleReset } = useCarrinho()
  return (
    <main className="flex-1  px-36 py-20">
      <div className="flex flex-col rounded-2xl border border-zinc-400 bg-white p-10">
        <div className="mb-14 flex items-center justify-between">
          <h1 className="text-3xl font-semibold">Carrinho de Compras</h1>
          <button
            className="flex rounded-lg border border-red-700 p-4 text-red-700 hover:bg-red-500 hover:text-white"
            onClick={handleReset}
          >
            <Trash2Icon className="mr-2" />
            Remover todos os produtos
          </button>
        </div>
        <div className="flex flex-col border-t border-zinc-400">
          {carrinho ? (
            carrinho.length !== 0 ? (
              carrinho.map(item => <ItemCarrinho item={item} key={item.produto.codigo_produto} />)
            ) : (
              <h2 className="mt-20 text-center font-semibold">
                Não há produtos adicionados no carrinho
              </h2>
            )
          ) : (
            <h2 className="mt-20 text-center font-semibold">
              Não há produtos adicionados no carrinho
            </h2>
          )}
        </div>
      </div>
    </main>
  )
}

export default Carrinho
