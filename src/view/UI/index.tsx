import { FC, StrictMode } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "../../reportWebVitals";
import * as serviceWorkerRegistration from "../../serviceWorkerRegistration";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { RouterProvider } from "react-router5";
import { Router } from "router5/dist/types/router";
import { IDependencies } from "../../router/types";
import { Theme } from "@mui/material/styles/createTheme";
import { ErrorBoundary } from "./pages/errorBoundaryPage";
import App from "./App";
import { observer } from "mobx-react-lite";
import { useViewModel } from "./hooks";
import { IAppVM } from "../viewModels/App/types";

type IAppInitConfig = {
  router: Router<IDependencies>;
  themes: [lightTheme: Theme, darkTheme: Theme];
};

const AppRoot: FC<{ themes: IAppInitConfig["themes"] }> = observer(
  ({ themes: [lightTheme, darkTheme] }) => {
    const appVM = useViewModel<IAppVM>("app");

    return (
      <StrictMode>
        <ThemeProvider theme={appVM.theme === "light" ? lightTheme : darkTheme}>
          <CssBaseline />
          <StyledEngineProvider injectFirst>
            <ErrorBoundary>
              <App />
            </ErrorBoundary>
          </StyledEngineProvider>
        </ThemeProvider>
      </StrictMode>
    );
  }
);

export const initApp = ({ router, themes }: IAppInitConfig): void => {
  ReactDOM.render(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <RouterProvider router={router}>
      <AppRoot themes={themes} />
    </RouterProvider>,
    document.getElementById("root")
  );
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
