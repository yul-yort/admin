export interface IAdminEntity {
  readonly id: number;
  email: string;
  lastName: string;
  firstName: string;
}

export interface IAdminResponseDTO extends IAdminEntity {}
