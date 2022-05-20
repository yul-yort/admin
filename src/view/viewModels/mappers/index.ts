import { IError } from "../types";

export const errorMapper = (err: unknown): IError => {
  let error: IError;

  if (err instanceof Error) {
    error = {
      name: err.name,
      message: err.message,
    };
  } else if (typeof err === "string") {
    error = {
      name: "Неопознанная ошибка",
      message: err,
    };
  } else {
    const newError = new Error("Неопознанная ошибка");

    error = {
      name: newError.name,
      message: newError.message,
    };
  }

  return error;
};
