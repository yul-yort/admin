import { Button } from "@mui/material";
import { FC } from "react";
import { Modal } from "../../../../components/Modal";
import { EditForm } from "../EditForm";
import { IDetailEditModal } from "./types";

export const DetailEditModal: FC<IDetailEditModal> = ({
  open,
  onClose,
  showConfirm,
  ...rest
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Редактировать агентство"
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
      <EditForm {...rest} />
    </Modal>
  );
};
