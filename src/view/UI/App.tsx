import { FC, lazy, Suspense } from "react";
import { observer } from "mobx-react-lite";
import { useRoute } from "react-router5";

import { LoadingScreen } from "./components/common/LoadingScreen";
import { useNotification } from "./hooks/useNotification";
import { Notify } from "./components/common/Notify";
import { checkToken } from "../../libs/utils/checkToken";

const UnauthorizedApp = lazy(() => import("./UnauthorizedApp"));
const AuthorizedApp = lazy(() => import("./AuthorizedApp"));

export const App: FC = observer(() => {
  const { notification, removeNotification } = useNotification();

  const isAuthorized = checkToken();

  return (
    <>
      <Notify
        open={!!notification}
        type={notification?.type || "error"}
        message={notification?.message || ""}
        onClose={removeNotification}
      />

      <Suspense fallback={<LoadingScreen />}>
        {isAuthorized ? <AuthorizedApp /> : <UnauthorizedApp />}
      </Suspense>
    </>
  );
});

export default App;
