import Link from 'next/link'

export interface NotFoundProps {
  title: string
  description?: string
}

const defaultDescription = 'Desculpe, não conseguimos encontrar a página que você está procurando.'

export const NotFound = ({ title, description = defaultDescription }: NotFoundProps) => {
  return (
    <div className="grid flex-1 place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-primary text-base font-semibold">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        <p className="text-secondary mt-6 text-base leading-7">{description}</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Voltar para página inicial
          </Link>
        </div>
      </div>
    </div>
  )
}
