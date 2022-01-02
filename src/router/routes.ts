import { IRoutes } from "./types";

const routes: IRoutes = [
  { name: "dashboard", path: "/", title: "Dashboard" },
  {
    name: "login",
    path: "/login",
    title: "Авторизация",
    onActivate: async () => {
      // if (!store.user?.authorization) {
      //   router.navigateToDefault();
      // }
    },
  },
  {
    name: "agencies",
    path: "/agencies",
    title: "Список агентств",
    children: [
      {
        name: "agency",
        path: "/:id",
        title: "Агенство",
        // @ts-ignore TODO поправить типы
        onActivate: async ({ store, params }) => {
          if (!params) return;

          await store.agency.getAgency(params);

          document.title = store.agency.agency?.agencyName || document.title;
        },
      },
    ],
  },
];

export default routes;
