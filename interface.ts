interface Categoria {
    id: number;
    nome: string;
    descricao: string;
    dataCriacao: Date;
    produtos?: Produto[];
}

interface Produto {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    quantidade: number;
    categoriaId: number;
    dataCriacao: Date;
    dataAtualizacao?: Date;
}

export { Categoria, Produto }