import { FC, useState } from "react";
import css from "./styles.module.scss";
import { IDetail, IFormFields } from "./types";
import { Button, Paper, Typography } from "@mui/material";
import { ConfirmModal } from "../../../../components/common/ConfirmModal";
import { AgencyCreateEditModal } from "../../../../components/sharedComponents/AgencyCreateEditModal";
import { DetailAdditionalInfo } from "../DetailAdditionalInfo";
import { DetailRoutes } from "../DetailRoutes";
import { FormProvider, useForm } from "react-hook-form";
import { formPhonesFormatter } from "./formPhonesFormatter";

export const Detail: FC<IDetail> = ({
  agency: { agencyName, phoneValues = [], createDate, description, editedDate },
}) => {
  const [deleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [editModal, setOpenEditModal] = useState<boolean>(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  const methods = useForm<IFormFields>({
    defaultValues: {
      agencyName,
      description,
      phones: formPhonesFormatter(phoneValues),
    },
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

      <FormProvider {...methods}>
        <AgencyCreateEditModal
          open={editModal}
          onClose={handleCancelEdit}
          showConfirm={showConfirm}
          title="Редактировать агенство"
        />
      </FormProvider>
    </>
  );
};
