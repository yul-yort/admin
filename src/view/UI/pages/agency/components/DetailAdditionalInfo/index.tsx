import { IconButton, Paper, Typography } from "@mui/material";
import { FC } from "react";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

import { Phones } from "../../../../components/shared";
import css from "./styles.module.scss";
import sharedCss from "../shared/styles.module.scss";
import { IAdditionalInfo } from "./types";

export const DetailAdditionalInfo: FC<IAdditionalInfo> = ({
  handleEdit,
  name,
  createdAt,
  updatedAt,
  phones,
  description,
}) => {
  return (
    <Paper className={sharedCss.block} variant="outlined">
      <div className={sharedCss.header}>
        <Typography variant="h6">Общая информация</Typography>
        <IconButton aria-label="edit" onClick={handleEdit}>
          <EditRoundedIcon fontSize="small" />
        </IconButton>
      </div>

      <div className={sharedCss.row}>
        <Typography variant="subtitle2">Название:</Typography>
        <Typography variant="body2">{name}</Typography>
      </div>

      <div className={sharedCss.row}>
        <Typography variant="subtitle2">Дата создания:</Typography>
        <Typography variant="body2">{createdAt}</Typography>
      </div>

      {updatedAt && (
        <div className={sharedCss.row}>
          <Typography variant="subtitle2">Дата редактирвоания:</Typography>

          <Typography variant="body2">{updatedAt}</Typography>
        </div>
      )}

      <div className={sharedCss.row}>
        <Typography variant="subtitle2">Телефоны:</Typography>

        <div className={css.phones}>
          <Phones phones={phones} />
        </div>
      </div>

      {description && (
        <div className={sharedCss.row}>
          <Typography variant="subtitle2">Описание:</Typography>
          <Typography component="pre" variant="body2">
            {description}
          </Typography>
        </div>
      )}
    </Paper>
  );
};
