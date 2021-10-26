import { rest } from "msw";
import { IOrderResponseDTO } from "../../data/domainModels/Order/types";
import { orders } from "./data/orders";
import { getTimeout } from "./utils/getTimeout";

export const handlers = [
  rest.get("/agencies", (req, res, ctx) => {
    return res(
      ctx.json<IOrderResponseDTO[]>(orders),
      ctx.delay(getTimeout()),
      ctx.status(200)
    );
  }),
];
