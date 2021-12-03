import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import css from "./styles.module.scss";

import AgencyTable from "./components/Table";

const AgencyList: FC = observer(() => {
  return (
    <div>
      <AgencyTable/>
    </div>
  )
});

export default AgencyList;
