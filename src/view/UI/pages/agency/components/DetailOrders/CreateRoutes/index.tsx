import { FC, useState, useEffect } from "react";
import { FormProvider } from "react-hook-form";
import { RoutesCreateModal } from "./RoutesCreateModal";
import { ICreateRoutes, IRoutesCreateFormFields } from "./types";

export const CreateRoutes: FC<ICreateRoutes> = ({
  showModal,
  handleCloseModal,
  titleModal,
  methods,
  routeID,
}) => {
  //FIXME: добавить loading
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
    if (routeID) {
      console.log("edit");
    } else {
      console.log("create");
    }
    reset();
    handleCloseModal();
  };

  return (
    <FormProvider {...methods}>
      <RoutesCreateModal
        titleModal={titleModal}
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
