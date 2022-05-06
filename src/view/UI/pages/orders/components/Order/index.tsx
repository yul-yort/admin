import { FC } from "react";
import { Paper, Typography } from "@mui/material";
import { Link } from "react-router5";

import css from "./styles.module.scss";
import { IOrderProps } from "./types";
import { Phones } from "../../../../components/shared/Phones";
import { getCurrency } from "src/libs/utils/getCurrency";

export const Order: FC<IOrderProps> = ({ agency, price, currencyISO }) => (
  <Paper elevation={1} className={css.order}>
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
        <Typography variant="h6">
          {price} {getCurrency(currencyISO)}
        </Typography>
      ) : (
        <Typography variant="subtitle2" color="text.secondary">
          Цена не указана
        </Typography>
      )}
    </div>
  </Paper>
);
