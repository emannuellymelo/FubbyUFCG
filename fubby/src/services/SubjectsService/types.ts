export interface ICommentsDTO {
    comentario: string,
    data: string,
}

export interface ISubjectDTO {
    id: string,
    nome: string,
    detalhes: string,
    comentarios: ICommentsDTO[],
}

export type SubjectsResponse = ISubjectDTO[];