import { IAgencyEntity } from "src/data/Agency/entity/types";

export interface IAgencyCreateEditForm {
  onClose: () => void;
  onSave: () => Promise<void>;
}

export interface ICreateOrEditAgencyFormFields
  extends Pick<IAgencyEntity, "agencyName" | "description" | "createdAt"> {
  phones: IFormPhone[];
}

export interface IFormPhone {
  value: string;
}
