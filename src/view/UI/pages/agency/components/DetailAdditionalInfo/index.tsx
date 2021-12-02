import { IconButton, Paper, Typography } from "@mui/material";
import { FC } from "react";
import { formatDate } from "./formatDate";
import { Phones } from "./Phones";
import css from "./styles.module.scss";
import sharedCss from "../shared/styles.module.scss";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { IAdditionalInfo } from "./types";

export const DetailAdditionalInfo: FC<IAdditionalInfo> = ({
  handleEdit,
  agencyName,
  createDate,
  editedDate,
  phoneValues,
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
        <Typography variant="body2">{agencyName}</Typography>
      </div>

      <div className={sharedCss.row}>
        <Typography variant="subtitle2">Дата создания:</Typography>
        <Typography variant="body2">{formatDate(createDate)}</Typography>
      </div>

      {editedDate && (
        <div className={sharedCss.row}>
          <Typography variant="subtitle2">Дата редактирвоания:</Typography>

          <Typography variant="body2">{formatDate(editedDate)}</Typography>
        </div>
      )}

      <div className={sharedCss.row}>
        <Typography variant="subtitle2">Телефоны:</Typography>

        <div className={css.phones}>
          <Phones phones={phoneValues} />
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
