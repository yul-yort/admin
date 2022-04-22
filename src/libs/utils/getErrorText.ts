import { FieldErrors } from "react-hook-form/dist/types/errors";

const ErrorsDictionary: Record<string, string> = {
  required: "Обязательное поле",
  min: "Превышена максимальная длина",
  max: "Превышено максимальное значение",
  maxLength: "Превышена максимальная длина",
  minLength: "Меньше допустимой длины",
  default: "Неопознанная ошибка",
};

export const getErrorText = (
  errors: FieldErrors = {},
  valuePath: string,
  index?: number
): string | undefined => {
  let error = errors[valuePath];

  if (error && index !== undefined) {
    error = error[index]?.value;
  }

  if (!error) {
    return void 0;
  }

  return error.message || ErrorsDictionary[error.type] || error.type;
};
