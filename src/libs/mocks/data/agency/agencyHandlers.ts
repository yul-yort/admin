import { rest } from "msw";
import { EEndpoints } from "../../../../constants";
import { IAgencyResponseDTO } from "../../../../data/Agency/entity/types";
import { getTimeout } from "../../utils/getTimeout";
import { v4 as uuid } from "uuid";
import { agencies } from "./agencies";

export const agencyHandlers = [
  rest.get(EEndpoints.AGENCY, (req, res, ctx) => {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    const result: IAgencyResponseDTO | Record<string, never> =
      agencies.find((agency) => agency.id === id) || {};
    const status = Object.keys(result).length ? 200 : 404;

    return res(
      ctx.json<IAgencyResponseDTO | unknown>(result),
      ctx.delay(getTimeout()),
      ctx.status(status)
    );
  }),

  rest.post<string>(EEndpoints.AGENCY_EDIT, (req, res, ctx) => {
    const body = JSON.parse(req.body);
    const result: IAgencyResponseDTO | Record<string, never> =
      agencies.find((agency, index) => {
        if (agency.id === body.id) {
          agencies[index] = { ...agency, ...body };

          return true;
        }
        return false;
      }) || {};
    const status = Object.keys(result).length ? 200 : 404;

    return res(
      ctx.json<IAgencyResponseDTO>({ ...result, ...body }),
      ctx.delay(getTimeout()),
      ctx.status(status)
    );
  }),

  rest.delete<string>(EEndpoints.AGENCY_DELETE, (req, res, ctx) => {
    const body = JSON.parse(req.body);
    const result: IAgencyResponseDTO | Record<string, never> =
      agencies.find((agency, index) => {
        if (agency.id === body.id) {
          agencies.splice(index, 1);

          return true;
        }
        return false;
      }) || {};
    const status = Object.keys(result).length ? 200 : 404;

    return res(
      ctx.json<IAgencyResponseDTO | unknown>(result),
      ctx.delay(getTimeout()),
      ctx.status(status)
    );
  }),

  rest.get(EEndpoints.AGENCY_LIST, (req, res, ctx) => {
    return res(
      ctx.json<IAgencyResponseDTO[]>(agencies),
      ctx.delay(getTimeout()),
      ctx.status(200)
    );
  }),

  rest.post<string>(EEndpoints.AGENCY_CREATE, (req, res, ctx) => {
    agencies.unshift({ id: uuid(), ...JSON.parse(req.body) });

    return res(
      ctx.json<IAgencyResponseDTO>(agencies[0]),
      ctx.delay(getTimeout()),
      ctx.status(200)
    );
  }),
];
