import { IAgencyVM } from "src/view/viewModels/Agency/types";
import { IAgencyItemEntity } from "../../../../../../data/entities/Agency/types";

export interface ITable {
  loading: boolean;
  agencies: IAgencyItemEntity[];
  createAgency: IAgencyVM["createAgency"];
}
