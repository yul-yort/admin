import { FC, lazy, Suspense, useState } from "react";
import { useRoute } from "react-router5";
import { constants } from "router5";
import { Alert, Snackbar } from "@mui/material";
import { observer } from "mobx-react-lite";
import { LoadingScreen } from "./components/common/LoadingScreen";
import { Header } from "./components/common/Header";
import { SideBar } from "./components/common/SideBar";
import Body from "./components/common/Body";
import { useTitle } from "./hooks/useTitle";
import { useNotification } from "./hooks/useNotification";

const AgencyPage = lazy(() => import("./pages/agency"));
const AgencyListPage = lazy(() => import("./pages/agencies"));
const DashboardPage = lazy(() => import("./pages/dashboard"));
const NotFoundPage = lazy(() => import("./pages/notFound"));

export const App: FC = observer(() => {
  const { notification, removeNotification } = useNotification();

  const [open, setOpen] = useState<boolean>(false);
  const router = useRoute();
  const title = useTitle();

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

  const handleOpenSidebar = () => {
    setOpen(true);
  };

  const handleCloseSidebar = () => {
    setOpen(false);
  };

  return (
    <>
      {notification && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={!!notification}
          autoHideDuration={3000}
          onClose={removeNotification}
        >
          <Alert
            variant="filled"
            severity={notification.type}
            onClose={removeNotification}
          >
            {notification?.message}
          </Alert>
        </Snackbar>
      )}

      <Header openDrawer={handleOpenSidebar} title={title} />

      <SideBar open={open} onClose={handleCloseSidebar} />

      <Body>
        <Suspense fallback={<LoadingScreen />}>{page}</Suspense>
      </Body>
    </>
  );
});

export default App;
