import { FC } from "react";
import { observer } from "mobx-react-lite";

import Error from "../../components/shared/Error";
import AgencyTable from "./components/Table";
import { IAgencyVM } from "../../../viewModels/Agency/types";
import { useViewModel } from "../../hooks/useViewModel";
import Loading from "../agency/components/Loading";

const AgencyList: FC = observer(() => {
  const agencyVM = useViewModel<IAgencyVM>("agency");

  return (
    <div>
      {agencyVM.loading && <Loading />}

      {agencyVM.error && !agencyVM.loading && (
        <Error
          title="Ошибка при получении списка агенств"
          error={agencyVM.error}
        />
      )}

      {!agencyVM.loading && !agencyVM.error && agencyVM.agencies && (
        <AgencyTable
          modalLoading={agencyVM.editLoading}
          isLoadingItem={agencyVM.isLoadingItem}
          agencies={agencyVM.agencies || []}
          createAgency={agencyVM.createAgency}
        />
      )}
    </div>
  );
});

export default AgencyList;
