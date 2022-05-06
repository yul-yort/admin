import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { useRouteNode } from "react-router5";
import { SubmitHandler } from "react-hook-form";

import { useViewModel } from "../../hooks/useViewModel";
import Loading from "./components/Loading";
import List from "./components/List/List";
import css from "./styles.module.scss";
import { IOrderVM } from "../../../viewModels/Order/types";
import Error from "../../components/shared/Error";
import { SearchForm } from "../../components/shared/SearchForm";
import { IFormData } from "../../components/shared/SearchForm/types";

const Orders: FC = observer(() => {
  const orderVM = useViewModel<IOrderVM>("order");
  const {
    route: { params },
    router: { navigate },
  } = useRouteNode("orders");

  const handleSearch: SubmitHandler<IFormData> = (data) => {
    navigate("orders", data);
  };

  const onReset = () => {
    navigate("orders");
  };

  return (
    <div className={css.page}>
      <div className={css.list}>
        <div className={css.searchForm}>
          <SearchForm
            minified
            loading={orderVM.loading}
            destination={params.destination}
            origin={params.origin}
            onSearch={handleSearch}
            onReset={params.origin && params.destination && onReset}
          />
        </div>

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
