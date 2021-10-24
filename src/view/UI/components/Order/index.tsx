import { FC } from "react";
import { Link, Paper, Typography } from "@mui/material";
import css from "./styles.module.scss";
import { IOrderProps } from "./types";

export const Order: FC<IOrderProps> = ({
  agencyName,
  phoneValues,
  priceValue,
}) => (
  <Paper elevation={3} className={css.order}>
    <div className={css.columnLeft}>
      <Typography variant="h6" align="left" className={css.orderTitle}>
        {agencyName}
      </Typography>

      <div className={css.phones}>
        {phoneValues && phoneValues.length ? (
          phoneValues.map((phone, index) => (
            <Link
              key={phone + index}
              className={css.orderPhone}
              href={`tel:${phone}`}
              underline="none"
              variant="subtitle2"
              align="left"
            >
              {phone}
            </Link>
          ))
        ) : (
          <Typography
            className={css.orderPhone}
            variant="subtitle2"
            align="left"
            color="text.secondary"
          >
            Телефон не указан
          </Typography>
        )}
      </div>
    </div>

    <div className={css.columnRight}>
      {priceValue ? (
        <Typography variant="h6">{priceValue}</Typography>
      ) : (
        <Typography variant="subtitle2" color="text.secondary">
          Цена не указана
        </Typography>
      )}
    </div>
  </Paper>
);
