export interface IUserEntity {
  id: ID;
  email: string;
  lastName: string;
  firstName: string;
}

export type IUserResponseDTO = Pick<IUserEntity, "id">;
