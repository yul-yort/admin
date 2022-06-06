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

  //handleOrderEdit
  // const handleOrderEdit = async (fields: IOrdersCreateFormFields) => {
  //   if (orderID) {
  //     console.log("edit", fields);
  //   }
  // };

  const handleOrderCreate = async (fields: IOrdersCreateFormFields) => {
    await createOrder(fields);
    reset();
    handleCloseModal();
  };

  return (
    <FormProvider {...methods}>
      <OrdersCreateModal
        titleModal={titleModal}
        showModal={showModal}
        onClose={onClose}
        onSave={handleOrderCreate}
        showConfirm={showConfirm}
        onConformClose={handleConfirmCloseModal}
        onCancelClose={handleCancelCloseModal}
        localities={localities || []}
        getLocality={getLocality}
        localitiesLoading={localitiesLoading}
        ordersAddLoading={ordersAddLoading}
      />
    </FormProvider>
  );
};
