import { FC } from "react";
import { observer } from "mobx-react-lite";
import { agencies } from "src/libs/mocks/data/agencies";

import AgencyTable from "./components/Table";

const AgencyList: FC = observer(() => {
  return (
    <div>
      <AgencyTable listData={agencies}/>
    </div>
  );
});

export default AgencyList;
