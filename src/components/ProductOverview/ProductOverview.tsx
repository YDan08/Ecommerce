import addDays from 'date-fns/addDays'
import format from 'date-fns/format'
import { Produto } from '@/types/produto'
import { Contador } from '../Contador'
import { BotaoAdicionar } from '../BotaoAdicionar'
import { ImagesCarousel } from './ImagesCarousel'
import { Detail, ProductDetails } from './ProductDetails'

export interface ProductOverviewProps {
  produto: Produto
}

export const ProductOverview = ({ produto }: ProductOverviewProps) => {
  const images = Array.from({ length: produto.quantidade_imagens }, (_, i) => {
    const index = i + 1

    return `${produto.imagem_produto.replace('1-1', `${index}-${index}`)}`
  })

  const details: Detail[] = [
    {
      name: 'Dimensões',
      items: [produto.dimensoes]
    },
    {
      name: 'Peso',
      items: [`${produto.peso_produto} kg`]
    },
    {
      name: 'Entrega',
      items: [
        `Entrega a partir de ${format(
          addDays(new Date(), produto.prazo_minimo_entrega),
          'dd/MM/yyyy'
        )}`
      ]
    }
  ]

  return (
    <div className="mx-auto flex max-w-2xl flex-1 px-4 py-12 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 ">
        <ImagesCarousel images={images} productName={produto.nome} />
        <div className="mt-10 flex w-full flex-col px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 className="text-3xl font-bold capitalize tracking-tight text-gray-900">
            {produto.nome.toLowerCase()}
          </h1>
          <div className="mt-6">
            <h3 className="sr-only">Descrição</h3>
            <p className="text-base text-gray-700">{produto.descricao}</p>
          </div>

          <Contador estoque={Number(produto.estoque)} />

          {Number(produto.estoque) !== 0 ? (
            <BotaoAdicionar produto={produto} />
          ) : (
            <button
              className="flex-1 cursor-default rounded-lg bg-gray-600 py-3 text-center text-white"
              disabled
            >
              Produto indisponível
            </button>
          )}

          <ProductDetails details={details} />
        </div>
      </div>
    </div>
  )
}
