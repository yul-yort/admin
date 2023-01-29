export interface IAdminEntity {
  id: number;
  email: string;
  lastName: string;
  firstName: string;
}

export type IAdminResponseDTO = Pick<IAdminEntity, "id">;
