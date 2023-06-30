import axios from 'axios'
import { Produto, ListaProduto } from '@/types/produto'

const baseUrl = 'https://apihomolog.innovationbrindes.com.br/api/site/v2'

export const getProdutos = async (): Promise<ListaProduto[]> => {
  try {
    const response = await axios.get<ListaProduto[]>(`${baseUrl}/teste/listagem-produtos`)
    return response.data
  } catch {
    return []
  }
}

export const getProdutoById = async (id: string): Promise<Produto | null> => {
  try {
    const response = await axios.get<Produto>(`${baseUrl}/produto/${id}`)

    return response.data
  } catch {
    return null
  }
}
