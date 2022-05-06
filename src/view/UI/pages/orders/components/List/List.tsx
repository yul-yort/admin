import { FC } from "react";
import { Typography } from "@mui/material";

import css from "./styles.module.scss";
import { IListProps } from "./types";
import { EmptyList } from "../EmptyList";
import { Order } from "../Order";

const List: FC<IListProps> = ({ list }) => {
  if (!list.length) {
    return <EmptyList />;
  }

  return (
    <>
      <Typography align="right" className={css.title} color="text.secondary">
        Найдено {list.length} вариантов
      </Typography>

      {list.map(({ id, price, agency }) => (
        <Order key={id} price={price} agency={agency} />
      ))}
    </>
  );
};

export default List;
