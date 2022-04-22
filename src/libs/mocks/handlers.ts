import { rest } from "msw";
import { IAgencyResponseDTO } from "../../data/entities/Agency/types";
import { agencies } from "./data/agencies";
import { getTimeout } from "./utils/getTimeout";
import { EEndpoints } from "../../constants/Endpoints";
import { getAuthCookie } from "./utils/getAuthCookie";

export const handlers = [
  rest.get(EEndpoints.AGENCY, (req, res, ctx) => {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    const result: IAgencyResponseDTO | {} =
      agencies.find((agency) => agency.id === id) || {};
    let status = Object.keys(result).length ? 200 : 404;

    return res(
      ctx.json<IAgencyResponseDTO | {}>(result),
      ctx.delay(getTimeout()),
      ctx.status(status)
    );
  }),

  rest.post<string>(EEndpoints.AGENCY_EDIT, (req, res, ctx) => {
    return res(
      ctx.json<IAgencyResponseDTO>({ ...agencies[0], ...JSON.parse(req.body) }),
      ctx.delay(getTimeout()),
      ctx.status(200)
    );
  }),

  rest.delete<string>(EEndpoints.AGENCY_DELETE, (req, res, ctx) => {
    return res(
      ctx.json<IAgencyResponseDTO>(agencies[0]),
      ctx.delay(getTimeout()),
      ctx.status(200)
    );
  }),

  rest.get(EEndpoints.AGENCY_LIST, (req, res, ctx) => {
    return res(
      ctx.json<IAgencyResponseDTO[]>(agencies),
      ctx.delay(getTimeout()),
      ctx.status(200)
    );
  }),

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
