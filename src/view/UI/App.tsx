import { FC, lazy, Suspense } from "react";
import { useRoute } from "react-router5";

import { LoadingScreen } from "./components/common/LoadingScreen";
const UnauthorizedApp = lazy(() => import("./UnauthorizedApp"));
const AuthorizedApp = lazy(() => import("./AuthorizedApp"));

export const App: FC = observer(() => {
  const { notification, removeNotification } = useNotification();

  const {
    route: { name },
  } = useRoute();

  // TODO: тут наверное проверять на наличие токена в localstorage или где то еще
  // TODO нужен метод, проверяющий авторизацию. Предлагаю проверять куки.
  const isUnauthorized = name === "login";
  // const isUnauthorized = checkAuth();

  return (
    <>
      {notification && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={!!notification}
          autoHideDuration={3000}
          onClose={removeNotification}
        >
          <Alert
            variant="filled"
            severity={notification.type}
            onClose={removeNotification}
          >
            {notification?.message}
          </Alert>
        </Snackbar>
      )}
      <Suspense fallback={<LoadingScreen />}>
        {isUnauthorized ? <UnauthorizedApp /> : <AuthorizedApp />}
      </Suspense>
    </>
  );
}));

export default App;
