import { FC } from "react";
import { Button, Modal, Paper, Typography } from "@mui/material";
import { IConfirmModal } from "./types";
import css from "./styles.module.scss";

export const ConfirmModal: FC<IConfirmModal> = ({
  open,
  onCancel,
  onConfirm,
  text,
  title = "Подтвердить выполнение действия?",
}) => {
  return (
    <Modal
      open={open}
      onClose={onCancel}
      onBackdropClick={onCancel}
      className={css.modalWrapper}
      disableEnforceFocus={true}
      disableAutoFocus={true}
    >
      <Paper elevation={0} className={css.modalContentWrapper}>
        <div>
          <Typography variant="h6" component="h2">
            {title}
          </Typography>

          {text && <Typography>{text}</Typography>}
        </div>

        <div className={css.actions}>
          <Button variant="text" color="info" onClick={onCancel}>
            Отменить
          </Button>
          <Button variant="text" color="success" onClick={onConfirm}>
            Подтвердить
          </Button>
        </div>
      </Paper>
    </Modal>
  );
};
