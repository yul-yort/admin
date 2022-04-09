//FIXME: тип данных any заменить 
export interface ILoginInput {
  control: any,
  errorLogin: any
}

export interface IStatePasswordInput {
  password: string;
  showPassword: boolean;
}

export interface IPasswordInput {
  control: any,
  errorPassword: any,
}

export type TInputs = {
  example: string;
  exampleRequired: string;
};
