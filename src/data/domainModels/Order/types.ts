export enum ECurrencyISO {
  RUB = "RUB",
}

export interface IOrderDomain {
  id: ID;
  agencyName: string;
  agencyPhones?: string[];
  price?: number;
  currencyISO: ECurrencyISO;

  priceValue?: string;
  phoneValues?: string[];
}

export interface IOrderResponseDTO
  extends Pick<
    IOrderDomain,
    "price" | "id" | "agencyName" | "currencyISO" | "agencyPhones"
  > {}

export interface IOrderRequestParams {
  origin?: string;
  destination?: string;
}
