import { notFound } from 'next/navigation'
import { ProductOverview } from '@/components/ProductOverview'
import { getProdutoById } from '@/models/product.server'
import { capitalize } from '@/utils'

interface PageProps {
  params: {
    id: string
  }
}

export const Product = async ({ params }: PageProps) => {
  const produto = await getProdutoById(params.id)

  if (!produto) {
    notFound()
  }

  return <ProductOverview produto={produto} />
}

export const generateMetadata = async ({ params }: PageProps) => {
  const produto = await getProdutoById(params.id)

  if (!produto) {
    notFound()
  }

  return {
    title: `${capitalize(produto.nome)} - Ecommerce`,
    description: produto.descricao,
    image: produto.imagem_produto
  }
}

export default Product
