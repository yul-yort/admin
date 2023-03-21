import { FC, lazy, Suspense } from "react";
import { constants } from "router5";
import { useRoute } from "react-router5";

import { LoadingScreen, Body } from "./components/common";
import { useViewModel } from "./hooks";

const NotFoundPage = lazy(() => import("./pages/notFound"));
const RegistrationPage = lazy(() => import("./pages/login"));

const pages = {
  login: <RegistrationPage />,
  [constants.UNKNOWN_ROUTE]: <NotFoundPage />,
};

export const UnauthorizedApp: FC = () => {
  const appVM = useViewModel("app");

  const {
    route: { name },
  } = useRoute();

  return (
    <>
      <Body theme={appVM.theme}>
        <Suspense fallback={<LoadingScreen />}>
          {pages[name] || pages[constants.UNKNOWN_ROUTE]}
        </Suspense>
      </Body>
    </>
  );
};

export default UnauthorizedApp;
