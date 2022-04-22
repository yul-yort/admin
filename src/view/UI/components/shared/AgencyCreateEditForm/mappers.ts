import { IFormPhone } from "./types";

export const UIPhonesFormatter = (phones: string[]): IFormPhone[] =>
  phones.map((phone) => ({ value: phone }));

export const VMPhonesRequestFormatter = (phones: IFormPhone[]): string[] =>
  phones.map((phoneValue) => phoneValue.value);
