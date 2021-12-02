import { IFormPhone } from "../shared/types";

export const formPhonesFormatter = (phones: string[]): IFormPhone[] =>
  phones.map((phone) => ({ value: phone }));
