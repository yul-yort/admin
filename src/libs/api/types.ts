import { EEndpoints } from "../../constants/Endpoints";

export interface IApi {
  get<R, P = undefined>(path: EEndpoints, params?: P): Promise<R>;
  post<R, P>(path: EEndpoints, params?: P): Promise<R>;

  errorHandler(response: Response): void;
}
