import {
  ERouteNames,
  IOnActivateArgs,
  IOnActivateArgsWithParams,
  IRoutes,
} from "./types";
import { setDocumentTitle } from "../libs/utils";
import { IAgencyRequestParams } from "../data/Agency/entity/types";
import { IOrderItemRequestParams } from "../data/Order/entity/types";
import { CONSTANTS } from "src/constants";

const routes: IRoutes = [
  {
    name: ERouteNames.LOGIN,
    path: `${CONSTANTS.publicUrl}/login`,
    title: "Авторизация",
  },
  {
    name: ERouteNames.DASHBOARD,
    path: CONSTANTS.publicUrl || "/",
    title: "Dashboard",
    auth: true,
  },
  {
    name: ERouteNames.AGENCIES,
    path: `${CONSTANTS.publicUrl}/agencies`,
    title: "Список агентств",
    auth: true,
    onActivate: async (props?: IOnActivateArgs): Promise<void> => {
      if (!props) return;

      const { store } = props;
      store.agency.getList();
    },
    children: [
      {
        name: ERouteNames.AGENCY,
        path: `${CONSTANTS.publicUrl}/:id`,
        title: "Агенство",
        auth: true,
        onActivate: async (
          props?: IOnActivateArgsWithParams<IAgencyRequestParams>
        ): Promise<void> => {
          if (!props || !props?.params) return;

          const { store, params } = props;

          store.agency.getAgency(params).then(() => {
            setDocumentTitle(store.agency.agency?.name);
          });
          store.order.getListByAgencyId(params.id);
        },
      },
    ],
  },
  {
    name: ERouteNames.ORDERS,
    path: `${CONSTANTS.publicUrl}/orders`,
    title: "Поездки",
    auth: true,
    onActivate: async (
      props?: IOnActivateArgsWithParams<IOrderItemRequestParams>
    ): Promise<void> => {
      if (!props) {
        return;
      }

      const { store, params } = props;

      store.order.getList(params);
    },
  },
  {
    name: ERouteNames.LOCALITIES,
    path: `${CONSTANTS.publicUrl}/localities`,
    title: "Населенные пункты",
    auth: true,
    onActivate: async (props?: IOnActivateArgs): Promise<void> => {
      if (!props) {
        return;
      }

      const { store } = props;

      store.locality.getList();
    },
  },
];

export default routes;
