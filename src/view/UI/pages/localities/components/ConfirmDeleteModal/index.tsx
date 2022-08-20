import { FC } from "react";

import { ConfirmModal } from "src/view/UI/components/common/ConfirmModal";
import { IConfirmDeleteModal } from "./types";

const ConfirmDeleteModal: FC<IConfirmDeleteModal> = ({
  showDeleteModal,
  onCancelDeleteModal,
  onDelete,
}) => {
  return (
    <ConfirmModal
      open={showDeleteModal}
      onCancel={onCancelDeleteModal}
      onConfirm={onDelete}
      title="Подтвердите удаление населенного пункта."
    />
  );
};

export default ConfirmDeleteModal;
