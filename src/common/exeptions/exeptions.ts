import { IResponseError } from "./types";

class HTTPRequestError extends Error {
  statusCode: number;

  constructor({ statusCode, message }: IResponseError) {
    super(message);
    this.statusCode = statusCode;
  }
}

export { HTTPRequestError };
