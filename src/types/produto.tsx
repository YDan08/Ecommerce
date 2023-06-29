export interface ListaProduto {
	codigo_produto: string
	nome_produto: string
	estoque_disponivel: string
	descricao_produto: string
	caracteristicas_produto: string
	imagem_produto: string
}

export interface Produto {
	codigo_produto: number
	nome: string
	referencia: number
	codigo_grupo_produto: number
	titulo_seo: string
	tags_seo_key_words: string
	url_seo: string
	quantidade_maxima: number
	quantidade_minima: number
	batidadas_maximas: number
	descricao: string
	ativo: string
	confeccao: string
	prazo_minimo_entrega: number
	dimensoes: string
	valor_home: string
	quantidade_imagens: number
	ad_embalagem?: string
	ad_pdv?: string
	caracteristicas: string
	rgb_cores: string
	peso_produto: string
	estoque: string
	url_categoria: string
	genero: string
	prod_vestuario: string
	imagem_produto: string
}
