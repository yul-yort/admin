import { BaseVM } from "../BaseVM";
import { IAgencyVM } from "./types";
import {
  IAgencyEntity,
  IAgencyRequestParams,
} from "../../../data/entities/Agency/types";
import { IAgencyService } from "../../../data/services/Agency/types";
import { action, makeObservable, observable } from "mobx";

export class AgencyVM extends BaseVM implements IAgencyVM {
  agency: IAgencyEntity | null = null;

  constructor(private service: IAgencyService) {
    super();
    makeObservable(this, {
      agency: observable,
      getAgency: action,
    });
  }

  async getAgency(params: IAgencyRequestParams) {
    this.setLoading();
    this.unsetError();

    try {
      this.agency = await this.service.getAgency(params);
    } catch (err) {
      this.setError(err);
    } finally {
      this.unsetLoading();
    }
  }
}
