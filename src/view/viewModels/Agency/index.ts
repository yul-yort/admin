import { BaseVM } from "../BaseVM";
import { IAgencyVM } from "./types";
import {
  IAgencyRequestEditParams,
  IAgencyEntity,
  IAgencyRequestParams,
  IAgencyRequestDeleteParams,
} from "../../../data/entities/Agency/types";
import { IAgencyService } from "../../../data/services/Agency/types";
import { action, makeObservable, observable } from "mobx";

export class AgencyVM extends BaseVM implements IAgencyVM {
  editLoading: boolean = false;
  agency: IAgencyEntity | null = null;

  constructor(private service: IAgencyService) {
    super();
    makeObservable(this, {
      agency: observable,
      editLoading: observable,
      getAgency: action,
      editAgency: action,
    });
  }

  getAgency = async (params: IAgencyRequestParams) => {
    this.setLoading();

    try {
      this.agency = await this.service.getAgency(params);
    } catch (err) {
      throw err;
    } finally {
      this.unsetLoading();
    }
  };

  editAgency = async (params: IAgencyRequestEditParams) => {
    this.editLoading = true;

    try {
      this.agency = await this.service.editAgency(params);
    } catch (err) {
      throw err;
    } finally {
      this.editLoading = false;
    }
  };

  deleteAgency = async (params: IAgencyRequestDeleteParams) => {
    this.setLoading();

    try {
      await this.service.deleteAgency(params);
      this.agency = null;
    } catch (err) {
      throw err;
    } finally {
      this.unsetLoading();
    }
  };
}
