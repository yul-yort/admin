import { IAgencyVM } from "src/view/viewModels/Agency/types";
import { IAgencyEntity } from "../../../../../../data/Agency/entity/types";

export interface ITable {
  modalLoading: boolean;
  isLoadingItem: (id: ID) => boolean;
  agencies: IAgencyEntity[];
  createAgency: IAgencyVM["createAgency"];
  searchAgency: (value: string) => void;
}
