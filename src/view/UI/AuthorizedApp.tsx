import { FC, lazy, Suspense, useState } from "react";
import { constants } from "router5";
import { useTitle } from "./hooks/useTitle";
import { useRoute } from "react-router5";
import { observer } from "mobx-react-lite";

import { LoadingScreen } from "./components/common/LoadingScreen";
import { Header } from "./components/common/Header";
import { SideBar } from "./components/common/SideBar";
import Body from "./components/common/Body";
import { useViewModel } from "./hooks/useViewModel";
import { IUserVM } from "../viewModels/User/types";

const AgencyPage = lazy(() => import("./pages/agency"));
const AgencyListPage = lazy(() => import("./pages/agencies"));
const DashboardPage = lazy(() => import("./pages/dashboard"));
const NotFoundPage = lazy(() => import("./pages/notFound"));

const pages = {
  agencies: <AgencyListPage />,
  "agencies.agency": <AgencyPage />,
  dashboard: <DashboardPage />,
  [constants.UNKNOWN_ROUTE]: <NotFoundPage />,
};

export const AuthorizedApp: FC = observer(() => {
  const [open, setOpen] = useState<boolean>(false);

  const { title } = useTitle();
  const user = useViewModel<IUserVM>("user");
  const {
    route: { name, params },
    router: { navigate },
  } = useRoute();

  const handleOpenCloseSidebar = () => {
    setOpen(!open);
  };

  const logout = async () => {
    await user.logout();

    navigate("login", { redirectName: name, redirectParams: params });
  };

  return (
    <>
      <Header openDrawer={handleOpenCloseSidebar} title={title} />

      <SideBar
        open={open}
        onClose={handleOpenCloseSidebar}
        onLogout={logout}
        loading={user.loading}
      />

      <Body>
        <Suspense fallback={<LoadingScreen />}>
          {pages[name] || pages[constants.UNKNOWN_ROUTE]}
        </Suspense>
      </Body>
    </>
  );
});

export default AuthorizedApp;
