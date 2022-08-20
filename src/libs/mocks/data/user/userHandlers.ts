import { rest } from "msw";
import { EEndpoints } from "src/constants";
import { getTimeout } from "../../utils/getTimeout";
import { getAuthCookie } from "../../utils/getAuthCookie";

export const userHandlers = [
  rest.post<string>(EEndpoints.LOGIN, (req, res, ctx) => {
    return res(
      ctx.json({}),
      ctx.delay(getTimeout()),
      ctx.status(200),
      ctx.cookie(...getAuthCookie("login"))
    );
  }),

  rest.post<string>(EEndpoints.LOGOUT, (req, res, ctx) => {
    return res(
      ctx.json({}),
      ctx.delay(getTimeout()),
      ctx.status(200),
      ctx.cookie(...getAuthCookie("logout"))
    );
  }),
];
