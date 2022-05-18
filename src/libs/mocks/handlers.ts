import { rest } from "msw";
import {
  IAgencyItemResponseDTO,
  IAgencyResponseDTO,
} from "../../data/entities/Agency/types";
import { agencies, orders } from "./data";
import { getTimeout } from "./utils/getTimeout";
import { EEndpoints } from "../../constants/Endpoints";
import { getAuthCookie } from "./utils/getAuthCookie";
import { v4 as uuid } from "uuid";
import { IOrderItemResponseDTO } from "../../data/entities/Order/types";

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
    const body = JSON.parse(req.body);
    const result: IAgencyResponseDTO | {} =
      agencies.find((agency, index) => {
        if (agency.id === body.id) {
          agencies[index] = { ...agency, ...body };

          return true;
        }
        return false;
      }) || {};
    let status = Object.keys(result).length ? 200 : 404;

    return res(
      ctx.json<IAgencyResponseDTO>({ ...result, ...body }),
      ctx.delay(getTimeout()),
      ctx.status(status)
    );
  }),

  rest.delete<string>(EEndpoints.AGENCY_DELETE, (req, res, ctx) => {
    const body = JSON.parse(req.body);
    const result: IAgencyResponseDTO | {} =
      agencies.find((agency, index) => {
        if (agency.id === body.id) {
          agencies.splice(index, 1);

          return true;
        }
        return false;
      }) || {};
    let status = Object.keys(result).length ? 200 : 404;

    return res(
      ctx.json<IAgencyResponseDTO | {}>(result),
      ctx.delay(getTimeout()),
      ctx.status(status)
    );
  }),

  rest.get(EEndpoints.AGENCY_LIST, (req, res, ctx) => {
    return res(
      ctx.json<IAgencyItemResponseDTO[]>(agencies),
      ctx.delay(getTimeout()),
      ctx.status(200)
    );
  }),

  rest.post<string>(EEndpoints.AGENCY_CREATE, (req, res, ctx) => {
    agencies.unshift({ id: uuid(), ...JSON.parse(req.body) });

    return res(
      ctx.json<IAgencyItemResponseDTO>(agencies[0]),
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

  rest.get(EEndpoints.ORDERS_LIST, (req, res, ctx) => {
    return res(
      ctx.json<IOrderItemResponseDTO[]>(orders),
      ctx.delay(getTimeout()),
      ctx.status(200)
    );
  }),
];
