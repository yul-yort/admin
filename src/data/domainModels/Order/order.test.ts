import { OrderDomain } from "./index";
import { orderResponseDTO } from "./_fixtures_/orderResponseDTO";
import { currenciesDictionary } from "../../../constants/CurrenciesDictionary";
import { ECurrencyISO } from "./types";

let order = new OrderDomain(orderResponseDTO);

const unknownCurrency = "XXX";

describe("order domain entity", () => {
  it("should have correct ID", () => {
    expect(order.id).toEqual(orderResponseDTO.id);
  });

  it("should have correct agencyName", () => {
    expect(order.agencyName).toEqual(orderResponseDTO.agencyName);
  });

  it("should have correct agencyPhones", () => {
    expect(order.agencyPhones).toEqual(orderResponseDTO.agencyPhones);
  });

  it("should have correct price", () => {
    expect(order.price).toEqual(orderResponseDTO.price);
  });

  it("should have correct currencyISO", () => {
    expect(order.currencyISO).toEqual(orderResponseDTO.currencyISO);
  });

  describe("priceValue", () => {
    it("should have correct value", () => {
      expect(order.priceValue).toEqual(
        `${orderResponseDTO.price} ${
          currenciesDictionary[orderResponseDTO.currencyISO]
        }`
      );
    });

    it("should have value with unknown currency, if order response DTO have unknown currency", () => {
      orderResponseDTO.currencyISO = unknownCurrency as ECurrencyISO;
      order = new OrderDomain(orderResponseDTO);

      expect(order.priceValue).toEqual(
        `${orderResponseDTO.price} ${unknownCurrency}`
      );
    });

    it("should have undefined value, if order response DTO dont have price", () => {
      orderResponseDTO.price = undefined;
      order = new OrderDomain(orderResponseDTO);

      expect(order.priceValue).toEqual(undefined);
    });

    it("should have undefined value, if order response DTO have zero price", () => {
      orderResponseDTO.price = 0;
      order = new OrderDomain(orderResponseDTO);

      expect(order.priceValue).toEqual(undefined);
    });
  });

  describe("phoneValues", () => {
    it("should have correct phones", () => {
      expect(order.phoneValues).toEqual([
        `+7 ${orderResponseDTO.agencyPhones}`,
      ]);
    });

    it("should have undefined value, if order response DTO dont have phones", () => {
      orderResponseDTO.agencyPhones = undefined;
      order = new OrderDomain(orderResponseDTO);

      expect(order.phoneValues).toEqual(undefined);
    });

    it("should have undefined value, if order response DTO have empty phones array", () => {
      orderResponseDTO.agencyPhones = [];
      order = new OrderDomain(orderResponseDTO);

      expect(order.phoneValues).toEqual(undefined);
    });
  });
});
