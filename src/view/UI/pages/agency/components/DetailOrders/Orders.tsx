import { FC, MouseEventHandler, useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import css from "./styles.module.scss";
import { IAgencyOrders } from "./types";
import { getCurrency } from "src/libs/utils";
import { ConfirmModal } from "../../../../components/common";

export const Orders: FC<IAgencyOrders> = ({
  handleEditOrder,
  agencyOrders,
  handleDeleteOrder,
}) => {
  const [deleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [deletedOrderId, setDeletedOrderId] = useState<Nullable<number>>(null);

  const handleCancelDelete = () => {
    setOpenDeleteModal(false);
    setDeletedOrderId(null);
  };

  const handleConfirmDelete = () => {
    deletedOrderId && handleDeleteOrder(deletedOrderId);
    handleCancelDelete();
  };

  const handleClickEdit: MouseEventHandler<HTMLButtonElement> = ({
    target,
  }) => {
    if (target instanceof HTMLElement) {
      const id = target.dataset.editId;
      id && handleEditOrder(id);
    }
  };

  const handleClickDelete: MouseEventHandler<HTMLButtonElement> = ({
    target,
  }) => {
    setOpenDeleteModal(true);

    if (target instanceof HTMLElement) {
      setDeletedOrderId(Number(target.dataset.deleteId) || null);
    }
  };

  return (
    <>
      {agencyOrders.length ? (
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>ОТКУДА</TableCell>
                <TableCell>КУДА</TableCell>
                <TableCell>ЦЕНА</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>

            <TableBody>
              {agencyOrders.map(({ id, route, price, currencyISO }) => (
                <TableRow key={id} className={css.tableRow}>
                  <TableCell>{route.origin.name}</TableCell>
                  <TableCell>{route.destination.name}</TableCell>
                  <TableCell className={css.currencyCell}>
                    {price} {getCurrency(currencyISO)}
                  </TableCell>
                  <TableCell>
                    <div className={css.icons}>
                      <IconButton
                        aria-label="edit order"
                        data-edit-id={id}
                        onClick={handleClickEdit}
                      >
                        <EditRoundedIcon
                          fontSize="small"
                          className={css.icon}
                        />
                      </IconButton>
                      <IconButton
                        aria-label="delete order"
                        data-delete-id={id}
                        color="error"
                        onClick={handleClickDelete}
                      >
                        <DeleteForeverIcon
                          fontSize="small"
                          className={css.icon}
                        />
                      </IconButton>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div>
          <h3>Поездки не найдены!</h3>
        </div>
      )}

      <ConfirmModal
        open={deleteModal}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        title="Подтвердите удаление поездки."
      />
    </>
  );
};
