import { FC, lazy, Suspense, useState } from "react";
import { constants } from "router5";
import { useRoute } from "react-router5";
import { observer } from "mobx-react-lite";

import { LoadingScreen, Header, SideBar, Body } from "./components/common";
import { useViewModel, useTitle } from "./hooks";

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
  const { logout } = useViewModel("auth");

  const { title } = useTitle();
  const adminVM = useViewModel("admin");
  const appVM = useViewModel("app");

  const {
    route: { name },
  } = useRoute();

  const handleOpenCloseSidebar = () => {
    setOpen(!open);
  };

  return (
    <>
      <Header
        openDrawer={handleOpenCloseSidebar}
        title={title}
        admin={adminVM.admin}
      />

      <Body theme={appVM.theme}>
        <SideBar
          theme={appVM.theme}
          onSetTheme={appVM.setTheme}
          open={open}
          onClose={handleOpenCloseSidebar}
          onLogout={logout}
          loading={adminVM.loading}
        />

        <Suspense fallback={<LoadingScreen />}>
          {pages[name] || pages[constants.UNKNOWN_ROUTE]}
        </Suspense>
      </Body>
    </>
  );
});

export default AuthorizedApp;
