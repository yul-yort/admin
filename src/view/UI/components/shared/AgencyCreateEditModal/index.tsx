import { Button } from "@mui/material";
import { FC } from "react";
import { Modal } from "../../common/Modal";
import { AgencyCreateEditForm } from "../AgencyCreateEditForm";
import { IAgencyCreateEditModal } from "./types";

export const AgencyCreateEditModal: FC<IAgencyCreateEditModal> = ({
  open,
  onClose,
  showConfirm,
  title,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={title}
      footer={
        <div>
          <Button onClick={onClose}>Отмена</Button>
          <Button>Сохранить</Button>
        </div>
      }
      showConfirm={showConfirm}
      confirmProps={{
        onConfirm: onClose,
        confirmText: "Да",
        cancelText: "Нет",
        confirmColor: "error",
        cancelColor: "success",
        text: "Вы уверены, что хотите закрыть окно, не сохранив данные?",
      }}
    >
      <AgencyCreateEditForm />
    </Modal>
  );
};
