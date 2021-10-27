import { IRoutes } from "./types";

const routes: IRoutes = [
  { name: "dashboard", path: "/", title: "Dashboard" },
  {
    name: "agencies",
    path: "/agencies",
    title: "Агенства",
    children: [
      {
        name: "agency",
        path: "/:id",
        title: "Агенство",
        onActivate: ({ agency }, params) => {
          if (!params) return;

          return agency.getAgency(params);
        },
      },
    ],
  },
];

export default routes;
