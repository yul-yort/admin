import { FieldErrors } from "react-hook-form/dist/types/errors";
import { UseFormRegister } from "react-hook-form/dist/types/form";

export interface IInput {
  disabled: boolean;
  errors: FieldErrors<IFormValues>;
  register: UseFormRegister<IFormValues>;
}
export interface IFormValues {
  email: string;
  password: string;
}

export interface IFormButton {
  disabled: boolean;
  loading: boolean;
}
