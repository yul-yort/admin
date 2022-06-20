import { FC } from "react";
import { Modal } from "src/view/UI/components/common/Modal";
import { OrdersCreateForm } from "./OrdersCreateForm";
import { IOrdersCreateModal } from "./types";

export const OrdersCreateModal: FC<IOrdersCreateModal> = ({
  showModal,
  showConfirm,
  onClose,
  onSave,
  onConformClose,
  onCancelClose,
  titleModal,
  localities,
  getLocality,
  localitiesLoading,
  ordersAddLoading,
  selectedOrder,
}) => {
  return (
    <Modal
      open={showModal}
      onClose={onClose}
      title={titleModal}
      showConfirm={showConfirm}
      loading={ordersAddLoading}
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
      <OrdersCreateForm
        onSave={onSave}
        onClose={onClose}
        localities={localities}
        getLocality={getLocality}
        localitiesLoading={localitiesLoading}
        selectedOrder={selectedOrder}
      />
    </Modal>
  );
};
