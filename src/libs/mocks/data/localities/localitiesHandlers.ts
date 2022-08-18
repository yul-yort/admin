import { rest } from "msw";
import { EEndpoints } from "src/constants";
import { getTimeout } from "../../utils/getTimeout";
import { ILocalityDTO } from "src/data/Locality/entity/types";
import { localities } from "./localities";
import { v4 as uuid } from "uuid";

export const localitiesHandlers = [
  rest.get(EEndpoints.LOCALITY_LIST, (req, res, ctx) => {
    return res(
      ctx.json<ILocalityDTO[]>(localities),
      ctx.delay(getTimeout()),
      ctx.status(200)
    );
  }),
  rest.post<string>(EEndpoints.LOCALITY_CREATE, (req, res, ctx) => {
    const body = JSON.parse(req.body);
    localities.push({ ...body, id: uuid() });

    return res(
      ctx.json<ILocalityDTO[]>(localities),
      ctx.delay(getTimeout()),
      ctx.status(200)
    );
  }),
];
