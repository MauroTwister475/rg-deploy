
export type RelatoryProps = {
  id: string,
  title: string,
  created_at: Date,
}

export type State = "Concorda" | "Discorda" | "Em abstenção" | null;

export type ContryData = {
  id: string,
  name: string,
  state: State,
}

export type RelatoryFormProps = {
  contries: string,
}

export type Report = {
  title: string,
  theme: string,
  data: any,
  participation_of_angola: string,
  decision: string,
  point: string,
  reference: string,
  cod_document: string,
  atribuition: string,
  resume: string,
  number_meeting: string,
  comment: string,
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
