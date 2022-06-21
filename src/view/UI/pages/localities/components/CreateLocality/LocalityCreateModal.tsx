import { FC } from "react";
import { Modal } from "src/view/UI/components/common/Modal";
import LocalityCreateForm from "./LocalityCreateForm";
import { ICreateLocalityModal } from "./types";

export const LocalityCreateModal: FC<ICreateLocalityModal> = ({
  showModal,
  handleCloseCreateModal,
}) => {
  return (
    <Modal
      open={showModal}
      onClose={handleCloseCreateModal}
      title="test"
      showConfirm={false}
      loading={false}
      confirmProps={{
        // onConfirm: onConformClose,
        // onCancel: onCancelClose,
        confirmText: "Да",
        cancelText: "Нет",
        confirmColor: "error",
        cancelColor: "success",
        text: "Вы уверены, что хотите закрыть окно, не сохранив данные?",
      }}
    >
      <LocalityCreateForm />
    </Modal>
  );
};
