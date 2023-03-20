import {
  ERouteNames,
  IOnActivateArgs,
  IOnActivateArgsWithParams,
  IRoutes,
} from "./types";
import { setDocumentTitle } from "../libs/utils";
import { IAgencyRequestParams } from "../data/Agency/entity/types";
import { IOrderItemRequestParams } from "../data/Order/entity/types";

const routes: IRoutes = [
  {
    name: ERouteNames.LOGIN,
    path: "/login",
    title: "Авторизация",
  },
  {
    name: ERouteNames.DASHBOARD,
    path: "/",
    title: "Dashboard",
    auth: true,
  },
  {
    name: ERouteNames.AGENCIES,
    path: "/agencies",
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
        path: "/:id",
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
    path: "/orders",
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
    path: "/localities",
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
