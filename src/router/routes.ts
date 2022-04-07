import { IRoutes } from "./types";

const routes: IRoutes = [
  {
    name: "login",
    path: "/login",
    title: "Авторизация",
  },
  { name: "dashboard", path: "/", title: "Dashboard", auth: true },
  {
    name: "agencies",
    path: "/agencies",
    title: "Список агентств",
    auth: true,
    children: [
      {
        name: "agency",
        path: "/:id",
        title: "Агенство",
        auth: true,
        // @ts-ignore TODO поправить типы
        fetchData: async ({ store, params }) => {
          if (!params) return;

          await store.agency.getAgency(params);

          document.title = store.agency.agency?.agencyName || document.title;
        },
      },
    ],
  },
];

export default routes;
