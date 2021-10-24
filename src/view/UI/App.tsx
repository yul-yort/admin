import { FC, lazy, Suspense, useState } from "react";
import { useRoute } from "react-router5";
import { constants } from "router5";
import { LoadingScreen } from "./components/LoadingScreen";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import Body from "./components/Body";

const AgencyPage = lazy(() => import("./pages/agency"));
const DashboardPage = lazy(() => import("./pages/dashboard"));
const NotFoundPage = lazy(() => import("./pages/notFound"));

export const App: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRoute();

  let page: JSX.Element;

  switch (router.route.name) {
    case "agency":
      page = <AgencyPage />;
      break;
    case "dashboard":
      page = <DashboardPage />;
      break;

      // TODO не работает
    case constants.UNKNOWN_ROUTE:
    default:
      page = <NotFoundPage />;
  }

  const handleOpenSidebar = () => {
    setOpen(true);
  };

  const handleCloseSidebar = () => {
    setOpen(false);
  };

  return (
    <>
      <Header onOpen={handleOpenSidebar} />

      <SideBar
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
