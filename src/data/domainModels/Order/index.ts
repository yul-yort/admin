import { computed, makeObservable, observable } from "mobx";
import { ECurrencyISO, IOrderDomain, IOrderResponseDTO } from "./types";
import { currenciesDictionary } from "../../../constants/CurrenciesDictionary";

export class OrderDomain implements IOrderDomain {
  id: ID = "";
  agencyName: string = "";
  currencyISO: ECurrencyISO = ECurrencyISO.RUB;
  price?: number;
  agencyPhones?: string[];

  constructor(dto: IOrderResponseDTO) {
    this.id = dto.id;
    this.agencyName = dto.agencyName;
    this.currencyISO = dto.currencyISO;
    this.price = dto.price;
    this.agencyPhones = dto.agencyPhones;

    makeObservable(this, {
      id: observable,
      agencyName: observable,
      currencyISO: observable,
      price: observable,
      agencyPhones: observable,
      priceValue: computed,
      phoneValues: computed,
    });
  }

  get priceValue(): string | undefined {
    if (!this.price) {
      return void 0;
    }

    return `${this.price} ${
      currenciesDictionary[this.currencyISO] || this.currencyISO
    }`;
  }

  get phoneValues(): string[] | undefined {
    if (!this.agencyPhones || !this.agencyPhones.length) {
      return void 0;
    }

    return this.agencyPhones.map((phone) => `+7 ${phone}`);
  }
}
