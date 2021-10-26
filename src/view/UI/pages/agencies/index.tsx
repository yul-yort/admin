import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import css from "./styles.module.scss";

const AgencyList: FC = observer(() => {
  return <div className={css.page}>Agencies</div>;
});

export default AgencyList;
