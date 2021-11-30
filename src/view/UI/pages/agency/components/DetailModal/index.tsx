import { FC } from "react";
import { Modal } from "../../../../components/Modal";
import { IDetailModal } from "./types";

export const DetailModal: FC<IDetailModal> = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Редактировать агентство"
      footer={
        <div>
          <button>Cancel</button>
          <button>ok</button>
        </div>
      }
    >
      content
    </Modal>
  );
};
