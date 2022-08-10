import { FC } from "react";
import css from "./styles.module.scss";

export const Body: FC = ({ children }) => {
  return <div className={css.body}>{children}</div>;
};
