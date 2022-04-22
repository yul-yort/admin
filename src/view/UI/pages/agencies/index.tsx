import { FC } from "react";
import { observer } from "mobx-react-lite";

import Error from "../../components/shared/Error";
import AgencyTable from "./components/Table";
import { IAgencyVM } from "../../../viewModels/Agency/types";
import { useViewModel } from "../../hooks/useViewModel";
import Loading from "../agency/components/Loading";

//TODO избавиться от инлайновых стилей
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
        <AgencyTable agencies={agencyVM.agencies || []} />
      )}
    </div>
  );
});

export default AgencyList;
