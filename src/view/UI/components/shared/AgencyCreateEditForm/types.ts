import { IAgencyEntity } from "../../../../../data/entities/Agency/types";

export interface IAgencyCreateEditForm {
  onClose: () => void;
  onSave: () => Promise<void>;
}

export interface ICreateOrEditAgencyFormFields
  extends Pick<
    IAgencyEntity,
    "id" | "agencyName" | "description" | "createDate"
  > {
  phones: IFormPhone[];
}

export interface IFormPhone {
  value: string;
}
