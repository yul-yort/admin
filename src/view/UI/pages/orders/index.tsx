import React, { FC } from "react";
import { observer } from "mobx-react-lite";

import { useViewModel } from "../../hooks/useViewModel";
import Loading from "./components/Loading";
import List from "./components/List/List";
import css from "./styles.module.scss";
import { IOrderVM } from "../../../viewModels/Order/types";
import Error from "../../components/shared/Error";

const Orders: FC = observer(() => {
  const orderVM = useViewModel<IOrderVM>("order");

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
          <List list={orderVM.orders} />
        )}
      </div>
    </div>
  );
});

export default Orders;
