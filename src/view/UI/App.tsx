import { FC, lazy, Suspense, useState } from "react";
import { useRoute } from "react-router5";
import { constants } from "router5";

import { LoadingScreen } from "./components/common/LoadingScreen";
import { Header } from "./components/common/Header";
import { SideBar } from "./components/common/SideBar";
import Body from "./components/common/Body";
import { useTitle } from "./hooks/useTitle";

const AgencyPage = lazy(() => import("./pages/agency"));
const AgencyListPage = lazy(() => import("./pages/agencies"));
const DashboardPage = lazy(() => import("./pages/dashboard"));
const NotFoundPage = lazy(() => import("./pages/notFound"));

export const App: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const {
    route: { name },
  } = useRoute();
  const title = useTitle();

  const pages = {
    agencies: <AgencyListPage />,
    "agencies.agency": <AgencyPage />,
    dashboard: <DashboardPage />,
    [constants.UNKNOWN_ROUTE]: <NotFoundPage />,
  };

  const handleOpenCloseSidebar = () => {
    setOpen(!open);
  };

  return (
    <>
      <Header openDrawer={handleOpenCloseSidebar} title={title} />

      <SideBar open={open} onClose={handleOpenCloseSidebar} />

      <Body>
        <Suspense fallback={<LoadingScreen />}>
          {pages[name] || <NotFoundPage />}
        </Suspense>
      </Body>
    </>
  );
};

export default App;
