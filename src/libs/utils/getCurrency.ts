export enum ECurrencyISO {
  RUB = "RUB",
}

const CurrenciesDictionary: Record<ECurrencyISO, string> = {
  [ECurrencyISO.RUB]: "₽",
};

export const getCurrency = (currency: ECurrencyISO): string => {
  return CurrenciesDictionary[currency] || currency;
};
