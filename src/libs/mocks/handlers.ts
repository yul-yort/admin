import { rest } from "msw";
import {
  IAgencyItemResponseDTO,
  IAgencyResponseDTO,
} from "../../data/entities/Agency/types";
import { agencies, localities, orders } from "./data";
import { getTimeout } from "./utils/getTimeout";
import { EEndpoints } from "../../constants/Endpoints";
import { getAuthCookie } from "./utils/getAuthCookie";
import { v4 as uuid } from "uuid";
import { IOrderItemResponseDTO } from "../../data/entities/Order/types";
import {
  ILocalityDTO,
  ILocalityEntity,
} from "../../data/entities/Locality/types";
import { ECurrencyISO } from "../utils/getCurrency";

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

  rest.get(EEndpoints.LOCALITY_LIST, (req, res, ctx) => {
    return res(
      ctx.json<ILocalityDTO[]>(localities),
      ctx.delay(getTimeout()),
      ctx.status(200)
    );
  }),

  rest.post<string>(EEndpoints.ORDER_CREATE, (req, res, ctx) => {
    const body = JSON.parse(req.body);
    const { price, origin: originID, destination: destinationID } = body;

    //доступ к location
    const originData = localities.find(({ id }) => id === originID);
    const destinationData = localities.find(({ id }) => id === destinationID);

    const newOrder = {
      id: "test",
      price,
      route: {
        id: "route",
        origin: {
          id: originData && originData.id,
          name: originData && originData.name,
          description: originData && originData.description,
        },
        destination: {
          id: destinationData && destinationData.id,
          name: destinationData && destinationData.name,
          description: destinationData && destinationData.description,
        },
      },
    };

    // orders.push(newOrder)

    return res(ctx.json(newOrder), ctx.delay(getTimeout()), ctx.status(200));
  }),
];
