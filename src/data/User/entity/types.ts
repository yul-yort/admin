export interface IUserEntity {
  id: ID;
}

export type IUserResponseDTO = Pick<IUserEntity, "id">;
