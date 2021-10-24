import { FC } from "react";
import { Order } from "../../../../components/Order";
import { Typography } from "@mui/material";
import { IListProps } from "./types";
import css from "./styles.module.scss";

const List: FC<IListProps> = ({ list }) => {
  if (!list.length) {
    return (
      <Typography variant="h6" align="center">
        {/* TODO поставить картинку */}
        По данному маршруту предложений не найдено
      </Typography>
    );
  }

  return (
    <>
      <Typography align="right" className={css.title} color="text.secondary">
        Найдено {list.length} вариантов
      </Typography>

      {list.map((order) => (
        <Order
          key={order.id}
          agencyName={order.agencyName}
          phoneValues={order.phoneValues}
          priceValue={order.priceValue}
        />
      ))}
    </>
  );
};

export default List;
