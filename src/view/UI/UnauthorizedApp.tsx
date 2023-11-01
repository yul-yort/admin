import { FC, lazy, Suspense } from "react";
import { LoadingScreen, Body } from "./components/common";
import { useViewModel } from "./hooks";

const LoginPage = lazy(() => import("./pages/login"));

export const UnauthorizedApp: FC = () => {
  const appVM = useViewModel("app");

  return (
    <>
      <Body theme={appVM.theme}>
        <Suspense fallback={<LoadingScreen />}>
          <LoginPage />
        </Suspense>
      </Body>
    </>
  );
};

export default UnauthorizedApp;
