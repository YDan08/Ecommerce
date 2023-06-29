import axios from 'axios'
import { Produto, ListaProduto } from '@/types/produto'

export const getProdutos = async (): Promise<ListaProduto[]> => {
  const response = await axios.get<ListaProduto[]>(
    'https://apihomolog.innovationbrindes.com.br/api/site/v2/teste/listagem-produtos'
  )

  return response.data
}

export const getProdutoById = async (id: string): Promise<Produto | null> => {
  try {
    const response = await axios.get<Produto>(
      `https://apihomolog.innovationbrindes.com.br/api/site/v2/produto/${id}`
    )

    return response.data
  } catch {
    return null
  }
}
