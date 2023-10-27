import { FC, lazy, Suspense } from "react";
import { observer } from "mobx-react-lite";

import { LoadingScreen, Notify } from "./components/common";
import { useNotification } from "./hooks";
// import { useRoute } from "react-router5";
// import { ERouteNames } from "../../router/types";
import { useAuth } from "./hooks/useAuth";
import { CircularProgress } from "@mui/material";

const UnauthorizedApp = lazy(() => import("./UnauthorizedApp"));
const AuthorizedApp = lazy(() => import("./AuthorizedApp"));

export const App: FC = observer(() => {
  const { notification, removeNotification } = useNotification();
  const { isAuthState } = useAuth();

  //FIXME: LOADER:
  if (isAuthState === null) {
    return <CircularProgress size={25} />;
  }
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
