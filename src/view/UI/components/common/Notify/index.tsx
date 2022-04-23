import { FC } from "react";
import { Alert, Snackbar } from "@mui/material";

import { INotify } from "./types";

export const Notify: FC<INotify> = ({ open, onClose, type, message }) => {
  if (!open) {
    return null;
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={true}
      autoHideDuration={3000}
      onClose={onClose}
    >
      <Alert
        variant="filled"
        severity={type}
        onClose={onClose}
        closeText="Закрыть"
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
