import React, { useState, VFC } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { FormProvider, useForm } from "react-hook-form";

import TableHeader from "../TableHeader";
import TableToolbar from "../TableToolbar";
import TableBodyTemplate from "../TableBody";
import { ITable } from "./types";
import css from "./styles.module.scss";
import { ICreateOrEditAgencyFormFields } from "../../../../components/shared/AgencyCreateEditForm/types";
import { AgencyCreateEditModal } from "../../../../components/shared/AgencyCreateEditModal";
import { EmptyList } from "../EmptyList";

const AgencyTable: VFC<ITable> = ({
  agencies,
  createAgency,
  isLoadingItem,
  modalLoading,
}) => {
  const [createModal, setOpenCreateModal] = useState<boolean>(false);

  const methods = useForm<ICreateOrEditAgencyFormFields>({
    defaultValues: {
      phones: [{ value: "" }],
    },
  });

  const { reset } = methods;

  const handleOpenModal = () => {
    setOpenCreateModal(true);
  };

  const handleCancelCreate = () => {
    setOpenCreateModal(false);

    reset();
  };

  const handleCreate = async (fields: ICreateOrEditAgencyFormFields) => {
    await createAgency(fields);
    handleCancelCreate();
  };

  return (
    <>
      {!agencies.length ? (
        <EmptyList onAddAgency={handleOpenModal} />
      ) : (
        <Paper className={css.wrapper}>
          <TableToolbar onAddAgency={handleOpenModal} />

          <TableContainer>
            <Table aria-labelledby="tableTitle" size="small">
              <TableHeader />

              <TableBodyTemplate
                rows={agencies}
                isLoadingItem={isLoadingItem}
              />
            </Table>
          </TableContainer>
        </Paper>
      )}

      <FormProvider {...methods}>
        <AgencyCreateEditModal
          loading={modalLoading}
          open={createModal}
          onClose={handleCancelCreate}
          onSave={handleCreate}
          title="Создать агенство"
        />
      </FormProvider>
    </>
  );
};

export default AgencyTable;
