import { FC } from "react";
import { observer } from "mobx-react-lite";

import { useViewModel } from "../../hooks/useViewModel";
import { Detail } from "./components/Detail";
import Error from "../../components/shared/Error";
import Loading from "../../components/common/Loading";
import { IAgencyVM } from "../../../viewModels/Agency/types";

const Agency: FC = observer(() => {
  const agencyVM = useViewModel<IAgencyVM>("agency");

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
          />
        )}
    </div>
  );
});

export default Agency;
