import { IAgencyService } from "../data/services/Agency/types";
import { IAgencyRepository } from "../data/repositories/Agency/types";
import { IAgencyVM } from "../view/viewModels/Agency/types";
import { IApi } from "../libs/api/types";
import { Agency } from "../data/entities/Agency";
import { INotificationsVM } from "../view/viewModels/types";

export interface ILibs {
  api?: IApi;
}
export interface IStoreLibs extends Required<ILibs> {}

export interface IDomains {
  agency?: Agency;
}

export interface IStoreDomains extends Required<IDomains> {}

export interface IServices {
  agency?: IAgencyService;
}

export interface IStoreServices extends Required<IServices> {}

export interface IRepositories {
  agency?: IAgencyRepository;
}

export interface IStoreRepositories extends Required<IRepositories> {}

export interface IViewModels {
  agency?: IAgencyVM;
  notifications?: INotificationsVM;
}

export interface IStoreViewModels extends Required<IViewModels> {}
