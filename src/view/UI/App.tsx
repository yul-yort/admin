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
  const router = useRoute();
  const title = useTitle();

  const isUnauthorized = router.route.params.authorization === "false";

  let page: JSX.Element;

  switch (router.route.name) {
    case "agencies":
      page = <AgencyListPage />;
      break;
    case "agencies.agency":
      page = <AgencyPage />;
      break;
    case "dashboard":
      page = <DashboardPage />;
      break;

    case constants.UNKNOWN_ROUTE:
    default:
      page = <NotFoundPage />;
  }

  if (isUnauthorized) {
    page = <div>Страница авторизации</div>;
  }

  const handleOpenSidebar = () => {
    setOpen(true);
  };

  const handleCloseSidebar = () => {
    setOpen(false);
  };

  return (
    <>
      <Header openDrawer={handleOpenSidebar} title={title} />

      <SideBar
        isUnauthorized={isUnauthorized}
        open={open}
        onClose={handleCloseSidebar}
      />

      <Body>
        <Suspense fallback={<LoadingScreen />}>{page}</Suspense>
      </Body>
    </>
  );
};

export default App;
