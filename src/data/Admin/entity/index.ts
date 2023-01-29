import { makeObservable, observable } from "mobx";
import { IAdminEntity, IAdminResponseDTO } from "./types";

export class Admin implements IAdminEntity {
  id: number;
  email = "test@test.com";
  firstName = "Тест";
  lastName = "Тестов";

  constructor(dto: IAdminResponseDTO) {
    this.id = dto.id;

    makeObservable(this, {
      id: observable,
    });
  }
}
