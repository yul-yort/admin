import { FC } from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router5";

import { IListProps } from "./types";
import css from "./styles.module.scss";
import { Phones } from "../../../../components/shared/Phones";
import { EmptyList } from "../EmptyList";

const List: FC<IListProps> = ({ list }) => {
  if (!list.length) {
    return <EmptyList />;
  }

  return (
    <>
      <Typography align="right" className={css.title} color="text.secondary">
        Найдено {list.length} вариантов
      </Typography>

      {list.map(({ id, agency }) => (
        <div key={id}>
          <Link
            className={css.more_link}
            routeName="agencies.agency"
            routeParams={{ id: agency.id }}
          >
            {agency.agencyName}
          </Link>
          <div className={css.phones}>
            <Phones phones={agency.phones} />
          </div>
        </div>
      ))}
    </>
  );
};

export default List;
