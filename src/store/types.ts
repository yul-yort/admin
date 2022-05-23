import { IAgencyService } from "../data/services/Agency/types";
import { IAgencyRepository } from "../data/repositories/Agency/types";
import { IAgencyVM } from "../view/viewModels/Agency/types";
import { IApi } from "../libs/api/types";
import { INotificationsVM } from "../view/viewModels/types";
import { IUserService } from "../data/services/User/types";
import { IUserRepository } from "../data/repositories/User/types";
import { IUserVM } from "../view/viewModels/User/types";
import { IOrderVM } from "../view/viewModels/Order/types";
import { IOrderService } from "../data/services/Order/types";
import { IOrderRepository } from "../data/repositories/Order/types";
import { ILocalityRepository } from "../data/repositories/Locality/types";
import { ILocalityService } from "../data/services/Locality/types";
import { ILocalityVM } from "../view/viewModels/Locality/types";

export interface ILibs {
  api?: IApi;
}
export interface IStoreLibs extends Required<ILibs> {}

export interface IRepositories {
  agency?: IAgencyRepository;
  user?: IUserRepository;
  order?: IOrderRepository;
  locality?: ILocalityRepository;
}

export interface IStoreRepositories extends Required<IRepositories> {}

export interface IServices {
  agency?: IAgencyService;
  user?: IUserService;
  order?: IOrderService;
  locality?: ILocalityService;
}

export interface IStoreServices extends Required<IServices> {}

export interface IViewModels {
  agency?: IAgencyVM;
  notifications?: INotificationsVM;
  user?: IUserVM;
  order?: IOrderVM;
  locality?: ILocalityVM;
}

export interface IStoreViewModels extends Required<IViewModels> {}
