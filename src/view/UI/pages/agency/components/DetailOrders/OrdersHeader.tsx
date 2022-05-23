import { FC } from "react";
import { IconButton, Typography } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import sharedCss from "../shared/styles.module.scss";
import { IOrdersHeader } from "./types";

export const OrdersHeader: FC<IOrdersHeader> = ({
  handleCreateOrder,
  ordersLoading,
}) => {
  return (
    <div className={sharedCss.header}>
      <Typography variant="h6">Поездки</Typography>
      <IconButton
        disabled={ordersLoading}
        onClick={handleCreateOrder}
        aria-label="add order"
      >
        <AddRoundedIcon />
      </IconButton>
    </div>
  );
};
