import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import css from "./styles.module.scss";

const Dashboard: FC = observer(() => {
  return <div className={css.page}>dashboard</div>;
});

export default Dashboard;
