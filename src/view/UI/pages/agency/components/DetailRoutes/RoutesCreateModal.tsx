import { FC } from "react";
import { Modal } from "src/view/UI/components/common/Modal";
import { RoutesCreateForm } from "./RoutesCreateForm";
import { IRoutesCreateModal } from "./types";

export const RoutesCreateModal: FC<IRoutesCreateModal> = ({
  stateModal,
  handleCancelCloseEditModal,
  handleSaveEdit
}) => {
  return (
    <>
      <Modal
        open={stateModal}
        onClose={handleCancelCloseEditModal}
        title="Добавить новый маршрут"
      >
        <RoutesCreateForm handleSaveEdit={handleSaveEdit}/>
      </Modal>
    </>
  );
};
