import { FC } from "react";
import { Modal } from "@mui/material";
import { IConfirmModal } from "./types";
import css from "./styles.module.scss";
import { ConfirmBody } from "../ConfirmBody/ConfirmBody";

export const ConfirmModal: FC<IConfirmModal> = ({
  open,
  onCancel,
  ...rest
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
      <>
        <ConfirmBody {...rest} onCancel={onCancel} />
      </>
    </Modal>
  );
};
