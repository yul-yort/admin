import { IAgencyEntity } from "../../../../../../data/Agency/entity/types";

export interface IAdditionalInfo extends Omit<IAgencyEntity, "id"> {
  handleEdit: () => void;
}
