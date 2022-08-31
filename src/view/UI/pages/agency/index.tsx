import { FC } from "react";
import { observer } from "mobx-react-lite";

import { useViewModel } from "../../hooks";
import { Detail } from "./components/Detail";
import Error from "../../components/shared/Error";
import Loading from "../../components/common/Loading";
import { IAgencyVM } from "../../../viewModels/Agency/types";
import { ILocalityVM } from "src/view/viewModels/Locality/types";
import { IOrderVM } from "../../../viewModels/Order/types";

const Agency: FC = observer(() => {
  const agencyVM = useViewModel<IAgencyVM>("agency");
  const orderVM = useViewModel<IOrderVM>("order");
  const localityVM = useViewModel<ILocalityVM>("locality");
  console.log(agencyVM);

  return (
    <div>
      {agencyVM.loading && <Loading />}

      {agencyVM.error && !agencyVM.loading && (
        <Error
          title="Ошибка при получении данных об агентстве"
          error={agencyVM.error}
        />
      )}

      {!agencyVM.loading && !agencyVM.error && agencyVM.agency && (
        <Detail
          agency={agencyVM.agency}
          editAgency={agencyVM.editAgency}
          deleteAgency={agencyVM.deleteAgency}
          editLoading={agencyVM.editLoading}
          agencyOrders={orderVM.agencyOrders || []}
          deleteOrder={orderVM.deleteOrder}
          ordersLoading={orderVM.loading}
          ordersAddLoading={orderVM.ordersAddLoading}
          createOrder={orderVM.createOrder}
          editOrder={orderVM.editOrder}
          localities={localityVM.localities || []}
          getLocality={localityVM.getList}
          localitiesLoading={localityVM.loading}
        />
      )}
    </div>
  );
});

export default Agency;
