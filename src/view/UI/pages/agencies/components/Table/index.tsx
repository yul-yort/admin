import { useState, VFC } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { FormProvider, useForm } from "react-hook-form";

import TableHeader from "../TableHeader";
import TableToolbar from "../TableToolbar";
import TableBodyTemplate from "../TableBody";
import { ITable } from "./types";
import css from "./styles.module.scss";
import { ICreateOrEditAgencyFormFields } from "../../../../components/shared";
import { AgencyCreateEditModal } from "../../../../components/shared";
import { EmptyList } from "../EmptyList";

const AgencyTable: VFC<ITable> = ({
  agencies,
  createAgency,
  isLoadingItem,
  modalLoading,
  searchAgency,
}) => {
  const [createModal, setOpenCreateModal] = useState<boolean>(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  const methods = useForm<ICreateOrEditAgencyFormFields>({
    defaultValues: {
      agencyName: "",
      description: "",
      phones: [{ value: "" }],
    },
  });

  const {
    reset,
    formState: { isDirty },
  } = methods;

  const handleConfirmCloseModal = () => {
    setShowConfirm(false);
    setOpenCreateModal(false);

    reset();
  };

  const handleCancelCloseEditModal = () => {
    setShowConfirm(false);
  };

  const handleOpenModal = () => {
    setOpenCreateModal(true);
  };

  const handleCancelCreate = () => {
    if (modalLoading) {
      return;
    }
    if (isDirty) {
      setShowConfirm(true);
    } else {
      handleConfirmCloseModal();
    }
  };

  const handleCreate = async (fields?: ICreateOrEditAgencyFormFields) => {
    // TODO могут ли поля быть необязательными?
    if (fields) {
      await createAgency(fields);
      handleConfirmCloseModal();
    }
  };

  return (
    <>
      <Paper className={css.wrapper}>
        <TableToolbar
          onAddAgency={handleOpenModal}
          searchAgency={searchAgency}
        />
        {!agencies.length ? (
          <EmptyList onAddAgency={handleOpenModal} />
        ) : (
          <TableContainer>
            <Table aria-labelledby="tableTitle" size="small">
              <TableHeader />

              <TableBodyTemplate
                rows={agencies}
                isLoadingItem={isLoadingItem}
              />
            </Table>
          </TableContainer>
        )}
      </Paper>

      <FormProvider {...methods}>
        <AgencyCreateEditModal
          showConfirm={showConfirm}
          onConformClose={handleConfirmCloseModal}
          onCancelClose={handleCancelCloseEditModal}
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
