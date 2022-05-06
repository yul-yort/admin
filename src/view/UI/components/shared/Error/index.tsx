import { VFC } from "react";
import { Typography } from "@mui/material";
import { IErrorProps } from "./types";

const Error: VFC<IErrorProps> = ({ title = "Ошибка", error }) => (
  <div>
    <Typography variant="h6" align="center" color="error.main">
      {title}
    </Typography>

    <div>
      <Typography align="center" color="error.main">
        {error.name}
      </Typography>
      <Typography align="center" color="error.main">
        {error.message}
      </Typography>
    </div>
  </div>
);

export default Error;
