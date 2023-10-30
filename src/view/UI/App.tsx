import { FC, lazy, Suspense } from "react";
import { observer } from "mobx-react-lite";

import { LoadingScreen, Notify } from "./components/common";
import { useNotification } from "./hooks";
import { useAuth } from "src/libs/hooks/useAuth";
import Loading from "./components/common/Loading";

const UnauthorizedApp = lazy(() => import("./UnauthorizedApp"));
const AuthorizedApp = lazy(() => import("./AuthorizedApp"));

export const App: FC = observer(() => {
  const { notification, removeNotification } = useNotification();
  const { isAuthState } = useAuth();

  if (isAuthState === null) {
    return <Loading />;
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
