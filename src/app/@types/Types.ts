
export type RelatoryProps = {
  id: number,
  title: string,
  create_at: Date,
}

export type State = "Concorda" | "Discorda" | "Em abstenção" | null;

export type ContryData = {
  id: number,
  name: string,
  state: State,
}

export type RelatoryFormProps = {
  contries: string,
}

export type Report = {
  theme: string,
	title: string,
	point: string,
  create_at: string,
	reference: string,
	atribuition: string,
	cod_document: string,
	Angola_participation: string,
	decision: string,
	summary: string,
	meeting_number: string,
	comment: string,
	votoscontra: number | null,
	votosfavor: number | null,
	votosemabstencao: number | null,
}

// type UserAuth api
export type UserAuth = {
  user: {
    id: string,
    name: string,
    email: string,
  },
  token: string,
}

export type LastUser = {
  id: string,
  name: string,
  email: string,
}


export interface IUser {
  id: string,
  name: string,
  email: string,
  image?: string,
  token: string,
}
