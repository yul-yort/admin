import { FC, lazy, Suspense, useEffect, useState } from "react";
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

  const { title } = useTitle();
  const adminVM = useViewModel("admin");
  const appVM = useViewModel("app");

  const {
    route: { name, params },
    router: { navigate },
  } = useRoute();

  useEffect(() => {
    adminVM.getAdmin();
  }, []);

  const handleOpenCloseSidebar = () => {
    setOpen(!open);
  };

  const logout = async () => {
    await adminVM.logout();

    navigate("login", { redirectName: name, redirectParams: params });
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
