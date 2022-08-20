import { FC } from "react";
import { Modal } from "src/view/UI/components/common/Modal";
import LocalityCreateForm from "./LocalityCreateForm";
import { ICreateLocalityModal } from "./types";

export const LocalityCreateModal: FC<ICreateLocalityModal> = ({
  showModal,
  titleModal,
  onSave,
  loading,
  onClose,
  showConfirm,
  handleConfirmClose,
  handleConfirmCloseModal,
}) => {
  return (
    <Modal
      open={showModal}
      onClose={onClose}
      title={titleModal}
      showConfirm={showConfirm}
      loading={loading}
      confirmProps={{
        onConfirm: handleConfirmCloseModal,
        onCancel: handleConfirmClose,
        confirmText: "Да",
        cancelText: "Нет",
        confirmColor: "error",
        cancelColor: "success",
        text: "Вы уверены, что хотите закрыть окно, не сохранив данные?",
      }}
    >
      <LocalityCreateForm onSave={onSave} onClose={onClose} />
    </Modal>
  );
};
