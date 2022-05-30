import { FC, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button, Paper, Typography } from "@mui/material";
import { useRouter } from "react-router5";

import css from "./styles.module.scss";
import { IDetail } from "./types";
import { ConfirmModal } from "../../../../components/common/ConfirmModal";
import { AgencyCreateEditModal } from "../../../../components/shared/AgencyCreateEditModal";
import { DetailAdditionalInfo } from "../DetailAdditionalInfo";
import { DetailOrders } from "../DetailOrders";
import { UIPhonesFormatter } from "../../../../components/shared/AgencyCreateEditForm/mappers";
import { ICreateOrEditAgencyFormFields } from "../../../../components/shared/AgencyCreateEditForm/types";
import { useTitle } from "../../../../hooks/useTitle";

export const Detail: FC<IDetail> = ({
  agency: { id, agencyName, phones = [], createDate, description, editedDate },
  agencyOrders,
  editAgency,
  deleteAgency,
  editLoading,
  deleteOrder,
  ordersLoading,
  createOrder,
  localities,
  getLocality,
  localitiesLoading,
}) => {
  const { navigate } = useRouter();

  const [deleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [editModal, setOpenEditModal] = useState<boolean>(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const { setTitle } = useTitle();

  const methods = useForm<ICreateOrEditAgencyFormFields>({
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
  };

  const handleConfirmCloseEditModal = () => {
    setShowConfirm(false);
    setOpenEditModal(false);

    reset();
  };

  const handleCancelCloseEditModal = () => {
    setShowConfirm(false);
  };

  const handleSaveEdit = async (fields: ICreateOrEditAgencyFormFields) => {
    await editAgency(fields);

    setTitle(fields.agencyName);
    setOpenEditModal(false);
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
          <Button
            variant="outlined"
            color="error"
            onClick={handleDelete}
            aria-label="delete"
          >
            Удалить
          </Button>
        </div>

        {/* FIXME: DetailAdditionalInfo сплющивается, нужно будет придумать решение */}
        <div className={css.detail}>
          <DetailAdditionalInfo
            handleEdit={handleEdit}
            agencyName={agencyName}
            createDate={createDate}
            editedDate={editedDate}
            phones={phones}
            description={description}
          />

          <DetailOrders
            ordersLoading={ordersLoading}
            deleteOrder={deleteOrder}
            agencyOrders={agencyOrders}
            createOrder={createOrder}
            localities={localities || []}
            getLocality={getLocality}
            localitiesLoading={localitiesLoading}
          />
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
