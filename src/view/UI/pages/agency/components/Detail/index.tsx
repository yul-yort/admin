import { FC, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button, Paper, Typography } from "@mui/material";
import { useRouter } from "react-router5";
import css from "./styles.module.scss";
import { IDetail, IFormFields } from "./types";
import { ConfirmModal } from "../../../../components/common/ConfirmModal";
import { AgencyCreateEditModal } from "../../../../components/shared/AgencyCreateEditModal";
import { DetailAdditionalInfo } from "../DetailAdditionalInfo";
import { DetailRoutes } from "../DetailRoutes";
import { UIPhonesFormatter, VMPhonesRequestFormatter } from "./mappers";
import { useNotification } from "../../../../hooks/useNotification";

export const Detail: FC<IDetail> = ({
  agency: { id, agencyName, phones = [], createDate, description, editedDate },
  editAgency,
  deleteAgency,
  editLoading,
}) => {
  const { navigate } = useRouter();
  const { addNotification } = useNotification();

  const [deleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [editModal, setOpenEditModal] = useState<boolean>(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  const methods = useForm<IFormFields>({
    defaultValues: {
      id,
      agencyName,
      description,
      phones: UIPhonesFormatter(phones),
    },
  });

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

  const handleDelete = () => {
    setOpenDeleteModal(true);
  };

  const handleEdit = () => {
    setOpenEditModal(true);
  };

  const handleCancelDelete = () => {
    setOpenDeleteModal(false);
  };

  const handleConfirmDelete = async () => {
    setOpenDeleteModal(false);

    await deleteAgency({ id });
    navigate("agencies");

    addNotification({
      type: "success",
      message: `Агентство "${agencyName}" удалено`,
    });
  };

  const handleConfirmCloseEditModal = () => {
    setShowConfirm(false);
    setOpenEditModal(false);

    reset();
  };

  const handleCancelCloseEditModal = () => {
    setShowConfirm(false);
  };

  const handleSaveEdit = async (fields: IFormFields) => {
    try {
      await editAgency({
        ...fields,
        phones: VMPhonesRequestFormatter(fields.phones),
        editedDate: new Date(),
      });

      setOpenEditModal(false);

      addNotification({
        type: "success",
        message: "Данные сохранены",
      });
    } catch (err) {
      reset(fields);
      addNotification({
        type: "error",
        // @ts-ignore
        message: `${err?.name} ${err?.message}`,
      });
      // TODO в случае ошибки кнопка "Сохранить не отсается активным". Нужно исправить.
      throw err;
    }
  };

  const handleCancelEdit = () => {
    if (editLoading) {
      return;
    }

    if (isDirty) {
      setShowConfirm(true);
    } else {
      handleConfirmCloseEditModal();
    }
  };

  return (
    <>
      <Paper className={css.wrapper}>
        <div className={css.pageHeader}>
          <Typography variant="h6" className={css.headerTitle}>
            {agencyName}
          </Typography>
          <Button variant="text" color="error" onClick={handleDelete}>
            Удалить
          </Button>
        </div>

        <div className={css.detail}>
          <DetailAdditionalInfo
            handleEdit={handleEdit}
            agencyName={agencyName}
            createDate={createDate}
            editedDate={editedDate}
            phoneValues={phones}
            description={description}
          />

          <DetailRoutes />
        </div>
      </Paper>

      <ConfirmModal
        open={deleteModal}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        title="Подтвердите удаление агентства."
      />

      <FormProvider {...methods}>
        <AgencyCreateEditModal
          open={editModal}
          loading={editLoading}
          onClose={handleCancelEdit}
          onSave={handleSaveEdit}
          onConformClose={handleConfirmCloseEditModal}
          onCancelClose={handleCancelCloseEditModal}
          showConfirm={showConfirm}
          title="Редактировать агенство"
        />
      </FormProvider>
    </>
  );
};
