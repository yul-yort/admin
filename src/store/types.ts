import { IAgencyService } from "../data/Agency/service/types";
import { IAgencyRepository } from "../data/Agency/repository/types";
import { IAgencyVM } from "../view/viewModels/Agency/types";
import { IApi } from "../libs/api/types";
import { INotificationsVM } from "../view/viewModels/types";
import { IAdminService } from "../data/Admin/service/types";
import { IAdminRepository } from "../data/Admin/repository/types";
import { IAdminVM } from "../view/viewModels/Admin/types";
import { IOrderVM } from "../view/viewModels/Order/types";
import { IOrderService } from "../data/Order/service/types";
import { IOrderRepository } from "../data/Order/repository/types";
import { ILocalityRepository } from "../data/Locality/repository/types";
import { ILocalityService } from "../data/Locality/service/types";
import { ILocalityVM } from "../view/viewModels/Locality/types";
import { IAppVM } from "../view/viewModels/App/types";

export interface ILibs {
  api?: IApi;
}
export type IStoreLibs = Required<ILibs>;

export interface IRepositories {
  agency?: IAgencyRepository;
  admin?: IAdminRepository;
  order?: IOrderRepository;
  locality?: ILocalityRepository;
}

export type IStoreRepositories = Required<IRepositories>;

export interface IServices {
  agency?: IAgencyService;
  admin?: IAdminService;
  order?: IOrderService;
  locality?: ILocalityService;
}

export type IStoreServices = Required<IServices>;

export interface IViewModels {
  agency?: IAgencyVM;
  notifications?: INotificationsVM;
  admin?: IAdminVM;
  order?: IOrderVM;
  locality?: ILocalityVM;
  app?: IAppVM;
}

export type IStoreViewModels = Required<IViewModels>;
