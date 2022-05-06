import { IOrderItemEntity } from "../../../../../../data/entities/Order/types";

export interface IOrderProps
  extends Pick<IOrderItemEntity, "price" | "agency" | "currencyISO"> {}
