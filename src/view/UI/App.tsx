import { FC, lazy, Suspense } from "react";
import { observer } from "mobx-react-lite";
import { useRoute } from "react-router5";

import { LoadingScreen } from "./components/common/LoadingScreen";
import { useNotification } from "./hooks/useNotification";
import { Notify } from "./components/common/Notify";
import { useViewModel } from "./hooks/useViewModel";
import { IUserVM } from "../viewModels/User/types";

const UnauthorizedApp = lazy(() => import("./UnauthorizedApp"));
const AuthorizedApp = lazy(() => import("./AuthorizedApp"));

export const App: FC = observer(() => {
  const { notification, removeNotification } = useNotification();
  const user = useViewModel<IUserVM>("user");

  return (
    <>
      <Notify
        open={!!notification}
        type={notification?.type || "error"}
        message={notification?.message || ""}
        onClose={removeNotification}
      />

      <Suspense fallback={<LoadingScreen />}>
        {user.isUnauthorized ? <UnauthorizedApp /> : <AuthorizedApp />}
      </Suspense>
    </>
  );
});

export default App;
