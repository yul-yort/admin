import React, { FC } from "react";
import { observer } from "mobx-react-lite";

import { useViewModel } from "../../hooks/useViewModel";
import TableContainer from "./components/TableContainer";
import css from "./styles.module.scss";
import { IOrderVM } from "../../../viewModels/Order/types";
import Error from "../../components/shared/Error";
import Loading from "../../components/common/Loading";
import { ILocalityVM } from "src/view/viewModels/Locality/types";

const Orders: FC = observer(() => {
  const orderVM = useViewModel<IOrderVM>("order");
  const localityVM = useViewModel<ILocalityVM>("locality");

  return (
    <div className={css.page}>
      <div className={css.list}>
        {orderVM.loading && <Loading />}

        {orderVM.error && (
          <Error
            error={orderVM.error}
            title="Ошибка при получении списка предложений"
          />
        )}
        {!orderVM.error && !orderVM.loading && orderVM.orders && (
          <TableContainer
            list={orderVM.orders}
            filterByAgency={orderVM.filterByAgency}
            filterByPhone={orderVM.filterByPhone}
            localities={localityVM.localities || []}
            getLocalities={localityVM.getList}
            localitiesLoading={localityVM.loading}
          />
        )}
      </div>
    </div>
  );
});

export default Orders;
