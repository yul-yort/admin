import { rest } from "msw";
import { EEndpoints } from "src/constants";
import { IOrderItemResponseDTO } from "src/data/Order/entity/types";
import { getTimeout } from "../../utils/getTimeout";
import { orders } from "./orders";
import { v4 as uuid } from "uuid";
import { ECurrencyISO } from "../../../utils/getCurrency";

export const ordersHandlers = [
  rest.get(EEndpoints.ORDERS_LIST, (req, res, ctx) => {
    return res(
      ctx.json<IOrderItemResponseDTO[]>(orders),
      ctx.delay(getTimeout()),
      ctx.status(200)
    );
  }),

  rest.delete<string>(EEndpoints.ORDER_DELETE, (req, res, ctx) => {
    const id = JSON.parse(req.body);
    const result = orders.filter((order) => order.id !== id);
    const status = result.length !== orders.length ? 200 : 404;

    return res(
      ctx.json<IOrderItemResponseDTO[]>(result),
      ctx.delay(getTimeout()),
      ctx.status(status)
    );
  }),

  rest.post<string>(EEndpoints.ORDER_CREATE, (req, res, ctx) => {
    const body = JSON.parse(req.body);
    const { price, origin: originID, destination: destinationID } = body;

    //доступ к location

    const newOrder: IOrderItemResponseDTO = {
      id: uuid(),
      price,
      route: {
        id: uuid(),
        origin: {
          id: "",
          name: "",
          description: "",
        },
        destination: {
          id: "",
          name: "",
          description: "",
        },
      },
      agency: {
        id: "1",
        agencyName: "Заглушка",
        description: "Заглушка",
        phones: ["7 929 5797780"],
      },
      currencyISO: ECurrencyISO.RUB,
    };

    orders.push(newOrder);

    return res(ctx.json(orders), ctx.delay(getTimeout()), ctx.status(200));
  }),

  rest.post<string>(EEndpoints.ORDER_EDIT, (req, res, ctx) => {
    const body = JSON.parse(req.body);
    const { price, id } = body;
    // TODO: нужно найти более оптимальный вариант
    const result = orders.map((order) => {
      if (order.id === id) {
        order.price = price;
      }
      return order;
    });

    return res(ctx.json(result), ctx.delay(getTimeout()), ctx.status(200));
  }),
];
