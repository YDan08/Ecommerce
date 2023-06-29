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
      <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-10">
        <div className="mb-14 flex flex-col items-center justify-between gap-y-8 lg:flex-row">
          <h1 className="text-3xl font-semibold">Carrinho de Compras</h1>
          {carrinho?.length > 0 && (
            <button
              className="linear flex gap-1 rounded-lg bg-red-50 px-4 py-3 text-red-700 transition-colors duration-200 hover:bg-red-200"
              onClick={handleReset}
            >
              <Trash2Icon className="mr-2" />
              <span>Remover todos os produtos</span>
            </button>
          )}
        </div>
        <div className="flex flex-col">
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
