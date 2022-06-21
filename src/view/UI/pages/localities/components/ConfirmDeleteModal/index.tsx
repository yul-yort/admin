import { FC, useState } from "react";

import { ConfirmModal } from "src/view/UI/components/common/ConfirmModal";
import { IConfirmDeleteModal } from "./types";

const ConfirmDeleteModal: FC<IConfirmDeleteModal> = ({
  showDeleteModal,
  handleCancelDeleteModal,
}) => {
  const handleConfirmDeleteModal = () => {
    handleCancelDeleteModal();
  };

  return (
    <ConfirmModal
      open={showDeleteModal}
      onCancel={handleCancelDeleteModal}
      onConfirm={handleConfirmDeleteModal}
      title="Подтвердите удаление населенного пункта."
    />
  );
};

export default ConfirmDeleteModal;
