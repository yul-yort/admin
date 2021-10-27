import { rest } from "msw";
import { IAgencyResponseDTO } from "../../data/domainModels/Agency/types";
import { agencies } from "./data/agencies";
import { getTimeout } from "./utils/getTimeout";

export const handlers = [
  rest.get("/agency", (req, res, ctx) => {
    return res(
      ctx.json<IAgencyResponseDTO>(agencies[0]),
      ctx.delay(getTimeout()),
      ctx.status(200)
    );
  }),
];
