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

const pages = {
  agencies: <AgencyListPage />,
  "agencies.agency": <AgencyPage />,
  dashboard: <DashboardPage />,
  [constants.UNKNOWN_ROUTE]: <NotFoundPage />,
};

export const App: FC = () => {
  const title = useTitle();
  const [open, setOpen] = useState<boolean>(false);
  const {
    route: { name },
  } = useRoute();
  const routeName = router.route.name;
  const isUnauthorized = routeName === "login";

  const handleOpenCloseSidebar = () => {
    setOpen(!open);
  };

  return (
    <>
      <Header openDrawer={handleOpenCloseSidebar} title={title} />

      <SideBar isUnauthorized={isUnauthorized} open={open} onClose={handleOpenCloseSidebar} />

      <Body>
        <Suspense fallback={<LoadingScreen />}>
          {pages[name] || pages[constants.UNKNOWN_ROUTE]}
        </Suspense>
      </Body>
    </>
  );
};

export default App;
