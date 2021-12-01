import { FC } from "react";
import { Modal } from "../../../../components/Modal";
import { IDetailModal } from "./types";

export const DetailModal: FC<IDetailModal> = ({
  open,
  onClose,
  showConfirm,
}) => {
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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, commodi
      odio animi qui quas assumenda neque voluptate illo tempore nam aperiam
      iusto laboriosam, nisi, hic earum consequuntur ipsa optio aspernatur.
    </Modal>
  );
};
