import { makeAutoObservable } from "mobx";
import { ECurrencyISO } from "src/libs/utils/getCurrency";
import { IOrderItemEntity, IOrderItemResponseDTO } from "./types";
import { Agency } from "../../Agency/entity";
import { IAgencyEntity } from "../../Agency/entity/types";
import { Route } from "../../Route/entity";
import { IRouteEntity } from "../../Route/entity/types";

export class OrderItem implements IOrderItemEntity {
  id: number;
  agency: IAgencyEntity;
  currencyISO: ECurrencyISO;
  route: IRouteEntity;
  price: Nullable<number>;

  constructor(dto: IOrderItemResponseDTO) {
    this.id = dto.id;
    this.agency = new Agency(dto.agency);
    this.route = new Route({
      origin: dto.origin,
      destination: dto.destination,
    });
    this.currencyISO = dto.currencyISO;
    this.price = dto.price;

    makeAutoObservable(this);
  }
}
