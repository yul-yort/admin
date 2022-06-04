import { IAgencyVM } from "src/view/viewModels/Agency/types";
import { IAgencyItemEntity } from "../../../../../../data/Agency/entity/types";

export interface ITable {
  modalLoading: boolean;
  isLoadingItem: (id: ID) => boolean;
  agencies: IAgencyItemEntity[];
  createAgency: IAgencyVM["createAgency"];
  searchAgency: (value: string) => void;
}
