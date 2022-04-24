import { IRoutes } from "./types";
import { CONSTANTS } from "../constants/globalConstants";

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

          document.title = store.agency.agency?.agencyName || document.title;
        },
      },
    ],
  },
];

export default routes;
