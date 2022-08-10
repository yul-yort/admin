import ReactDOM from "react-dom";
import { lazy, StrictMode, Suspense } from "react";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

const InitErrorPage = lazy(() => import("./pages/initError"));

export const initErrorApp = (error: unknown): void => {
  ReactDOM.render(
    <StrictMode>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Suspense fallback={<div>Загрузка...</div>}>
          <InitErrorPage error={error} />
        </Suspense>
      </StyledEngineProvider>
    </StrictMode>,
    document.getElementById("root")
  );
};
