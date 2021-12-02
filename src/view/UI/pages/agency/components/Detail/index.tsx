import { FC, useState } from "react";
import css from "./styles.module.scss";
import { IDetail } from "./types";
import { Button, Paper, Typography } from "@mui/material";
import { ConfirmModal } from "../../../../components/ConfirmModal";
import { DetailEditModal } from "../DetailEditModal";
import { DetailAdditionalInfo } from "../DetailAdditionalInfo";
import { DetailRoutes } from "../DetailRoutes";
import { useFieldArray, useForm } from "react-hook-form";
import { formPhonesFormatter } from "./formPhonesFormatter";
import { IFormFields } from "../shared/types";

export const Detail: FC<IDetail> = ({
  agency: { agencyName, phoneValues = [], createDate, description, editedDate },
}) => {
  const [deleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [editModal, setOpenEditModal] = useState<boolean>(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  const {
    control,
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<IFormFields>({
    defaultValues: {
      agencyName,
      description,
      phones: formPhonesFormatter(phoneValues),
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "phones",
  });

  const handleDelete = () => {
    setOpenDeleteModal(true);
  };

  const handleEdit = () => {
    setOpenEditModal(true);
  };

  const handleCancelDelete = () => {
    setOpenDeleteModal(false);
  };

  const handleConfirmDelete = () => {
    setOpenDeleteModal(false);
  };

  // const handleSaveEdit = () => {
  //   setOpenEditModal(false);
  // };

  const handleCancelEdit = () => {
    setShowConfirm(true);
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
            phoneValues={phoneValues}
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

      {/* TODO использовать useFormContext() */}
      <DetailEditModal
        open={editModal}
        onClose={handleCancelEdit}
        showConfirm={showConfirm}
        isSubmitting={isSubmitting}
        errors={errors}
        register={register}
        fields={fields}
        remove={remove}
        append={append}
      />
    </>
  );
};
