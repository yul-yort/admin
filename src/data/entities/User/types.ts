export interface IUserEntity {
  id: ID;
}

export interface IUserResponseDTO extends Pick<IUserEntity, "id"> {}
