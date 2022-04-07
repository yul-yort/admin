import { FC, lazy, Suspense, useState } from "react";
import { constants } from "router5";
import { useTitle } from "./hooks/useTitle";
import { useRoute } from "react-router5";

import { LoadingScreen } from "./components/common/LoadingScreen";
import { Header } from "./components/common/Header";
import { SideBar } from "./components/common/SideBar";
import Body from "./components/common/Body";

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

export const AuthorizedApp: FC = () => {
  const title = useTitle();
  const [open, setOpen] = useState<boolean>(false);

  const {
    route: { name },
  } = useRoute();

  const handleOpenCloseSidebar = () => {
    setOpen(!open);
  };

  return (
    <>
      <Header openDrawer={handleOpenCloseSidebar} title={title} />

      <SideBar open={open} onClose={handleOpenCloseSidebar} />

      <Body>
        <Suspense fallback={<LoadingScreen />}>
          {pages[name] || pages[constants.UNKNOWN_ROUTE]}
        </Suspense>
      </Body>
    </>
  );
};

export default AuthorizedApp;
