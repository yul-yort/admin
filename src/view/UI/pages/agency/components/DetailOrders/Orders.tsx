import { FC } from "react";
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

export const Orders: FC<IAgencyOrders> = ({
  handleEditOrder,
  agencyOrders,
  handleDeleteOrder,
}) => {
  //TODO: any
  const handleClickRow = (event: any) => {
    const $editButton = event.target.closest("[data-edit-id]");
    const $deleteButton = event.target.closest("[data-delete-id]");

    $editButton && handleEditOrder($editButton.dataset.editId);
    $deleteButton && handleDeleteOrder($deleteButton.dataset.deleteId);
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

            <TableBody onClick={handleClickRow}>
              {agencyOrders.map(({ id, route, price, currencyISO }) => (
                <TableRow key={id} className={css.tableRow}>
                  <TableCell>{route.origin.name}</TableCell>
                  <TableCell>{route.destination.name}</TableCell>
                  <TableCell>
                    {price} {getCurrency(currencyISO)}
                  </TableCell>
                  <TableCell>
                    <div className={css.icons}>
                      <IconButton aria-label="edit order" data-edit-id={id}>
                        <EditRoundedIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        aria-label="delete order"
                        data-delete-id={id}
                        color="error"
                      >
                        <DeleteForeverIcon fontSize="small" />
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
          <h1>Поездки не найдены!</h1>
        </div>
      )}
    </>
  );
};
