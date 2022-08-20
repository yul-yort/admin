import { FC, lazy, Suspense } from "react";
import { observer } from "mobx-react-lite";

import { LoadingScreen, Notify } from "./components/common";
import { useNotification, useViewModel } from "./hooks";
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
        {user.authorized ? <AuthorizedApp /> : <UnauthorizedApp />}
      </Suspense>
    </>
  );
});

export default App;
