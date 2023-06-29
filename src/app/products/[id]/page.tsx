import axios from 'axios'
import { Produto } from '@/types/produto'
import { ProductOverview } from '@/components/ProductOverview'

interface ProductProps {
  params: {
    id: string
  }
}

export const metadata = {
  title: 'Produto - ecommerce',
  description: 'Projeto de ecommerce'
}

export const Product = async ({ params }: ProductProps) => {
  const { data: produto } = await axios.get<Produto>(
    `https://apihomolog.innovationbrindes.com.br/api/site/v2/produto/${params.id}`
  )

  return <ProductOverview produto={produto} />
}

export default Product
