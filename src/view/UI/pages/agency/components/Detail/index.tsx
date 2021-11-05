import { FC, useState } from "react";
import css from "./styles.module.scss";
import { IDetail } from "./types";
import { Button, IconButton, Link, Paper, Typography } from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { ConfirmModal } from "../../../../components/ConfirmModal";

export const Detail: FC<IDetail> = ({
  agency: { agencyName, phoneValues, createDate, description, editedDate },
}) => {
  const [modal, setModal] = useState<boolean>(false);

  const handleOpen = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  const handleDelete = () => {
    setModal(false);
  };

  return (
    <>
      <Paper className={css.wrapper}>
        <div className={css.pageHeader}>
          <Typography variant="h6" className={css.headerTitle}>
            {agencyName}
          </Typography>
          <Button variant="text" color="error" onClick={handleOpen}>
            Удалить
          </Button>
        </div>

        <div className={css.detail}>
          <Paper className={css.block} variant="outlined">
            <div className={css.header}>
              <Typography variant="h6">Общая информация</Typography>
              <IconButton aria-label="edit">
                <EditRoundedIcon fontSize="small" />
              </IconButton>
            </div>

            <div className={css.row}>
              <Typography variant="subtitle2">Название:</Typography>
              <Typography variant="body2">{agencyName}</Typography>
            </div>

            <div className={css.row}>
              <Typography variant="subtitle2">Дата создания:</Typography>
              <Typography variant="body2">
                {createDate.toLocaleDateString("default", {
                  day: "numeric",
                  month: "numeric",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                })}
              </Typography>
            </div>

            {editedDate && (
              <div className={css.row}>
                <Typography variant="subtitle2">
                  Дата редактирвоания:
                </Typography>

                <Typography variant="body2">
                  {editedDate.toLocaleDateString("default", {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                  })}
                </Typography>
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
                    className={css.phone}
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

          <Paper className={css.block} variant="outlined">
            <div className={css.header}>
              <Typography variant="h6">Маршруты</Typography>
              <IconButton aria-label="add">
                <AddRoundedIcon />
              </IconButton>
            </div>
          </Paper>
        </div>
      </Paper>

      <ConfirmModal
        open={modal}
        onCancel={handleClose}
        onConfirm={handleDelete}
        title="Вы уверены, что хотите удалить данное агенство?"
      />
    </>
  );
};
