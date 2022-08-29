import { FC, useState, useEffect } from "react";
import { FormProvider } from "react-hook-form";
import { OrdersCreateModal } from "./OrdersCreateModal";
import { ICreateOrders, IOrdersCreateFormFields } from "./types";

export const CreateOrder: FC<ICreateOrders> = ({
  showModal,
  handleCloseModal,
  titleModal,
  methods,
  createOrder,
  localities,
  getLocality,
  localitiesLoading,
  ordersAddLoading,
  selectedOrder,
  handleOrderEdit,
}) => {
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  const {
    formState,
    formState: { isSubmitSuccessful, isDirty },
    reset,
    getValues,
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(getValues());
    }
  }, [formState, getValues, isSubmitSuccessful, reset]);

  const onClose = () => {
    if (ordersAddLoading) {
      return;
    }

    if (isDirty) {
      setShowConfirm(true);
    } else {
      handleConfirmCloseModal();
    }
  };

  const handleConfirmCloseModal = () => {
    setShowConfirm(false);
    handleCloseModal();
    reset();
  };

  const handleCancelCloseModal = () => {
    setShowConfirm(false);
  };

  const onSave = async (fields: IOrdersCreateFormFields) => {
    if (selectedOrder) {
      const orderEditfields = {
        ...selectedOrder,
        price: Number(fields.price),
      };
      await handleOrderEdit(orderEditfields);
    } else {
      console.log(fields);
      const test = {
        agency: "6305bce8939ec11f6e50331e",
        route: {
          origin: "6305c9737d309fe97c6fb28a",
          destination: "6305c9737d309fe97c6fb28a",
        },
        price: "1",
      };
      // await createOrder(fields);
    }
    reset();
    handleCloseModal();
  };

  return (
    <FormProvider {...methods}>
      <OrdersCreateModal
        titleModal={titleModal}
        showModal={showModal}
        onClose={onClose}
        onSave={onSave}
        showConfirm={showConfirm}
        onConformClose={handleConfirmCloseModal}
        onCancelClose={handleCancelCloseModal}
        localities={localities || []}
        getLocality={getLocality}
        localitiesLoading={localitiesLoading}
        ordersAddLoading={ordersAddLoading}
        selectedOrder={selectedOrder}
      />
    </FormProvider>
  );
};
