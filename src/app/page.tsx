import { ProdutoItem } from '@/components/ProdutoItem'
import { getProdutos } from '@/models/product.server'

export const metadata = {
  title: 'Ecommerce',
  description: 'Projeto de ecommerce'
}

const Home = async () => {
  const produtos = await getProdutos()

  return (
    <main className="flex-1 px-5 py-10 sm:p-12">
      {produtos.length !== 0 ? (
        <div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {produtos.map(produto => (
            <ProdutoItem key={produto.codigo_produto} produto={produto} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <p className="text-center font-semibold">Não existem produtos disponiveis!</p>
        </div>
      )}
    </main>
  )
}

export default Home
