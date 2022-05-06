import { FC } from "react";
import { Paper, Typography } from "@mui/material";
import { Link } from "react-router5";

import css from "./styles.module.scss";
import { IOrderProps } from "./types";
import { Phones } from "../../../../components/shared/Phones";

export const Order: FC<IOrderProps> = ({ agency, price }) => (
  <Paper elevation={3} className={css.order}>
    <div className={css.columnLeft}>
      <Link
        className={css.orderTitle}
        routeName="agencies.agency"
        routeParams={{ id: agency.id }}
      >
        <Typography variant="h6" align="left">
          {agency.agencyName}
        </Typography>
      </Link>

      <div className={css.phones}>
        <Phones phones={agency.phones} />
      </div>
    </div>

    <div className={css.columnRight}>
      {price !== undefined ? (
        <Typography variant="h6">{price}</Typography>
      ) : (
        <Typography variant="subtitle2" color="text.secondary">
          Цена не указана
        </Typography>
      )}
    </div>
  </Paper>
);
