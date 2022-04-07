import { FC } from "react";
import { Typography } from "@mui/material";
import { IErrorProps } from "./types";

const Error: FC<IErrorProps> = ({ error }) => (
  <div>
    <Typography variant="h6" align="center" color="error.main">
      Произошла ошибка при получении данных
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
