import { FieldErrors } from "react-hook-form/dist/types/errors";
import { UseFormRegister } from "react-hook-form/dist/types/form";
import { IUserVM } from "src/view/viewModels/User/types";

export interface IInput {
  isSubmitting: boolean;
  errors: FieldErrors<IFormValues>;
  register: UseFormRegister<IFormValues>;
}
export interface IFormValues {
  login: string;
  password: string;
}

export interface IStatePasswordInput {
  password: string;
  showPassword: boolean;
}

export interface IFormButton {
  isSubmitting: boolean;
  user: IUserVM;
}
