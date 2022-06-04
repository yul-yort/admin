import { rest } from "msw";
import { EEndpoints } from "../../../../constants/Endpoints";
import { getTimeout } from "../../utils/getTimeout";
import { ILocalityDTO } from "../../../../data/Locality/entity/types";
import { localities } from "./localities";

export const localitiesHandlers = [
  rest.get(EEndpoints.LOCALITY_LIST, (req, res, ctx) => {
    return res(
      ctx.json<ILocalityDTO[]>(localities),
      ctx.delay(getTimeout()),
      ctx.status(200)
    );
  }),
];
