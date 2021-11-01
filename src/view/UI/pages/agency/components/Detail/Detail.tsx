import { FC } from "react";
import css from "./styles.module.scss";
import { IDetail } from "./types";
import { Link, Paper, Typography } from "@mui/material";

export const Detail: FC<IDetail> = ({
  agency: { agencyName, phoneValues, createDate, description, editedDate },
}) => {
  return (
    <div className={css.detail}>
      <Paper className={css.block}>
        <div className={css.header}>
          <Typography variant="h6">Общая информация</Typography>
        </div>

        <div className={css.row}>
          <Typography variant="subtitle2">Название:</Typography>
          <Typography variant="body2">{agencyName}</Typography>
        </div>

        <div className={css.row}>
          <Typography variant="subtitle2">Дата создания:</Typography>
          {/* TODO date-fns*/}
          <Typography variant="body2">{createDate.toString()}</Typography>
        </div>

        {editedDate && (
          <div className={css.row}>
            <Typography variant="subtitle2">Дата редактирвоания:</Typography>
            {/* TODO date-fns*/}
            <Typography variant="body2">{editedDate.toString()}</Typography>
          </div>
        )}

        <div className={css.row}>
          <Typography variant="subtitle2">Телефоны:</Typography>
          <div className={css.phones}>
            {phoneValues && phoneValues.length ? (
              phoneValues.map((phone, index) => (
                <Link
                  className={css.phone}
                  key={phone + index}
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

        {description && (
          <div className={css.row}>
            <Typography variant="subtitle2">Описание:</Typography>
            <Typography component="pre" variant="body2">
              {description}
            </Typography>
          </div>
        )}
      </Paper>

      <Paper className={css.block}>
        <Typography variant="h6">Маршруты</Typography>
      </Paper>
    </div>
  );
};
