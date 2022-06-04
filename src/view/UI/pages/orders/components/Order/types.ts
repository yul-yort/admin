import { IOrderItemEntity } from "../../../../../../data/Order/entity/types";

export interface IOrderProps
  extends Pick<IOrderItemEntity, "price" | "agency" | "currencyISO"> {}
