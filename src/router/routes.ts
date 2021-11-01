import { IRoutes } from "./types";

const routes: IRoutes = [
  { name: "dashboard", path: "/", title: "Dashboard" },
  {
    name: "agencies",
    path: "/agencies",
    title: "Список агентств",
    children: [
      {
        name: "agency",
        path: "/:id",
        title: "Агенство",
        onActivate: async ({ agency }, params) => {
          if (!params) return;

          await agency.getAgency(params);

          document.title = agency.agency?.agencyName || document.title;
        },
      },
    ],
  },
];

export default routes;
