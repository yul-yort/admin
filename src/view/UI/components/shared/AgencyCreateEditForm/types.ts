import { IAgencyEntity } from "../../../../../data/Agency/entity/types";

export interface IAgencyCreateEditForm {
  onClose: () => void;
  onSave: () => Promise<void>;
}

//TODO учесть, что при создании нет id
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
