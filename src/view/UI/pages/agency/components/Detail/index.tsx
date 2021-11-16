import { FC, useState } from "react";
import css from "./styles.module.scss";
import { IDetail } from "./types";
import { Button, IconButton, Paper, Typography } from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { ConfirmModal } from "../../../../components/ConfirmModal";
import { DetailModal } from "../DetailModal";
import { Phones } from "./Phones";
import { formatDate } from "./formatDate";

export const Detail: FC<IDetail> = ({
  agency: { agencyName, phoneValues, createDate, description, editedDate },
}) => {
  const [deleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [editModal, setOpenEditModal] = useState<boolean>(false);

  const handleDelete = () => {
    setOpenDeleteModal(true);
  };

  const handleEdit = () => {
    setOpenEditModal(true);
  };

  const handleCancelDelete = () => {
    setOpenDeleteModal(false);
  };

  const handleConfirmDelete = () => {
    setOpenDeleteModal(false);
  };

  // const handleSaveEdit = () => {
  //   setOpenEditModal(false);
  // };

  const handleCancelEdit = () => {
    setOpenEditModal(false);
  };

  return (
    <>
      <Paper className={css.wrapper}>
        <div className={css.pageHeader}>
          <Typography variant="h6" className={css.headerTitle}>
            {agencyName}
          </Typography>
          <Button variant="text" color="error" onClick={handleDelete}>
            Удалить
          </Button>
        </div>

        <div className={css.detail}>
          <Paper className={css.block} variant="outlined">
            <div className={css.header}>
              <Typography variant="h6">Общая информация</Typography>
              <IconButton aria-label="edit" onClick={handleEdit}>
                <EditRoundedIcon fontSize="small" />
              </IconButton>
            </div>

            <div className={css.row}>
              <Typography variant="subtitle2">Название:</Typography>
              <Typography variant="body2">{agencyName}</Typography>
            </div>

            <div className={css.row}>
              <Typography variant="subtitle2">Дата создания:</Typography>
              <Typography variant="body2">{formatDate(createDate)}</Typography>
            </div>

            {editedDate && (
              <div className={css.row}>
                <Typography variant="subtitle2">
                  Дата редактирвоания:
                </Typography>

                <Typography variant="body2">
                  {formatDate(editedDate)}
                </Typography>
              </div>
            )}

            <div className={css.row}>
              <Typography variant="subtitle2">Телефоны:</Typography>

              <div className={css.phones}>
                <Phones phones={phoneValues} />
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
        open={deleteModal}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        title="Подтвердите удаление агентства."
      />

      <DetailModal open={editModal} onClose={handleCancelEdit} />
    </>
  );
};
