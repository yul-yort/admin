import { FC } from "react";
import css from "./styles.module.scss";
import { IBody } from "./types";

export const Body: FC<IBody> = ({ children, theme }) => {
  return (
    <div className={css.body} data-theme={theme} id="yy-body-wrapper">
      {children}
    </div>
  );
};
