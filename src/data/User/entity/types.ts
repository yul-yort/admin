export interface IUserEntity {
  id: number;
  email: string;
  lastName: string;
  firstName: string;
}

export type IUserResponseDTO = Pick<IUserEntity, "id">;
