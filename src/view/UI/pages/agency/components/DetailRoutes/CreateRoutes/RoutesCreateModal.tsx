import { FC } from "react";
import { Modal } from "src/view/UI/components/common/Modal";
import { RoutesCreateForm } from "./RoutesCreateForm";
import { IRoutesCreateModal } from "./types";

export const RoutesCreateModal: FC<IRoutesCreateModal> = ({
  showModal,
  showConfirm,
  onClose,
  onSave,
  onConformClose,
  onCancelClose,
  titleModal,
}) => {
  return (
    <Modal
      open={showModal}
      onClose={onClose}
      title={titleModal}
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
      <RoutesCreateForm
        onSave={onSave}
        onClose={onClose}
      />
    </Modal>
  );
};
