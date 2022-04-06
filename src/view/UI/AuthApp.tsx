import { FC, lazy, Suspense } from "react";
import { constants } from "router5";
import { useRoute } from "react-router5";
import { LoadingScreen } from "./components/common/LoadingScreen";
import Body from "./components/common/Body";
const NotFoundPage = lazy(() => import("./pages/notFound"));


const RegistrationPage = lazy(() => import("./pages/registration"));

const pages = {
  registration: <RegistrationPage/>,
  [constants.UNKNOWN_ROUTE]: <NotFoundPage />,
};

export const AuthApp: FC = () => {
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

export default AuthApp;