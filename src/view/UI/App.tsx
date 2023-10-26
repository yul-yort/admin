import { FC, lazy, Suspense } from "react";
import { observer } from "mobx-react-lite";

import { LoadingScreen, Notify } from "./components/common";
import { useNotification } from "./hooks";
// import { useRoute } from "react-router5";
// import { ERouteNames } from "../../router/types";
import { useAuth } from "./hooks/useAuth";

const UnauthorizedApp = lazy(() => import("./UnauthorizedApp"));
const AuthorizedApp = lazy(() => import("./AuthorizedApp"));

export const App: FC = observer(() => {
  const { notification, removeNotification } = useNotification();
  const { isAuthState } = useAuth();
  //FIXME:
  console.log("isAuthState", isAuthState);
  // if (isAuthState === null) {
  //   return "hello";
  // }
  return (
    <>
      <Notify
        open={!!notification}
        type={notification?.type || "error"}
        message={notification?.message || ""}
        onClose={removeNotification}
      />

      <Suspense fallback={<LoadingScreen />}>
        {isAuthState ? <AuthorizedApp /> : <UnauthorizedApp />}
      </Suspense>
    </>
  );
});

export default App;
