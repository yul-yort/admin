import { IAgencyEntity } from "../../../../../data/entities/Agency/types";

export interface IAgencyCreateEditForm {
  onClose: () => void;
  onSave: () => Promise<void>;
}

export interface IFormFields
  extends Pick<IAgencyEntity, "id" | "agencyName" | "description"> {
  phones: IFormPhone[];
}

export interface IFormPhone {
  value: string;
}
