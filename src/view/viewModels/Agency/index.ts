import { BaseVM } from "../BaseVM";
import { IAgencyVM } from "./types";
import {
  IAgencyRequestEditParams,
  IAgencyEntity,
  IAgencyRequestParams,
} from "../../../data/entities/Agency/types";
import { IAgencyService } from "../../../data/services/Agency/types";
import { action, makeObservable, observable } from "mobx";
import { errorMapper } from "../mappers";
import { IError } from "../types";

export class AgencyVM extends BaseVM implements IAgencyVM {
  editLoading: boolean = false;
  editError: IError | null = null;
  agency: IAgencyEntity | null = null;

  constructor(private service: IAgencyService) {
    super();
    makeObservable(this, {
      agency: observable,
      editError: observable,
      editLoading: observable,
      getAgency: action,
      editAgency: action,
    });
  }

  getAgency = async (params: IAgencyRequestParams) => {
    this.setLoading();
    this.unsetError();

    try {
      this.agency = await this.service.getAgency(params);
    } catch (err) {
      this.setError(err);
    } finally {
      this.unsetLoading();
    }
  };

  editAgency = async (params: IAgencyRequestEditParams) => {
    this.editLoading = true;
    this.unsetEditError();

    try {
      this.agency = await this.service.editAgency(params);
    } catch (err) {
      this.setEditError(err);
    } finally {
      this.editLoading = false;
    }
  };

  setEditError = (err: unknown) => {
    this.editError = errorMapper(err);
    throw err;
  };

  unsetEditError = () => {
    this.editError = null;
  };
}
