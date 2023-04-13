import { FC, lazy, Suspense } from "react";
import { observer } from "mobx-react-lite";

import { LoadingScreen, Notify } from "./components/common";
import { useNotification } from "./hooks";
import { useRoute } from "react-router5";
import { ERouteNames } from "../../libs/router/types";

const UnauthorizedApp = lazy(() => import("./UnauthorizedApp"));
const AuthorizedApp = lazy(() => import("./AuthorizedApp"));

export const App: FC = observer(() => {
  const {
    route: { name: routeName },
  } = useRoute();
  const { notification, removeNotification } = useNotification();

  return (
    <>
      <Notify
        open={!!notification}
        type={notification?.type || "error"}
        message={notification?.message || ""}
        onClose={removeNotification}
      />

      <Suspense fallback={<LoadingScreen />}>
        {routeName !== ERouteNames.LOGIN ? (
          <AuthorizedApp />
        ) : (
          <UnauthorizedApp />
        )}
      </Suspense>
    </>
  );
});

export default App;
