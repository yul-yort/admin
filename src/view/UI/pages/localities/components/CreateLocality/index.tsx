import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { LocalityCreateModal } from "./LocalityCreateModal";
import { ICreateLocality, ILocalityFormFields } from "./types";

const CreateLocality: FC<ICreateLocality> = ({
  showModal,
  handleCloseCreateModal,
  titleModal,
}) => {
  const methods = useForm<ILocalityFormFields>({});

  const {
    formState,
    formState: { isSubmitSuccessful, isDirty },
    reset,
    getValues,
  } = methods;

  const onSave = (fields: any) => {
    console.log(fields);
  };

  const onClose = () => {
    if (false) {
      return;
    }

    if (isDirty) {
      // setShowConfirm(true);
    } else {
      handleCloseCreateModal();
      reset();
    }
  };

  return (
    <FormProvider {...methods}>
      <LocalityCreateModal
        showModal={showModal}
        handleCloseCreateModal={handleCloseCreateModal}
        titleModal={titleModal}
        onSave={onSave}
        onClose={onClose}
      />
    </FormProvider>
  );
};

export default CreateLocality;
