import { FC } from "react";
import { observer } from "mobx-react-lite";
import { useViewModel } from "../../hooks/useViewModel";
import { Detail } from "./components/Detail";
import Error from "./components/Error";
import Loading from "./components/Loading";
import { IAgencyVM } from "../../../viewModels/Agency/types";

const Agency: FC = observer(() => {
  const agencyVM = useViewModel<IAgencyVM>("agency");

  return (
    <div>
      {agencyVM.loading && <Loading />}

      {agencyVM.error && !agencyVM.loading && <Error error={agencyVM.error} />}

      {!agencyVM.error && agencyVM.agency && (
        <Detail
          agency={agencyVM.agency}
          editAgency={agencyVM.editAgency}
          deleteAgency={agencyVM.deleteAgency}
          editLoading={agencyVM.editLoading}
        />
      )}
    </div>
  );
});

export default Agency;
