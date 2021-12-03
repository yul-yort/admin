import { FC } from "react";
import css from "./styles.module.scss";

const Body: FC = ({ children }) => {
  return <div className={css.body}>{children}</div>;
};

export default Body;
