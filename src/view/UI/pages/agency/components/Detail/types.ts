import { IAgencyVM } from "../../../../../viewModels/Agency/types";
import { IAgencyEntity } from "../../../../../../data/entities/Agency/types";

export interface IDetail
  extends Pick<IAgencyVM, "editAgency" | "editLoading" | "deleteAgency"> {
  agency: IAgencyEntity;
}
