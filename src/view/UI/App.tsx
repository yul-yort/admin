import { FC, lazy, Suspense } from "react";
import { useRoute } from "react-router5";

import { LoadingScreen } from "./components/common/LoadingScreen";
const UnauthorizedApp = lazy(() => import("./UnauthorizedApp"));
const AuthorizedApp = lazy(() => import("./AuthorizedApp"));

export const App: FC = () => {
  const {
    route: { name },
  } = useRoute();

  const isUnauthorized = name === "login";

  return (
    <Suspense fallback={<LoadingScreen />}>
      {isUnauthorized ? <UnauthorizedApp /> : <AuthorizedApp />}
    </Suspense>
  );
};

export default App;
