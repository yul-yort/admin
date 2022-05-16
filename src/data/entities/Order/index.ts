import { makeAutoObservable } from "mobx";
import { ECurrencyISO } from "src/libs/utils/getCurrency";
import {
  IOrderAgency,
  IOrderItemEntity,
  IOrderItemResponseDTO,
  IOrderRoute,
} from "./types";

export class OrderItem implements IOrderItemEntity {
  id: ID;
  agency: IOrderAgency;
  currencyISO: ECurrencyISO;
  route: IOrderRoute;
  price?: number;

  constructor(dto: IOrderItemResponseDTO) {
    this.id = dto.id;
    this.agency = dto.agency;
    this.route = dto.route;
    this.currencyISO = dto.currencyISO;
    this.price = dto.price;

    makeAutoObservable(this);
  }
}
