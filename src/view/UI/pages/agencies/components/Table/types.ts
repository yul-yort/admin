import { IAgencyVM } from "src/view/viewModels/Agency/types";
import { IAgencyEntity } from "../../../../../../data/Agency/entity/types";

export interface ITable {
  searchValue: string;
  modalLoading: boolean;
  isLoadingItem: (id: number) => boolean;
  agencies: IAgencyEntity[];
  createAgency: IAgencyVM["createAgency"];
  searchAgency: (value: string) => void;
}
