import { makeObservable, observable } from "mobx";
import { IAdminEntity, IAdminResponseDTO } from "./types";

export class Admin implements IAdminEntity {
  id: number;
  email: string;
  firstName: string;
  lastName: string;

  constructor(dto: IAdminResponseDTO) {
    this.id = dto.id;
    this.email = dto.email;
    this.firstName = dto.firstName;
    this.lastName = dto.lastName;

    makeObservable(this, {
      id: observable,
      email: observable,
      firstName: observable,
      lastName: observable,
    });
  }
}
