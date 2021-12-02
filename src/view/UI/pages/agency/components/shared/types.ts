import {
  FieldArrayWithId,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

export interface IFormFields {
  agencyName: string;
  description: string;
  phones: IFormPhone[];
}

export interface IFormPhone {
  value: string;
}

export interface IFormData {
  isSubmitting: boolean;
  errors: FieldErrors<IFormFields>;
  register: UseFormRegister<IFormFields>;
  fields: FieldArrayWithId<IFormFields>[];
  remove: (index?: number | number[]) => void;
  append: (value: IFormPhone) => void;
}
