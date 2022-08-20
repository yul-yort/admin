import { FC, lazy, Suspense } from "react";
import { constants } from "router5";
import { useRoute } from "react-router5";

import { LoadingScreen, Body } from "./components/common";

const NotFoundPage = lazy(() => import("./pages/notFound"));
const RegistrationPage = lazy(() => import("./pages/login"));

const pages = {
  login: <RegistrationPage />,
  [constants.UNKNOWN_ROUTE]: <NotFoundPage />,
};

export const UnauthorizedApp: FC = () => {
  const {
    route: { name },
  } = useRoute();

  return (
    <>
      <Body>
        <Suspense fallback={<LoadingScreen />}>
          {pages[name] || pages[constants.UNKNOWN_ROUTE]}
        </Suspense>
      </Body>
    </>
  );
};

export default UnauthorizedApp;
