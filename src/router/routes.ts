import { IOnActivateArgs, IOnActivateArgsWithParams, IRoutes } from "./types";
import { CONSTANTS } from "../constants";
import { setDocumentTitle } from "../libs/utils";
import { IAgencyRequestParams } from "../data/Agency/entity/types";
import { IOrderItemRequestParams } from "../data/Order/entity/types";

const routes: IRoutes = [
  {
    name: "login",
    path: "/login",
    title: "Авторизация",
  },
  {
    name: CONSTANTS.defaultRoute,
    path: "/",
    title: "Dashboard",
    auth: true,
  },
  {
    name: "agencies",
    path: "/agencies",
    title: "Список агентств",
    auth: true,
    onActivate: async (props?: IOnActivateArgs): Promise<void> => {
      if (!props) return;

      const { store } = props;
      await store.agency.getList();
    },
    children: [
      {
        name: "agency",
        path: "/:id",
        title: "Агенство",
        auth: true,
        onActivate: async (
          props?: IOnActivateArgsWithParams<IAgencyRequestParams>
        ): Promise<void> => {
          if (!props || !props?.params) return;

          const { store, params } = props;

          await store.agency.getAgency(params);
          setDocumentTitle(store.agency.agency?.agencyName);

          store.order.getListByAgencyId(params.id);
        },
      },
    ],
  },
  {
    name: "orders",
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

      await store.order.getList(params);
    },
  },
  {
    name: "localities",
    path: "/localities",
    title: "Населенные пункты",
    auth: true,
    onActivate: async (props?: IOnActivateArgs): Promise<void> => {
      if (!props) {
        return;
      }

      const { store } = props;

      await store.locality.getList();
    },
  },
];

export default routes;
