import { IFormPhone } from "./types";

export const formPhonesFormatter = (phones: string[]): IFormPhone[] =>
  phones.map((phone) => ({ value: phone }));
