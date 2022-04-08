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

  rest.post<string>(EEndpoints.LOGIN, (req, res, ctx) => {
    let expiresDate: Date = new Date();
    expiresDate.setDate(new Date().getDate() + 1);

    return res(
      ctx.json({}),
      ctx.delay(getTimeout()),
      ctx.status(200),
      ctx.cookie("auth-token", "abc-123", {
        expires: expiresDate,
        path: "/",
      })
    );
  }),
];
