import { makeObservable, observable } from "mobx";
import { IUserEntity, IUserResponseDTO } from "./types";

export class User implements IUserEntity {
  id: number;
  email = "test@test.com";
  firstName = "Тест";
  lastName = "Тестов";

  constructor(dto: IUserResponseDTO) {
    this.id = dto.id;

    makeObservable(this, {
      id: observable,
    });
  }
}
