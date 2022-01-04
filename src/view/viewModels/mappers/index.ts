import { IError } from "../types";

export const errorMapper = (err: unknown): IError => {
  let error: IError = {
    name: "",
    message: "",
  };

  if (err instanceof Error) {
    error = {
      name: err.name,
      message: err.message,
    };
  } else if (typeof err === "string") {
    error = {
      name: "Неопределенная ошибка",
      message: err,
    };
  } else {
    throw new Error("Не удалось распознать ошибку");
  }

  return error;
};
