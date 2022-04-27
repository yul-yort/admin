import { FC, useState, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { RoutesCreateModal } from "./RoutesCreateModal";
import { ICreateRoutes, IRoutesCreateFormFields } from "./types";

export const CreateRoutes: FC<ICreateRoutes> = ({
  showModal,
  handleCloseModal,
}) => {
  //FIXME: добавить loading
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const methods = useForm<IRoutesCreateFormFields>();

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
    //FIXME: LOADING
    // if (editLoading) {
    //   return;
    // }

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

  const handleRouteCreate = async (fields: IRoutesCreateFormFields) => {
    console.log("получение данных:", fields);
    reset();
    handleCloseModal();
  };

  return (
    <FormProvider {...methods}>
      <RoutesCreateModal
        showModal={showModal}
        onClose={onClose}
        onSave={handleRouteCreate}
        showConfirm={showConfirm}
        onConformClose={handleConfirmCloseModal}
        onCancelClose={handleCancelCloseModal}
      />
    </FormProvider>
  );
};
