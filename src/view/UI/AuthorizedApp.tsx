import { FC, lazy, Suspense, useState } from "react";
import { constants } from "router5";
import { useRoute } from "react-router5";
import { observer } from "mobx-react-lite";

import { LoadingScreen, Header, SideBar, Body } from "./components/common";
import { useViewModel, useTitle } from "./hooks";
import { IUserVM } from "../viewModels/User/types";
import { IAppVM } from "../viewModels/App/types";

const NotFoundPage = lazy(() => import("./pages/notFound"));
const AgencyPage = lazy(() => import("./pages/agency"));
const AgencyListPage = lazy(() => import("./pages/agencies"));
const DashboardPage = lazy(() => import("./pages/dashboard"));
const OrdersPage = lazy(() => import("./pages/orders"));
const LocalitiesPage = lazy(() => import("./pages/localities"));

const pages = {
  agencies: <AgencyListPage />,
  "agencies.agency": <AgencyPage />,
  dashboard: <DashboardPage />,
  orders: <OrdersPage />,
  localities: <LocalitiesPage />,
  [constants.UNKNOWN_ROUTE]: <NotFoundPage />,
};

export const AuthorizedApp: FC = observer(() => {
  const [open, setOpen] = useState<boolean>(false);

  const { title } = useTitle();
  const userVM = useViewModel<IUserVM>("user");
  const appVM = useViewModel<IAppVM>("app");

  const {
    route: { name, params },
    router: { navigate },
  } = useRoute();

  const handleOpenCloseSidebar = () => {
    setOpen(!open);
  };

  const logout = async () => {
    await userVM.logout();

    navigate("login", { redirectName: name, redirectParams: params });
  };

  return (
    <>
      <Header
        openDrawer={handleOpenCloseSidebar}
        title={title}
        user={userVM.user}
      />

      <Body theme={appVM.theme}>
        <SideBar
          theme={appVM.theme}
          onSetTheme={appVM.setTheme}
          open={open}
          onClose={handleOpenCloseSidebar}
          onLogout={logout}
          loading={userVM.loading}
        />

        <Suspense fallback={<LoadingScreen />}>
          {pages[name] || pages[constants.UNKNOWN_ROUTE]}
        </Suspense>
      </Body>
    </>
  );
});

export default AuthorizedApp;
