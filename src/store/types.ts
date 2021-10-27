import { IAgencyService } from "../data/services/Agency/types";
import { IAgencyRepository } from "../data/repositories/Agency/types";
import { IAgencyVM } from "../view/viewModels/Agency/types";
import { IApi } from "../libs/api/types";
import { AgencyDomain } from "../data/domainModels/Agency";

export interface ILibs {
  api: IApi;
}

export interface IStoreDomains {
  agency: AgencyDomain;
}

export interface IStoreServices {
  agency: IAgencyService;
}

export interface IStoreRepositories {
  agency: IAgencyRepository;
}

export interface IStoreViewModels {
  agency: IAgencyVM;
}
