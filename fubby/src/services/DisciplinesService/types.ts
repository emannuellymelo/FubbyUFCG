export interface ICommentsDTO {
    comentario: string,
    data: string,
}

export interface IDisciplineDTO {
    id: string,
    nome: string,
    detalhes: string,
    comentarios: ICommentsDTO[],
}

export type DisciplinesResponse = IDisciplineDTO[];