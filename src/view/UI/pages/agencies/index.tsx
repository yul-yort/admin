import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import css from "./styles.module.scss";
import AgencyListTable from "./components/Table";






const AgencyList: FC = observer(() => {
  return (
    <div className={css.page}>
      <AgencyListTable/>
    </div>
  )
});

export default AgencyList;
