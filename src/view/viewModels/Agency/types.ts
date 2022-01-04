import { IBaseVM, IError } from "../types";
import {
  IAgencyRequestEditParams,
  IAgencyEntity,
  IAgencyRequestParams,
} from "../../../data/entities/Agency/types";

export interface IAgencyVM extends IBaseVM {
  agency: IAgencyEntity | null;
  editLoading: boolean;
  editError: IError | null;

  getAgency: (params: IAgencyRequestParams) => Promise<void>;
  editAgency: (params: IAgencyRequestEditParams) => Promise<void>;

  setEditError: (err: unknown) => void;
  unsetEditError: () => void;
}
