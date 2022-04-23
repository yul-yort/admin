import { IAgencyVM } from "src/view/viewModels/Agency/types";
import { IAgencyItemEntity } from "../../../../../../data/entities/Agency/types";

export interface ITable {
  modalLoading: boolean;
  isLoadingItem: (id: ID) => boolean;
  agencies: IAgencyItemEntity[];
  createAgency: IAgencyVM["createAgency"];
}
