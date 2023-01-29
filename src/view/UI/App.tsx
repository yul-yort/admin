import { FC, lazy, Suspense } from "react";
import { observer } from "mobx-react-lite";

import { LoadingScreen, Notify } from "./components/common";
import { useNotification, useViewModel } from "./hooks";
import { IAdminVM } from "../viewModels/Admin/types";

const UnauthorizedApp = lazy(() => import("./UnauthorizedApp"));
const AuthorizedApp = lazy(() => import("./AuthorizedApp"));

export const App: FC = observer(() => {
  const { notification, removeNotification } = useNotification();
  const adminVM = useViewModel<IAdminVM>("admin");

  return (
    <>
      <Notify
        open={!!notification}
        type={notification?.type || "error"}
        message={notification?.message || ""}
        onClose={removeNotification}
      />

      <Suspense fallback={<LoadingScreen />}>
        {adminVM.authorized ? <AuthorizedApp /> : <UnauthorizedApp />}
      </Suspense>
    </>
  );
});

export default App;
