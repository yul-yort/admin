import { FC, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { LocalityCreateModal } from "./LocalityCreateModal";
import { ICreateLocality, ILocalityCreateFormFields } from "./types";

const defaultValues: ILocalityCreateFormFields = {
  name: "",
  region: "",
  description: "",
  district: "",
};

const CreateLocality: FC<ICreateLocality> = ({
  showModal,
  handleCloseCreateModal,
  onSave,
  loading,
  titleModal,
  selectedLocality,
}) => {
  const methods = useForm<ILocalityCreateFormFields>({
    defaultValues,
  });
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  const {
    formState,
    formState: { isSubmitSuccessful, isDirty },
    reset,
    getValues,
    setValue,
  } = methods;

  useEffect(() => {
    if (selectedLocality) {
      const keys = Object.keys(
        defaultValues
      ) as (keyof ILocalityCreateFormFields)[];

      keys.forEach((key: keyof ILocalityCreateFormFields) => {
        setValue(key as keyof ILocalityCreateFormFields, selectedLocality[key]);
      });
    } else {
      Object.keys(defaultValues).forEach((key) => {
        setValue(key as keyof ILocalityCreateFormFields, "");
      });
    }
  }, [selectedLocality, setValue]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(getValues());
    }
  }, [formState, getValues, isSubmitSuccessful, reset]);

  const handleSave = async (fields: ILocalityCreateFormFields) => {
    await onSave(fields);
    reset();
    handleCloseCreateModal();
  };

  const onClose = () => {
    if (loading) {
      return;
    }
    if (isDirty) {
      setShowConfirm(true);
    } else {
      handleCloseCreateModal();
      reset();
    }
  };

  const handleConfirmCloseModal = () => {
    setShowConfirm(false);
    handleCloseCreateModal();
    reset();
  };

  const handleConfirmClose = () => {
    setShowConfirm(false);
  };

  return (
    <FormProvider {...methods}>
      <LocalityCreateModal
        loading={loading}
        showModal={showModal}
        titleModal={titleModal}
        onSave={handleSave}
        onClose={onClose}
        showConfirm={showConfirm}
        handleConfirmClose={handleConfirmClose}
        handleConfirmCloseModal={handleConfirmCloseModal}
      />
    </FormProvider>
  );
};

export default CreateLocality;
