import { rest } from "msw";
import { IAgencyResponseDTO } from "../../data/entities/Agency/types";
import { agencies } from "./data/agencies";
import { getTimeout } from "./utils/getTimeout";
import { EEndpoints } from "../../constants/Endpoints";

export const handlers = [
  rest.get(EEndpoints.AGENCY, (req, res, ctx) => {
    return res(
      ctx.json<IAgencyResponseDTO>(agencies[0]),
      ctx.delay(getTimeout()),
      ctx.status(200)
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
];
