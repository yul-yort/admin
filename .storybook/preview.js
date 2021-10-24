import { muiTheme } from "storybook-addon-material-ui";
import { addDecorator } from "@storybook/react";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import theme from "../src/view/UI/theme";

export const decorators = [muiTheme([theme])];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "gray",
    values: [
      {
        name: "gray",
        value: "#eee",
      },
      {
        name: "white",
        value: "#fff",
      },
      {
        name: "black",
        value: "#000",
      },
    ],
  },
};

addDecorator((story) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  </StyledEngineProvider>
));
