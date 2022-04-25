import { IAgencyEntity } from "../../../../../../data/entities/Agency/types";

export interface IAdditionalInfo extends Omit<IAgencyEntity, "id"> {
  handleEdit: () => void;
}
