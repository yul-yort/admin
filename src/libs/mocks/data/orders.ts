import { IOrderItemResponseDTO } from "../../../data/entities/Order/types";
import { ECurrencyISO } from "../../utils/getCurrency";

export const orders: IOrderItemResponseDTO[] = [
  {
    id: "asdf",
    route: {
      id: "asdfasd",
      origin: {
        id: "asdf",
        name: "Баймак",
      },
      destination: {
        id: "223m2",
        name: "Сибай",
        description: "description description description",
      },
    },
    agency: {
      id: "1",
      agencyName: "Зеленоглазое такси",
      description: "описание",
      phones: ["+79999999999", "80000000000"],
    },
    price: 1000,
    currencyISO: ECurrencyISO.RUB,
  },
  {
    id: "234l234l2",
    route: {
      id: "8789as9df8",
      origin: {
        id: "5k6764k5",
        name: "Уфа",
        description: "7da9sdf79abfasf as98d7f9 asdf97asd9f a7",
      },
      destination: {
        id: "223m2",
        name: "Сибай",
      },
      waypoints: [
        {
          id: "098",
          name: "waypoints 1",
        },
        {
          id: "677",
          name: "waypoints 2",
        },
      ],
    },
    agency: {
      id: "2",
      agencyName: "Давай подвезём!",
    },
    price: 1500,
    currencyISO: ECurrencyISO.RUB,
  },

  {
    id: "234l23234l2",
    price: 1,
    route: {
      id: "8789as9df8",
      origin: {
        id: "asdf",
        name: "Баймак",
        description: "7da9sdf79abfasf as98d7f9 asdf97asd9f a7",
      },
      destination: {
        id: "5k6764k5",
        name: "Уфа",
      },
      waypoints: [
        {
          id: "098",
          name: "waypoints 1",
        },
        {
          id: "677",
          name: "waypoints 2",
        },
      ],
    },
    agency: {
      id: "3",
      agencyName: "По пути!",
      phones: ["+79999999999"],
    },
    currencyISO: ECurrencyISO.RUB,
  },
];
