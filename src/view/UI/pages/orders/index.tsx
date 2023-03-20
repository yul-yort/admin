import { FC } from "react";
import { observer } from "mobx-react-lite";

import { useViewModel } from "../../hooks";
import TableContainer from "./components/TableContainer";
import css from "./styles.module.scss";
import Error from "../../components/shared/Error";
import Loading from "../../components/common/Loading";

const Orders: FC = observer(() => {
  const orderVM = useViewModel("order");
  const localityVM = useViewModel("locality");

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
            filterByOrigin={orderVM.filterByOrigin}
            filterByDestination={orderVM.filterByDestination}
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
