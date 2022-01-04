import { FC } from "react";
import { Modal } from "../../common/Modal";
import { AgencyCreateEditForm } from "../AgencyCreateEditForm";
import { IAgencyCreateEditModal } from "./types";

export const AgencyCreateEditModal: FC<IAgencyCreateEditModal> = ({
  open,
  loading = false,
  onClose,
  onSave,
  onConformClose,
  onCancelClose,
  showConfirm,
  title,
}) => {
  return (
    <Modal
      open={open}
      loading={loading}
      onClose={onClose}
      title={title}
      showConfirm={showConfirm}
      confirmProps={{
        onConfirm: onConformClose,
        onCancel: onCancelClose,
        confirmText: "Да",
        cancelText: "Нет",
        confirmColor: "error",
        cancelColor: "success",
        text: "Вы уверены, что хотите закрыть окно, не сохранив данные?",
      }}
    >
      <AgencyCreateEditForm onSave={onSave} onClose={onClose} />
    </Modal>
  );
};
