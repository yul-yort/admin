import { IOrderDomain } from "../../../../data/domainModels/Order/types";

export interface IOrderProps
  extends Pick<IOrderDomain, "phoneValues" | "agencyName" | "priceValue"> {}
