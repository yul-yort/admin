import { FC } from "react";
import {
  IconButton,
  Modal as MuiModal,
  Paper,
  Typography,
} from "@mui/material";
import { IModal } from "./types";
import css from "./styles.module.scss";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { ConfirmBody } from "../ConfirmBody";
import CircularProgress from "@mui/material/CircularProgress";

export const Modal: FC<IModal> = ({
  open,
  loading = false,
  onClose,
  title,
  children,
  footer,
  showConfirm = false,
  confirmProps,
}) => {
  return (
    <MuiModal
      open={open}
      onClose={onClose}
      onBackdropClick={onClose}
      className={css.modalWrapper}
      disableEnforceFocus={true}
      disableAutoFocus={true}
    >
      <Paper elevation={1} className={css.modalContentWrapper}>
        <div className={css.titleWrapper}>
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
          <IconButton
            aria-label="close modal"
            className={css.closeButton}
            onClick={onClose}
          >
            <CloseRoundedIcon fontSize="small" />
          </IconButton>
        </div>

        <div className={css.contentWrapper}>{children}</div>

        {footer && <div className={css.footerWrapper}>{footer}</div>}

        {showConfirm && (
          <div className={css.confirmWrapper}>
            <ConfirmBody className={css.confirmContainer} {...confirmProps} />
          </div>
        )}
        {loading && (
          <div className={css.loadingContainer}>
            <CircularProgress />
          </div>
        )}
      </Paper>
    </MuiModal>
  );
};
