import { FC } from "react";
import css from "./styles.module.scss";
import CircularProgress from "@mui/material/CircularProgress";

const Loading: FC = () => (
  <div className={css.wrapper}>
    <CircularProgress />
  </div>
);

export default Loading;
