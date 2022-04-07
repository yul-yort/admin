import { FC, lazy, Suspense } from "react";
import { checkAuth } from "src/libs/utils/checkAuth";

import { LoadingScreen } from "./components/common/LoadingScreen";
const UnauthorizedApp = lazy(() => import("./UnauthorizedApp"));
const AuthorizedApp = lazy(() => import("./AuthorizedApp"));

export const App: FC = () => {
  const isUnauthorized = checkAuth();

  return (
    <Suspense fallback={<LoadingScreen />}>
      {isUnauthorized ? <AuthorizedApp /> : <UnauthorizedApp />}
    </Suspense>
  );
};

export default App;
