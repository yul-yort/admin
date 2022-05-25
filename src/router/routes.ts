import { IRoutes } from "./types";
import { CONSTANTS } from "../constants/globalConstants";
import { setDocumentTitle } from "../libs/utils";

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
    onActivate: async (props) => {
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
        onActivate: async (props) => {
          if (!props || !props.params) return;

          const { store, params } = props;

          await store.agency.getAgency(params);
          await store.locality.getList();

          setDocumentTitle(store.agency.agency?.agencyName);
        },
      },
    ],
  },
  {
    name: "orders",
    path: "/orders",
    title: "Поездки",
    auth: true,
    onActivate: async (props) => {
      if (!props) {
        return;
      }

      const { store, params } = props;

      await store.order.getList(params);
    },
  },
];

export default routes;
