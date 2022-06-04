import { FC } from "react";
import { observer } from "mobx-react-lite";

import { useViewModel } from "../../hooks/useViewModel";
import { Detail } from "./components/Detail";
import Error from "../../components/shared/Error";
import Loading from "../../components/common/Loading";
import { IAgencyVM } from "../../../viewModels/Agency/types";
import { ILocalityVM } from "src/view/viewModels/Locality/types";

const Agency: FC = observer(() => {
  const agencyVM = useViewModel<IAgencyVM>("agency");
  const localityVM = useViewModel<ILocalityVM>("locality");

  return (
    <div>
      {agencyVM.loading && <Loading />}

      {agencyVM.error && !agencyVM.loading && (
        <Error
          title="Ошибка при получении данных об агенстве"
          error={agencyVM.error}
        />
      )}

      {!agencyVM.loading &&
        !agencyVM.error &&
        agencyVM.agency &&
        agencyVM.agencyOrders && (
          <Detail
            agency={agencyVM.agency}
            editAgency={agencyVM.editAgency}
            deleteAgency={agencyVM.deleteAgency}
            editLoading={agencyVM.editLoading}
            agencyOrders={agencyVM.agencyOrders}
            deleteOrder={agencyVM.deleteOrder}
            ordersLoading={agencyVM.ordersLoading}
            createOrder={agencyVM.createOrder}
            localities={localityVM.localities || []}
            getLocality={localityVM.getList}
            localitiesLoading={localityVM.loading}
            ordersAddLoading={agencyVM.ordersAddLoading}
          />
        )}
    </div>
  );
});

export default Agency;
