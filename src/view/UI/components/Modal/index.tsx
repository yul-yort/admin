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

export const Modal: FC<IModal> = ({
  open,
  onClose,
  title,
  children,
  footer,
}) => (
  <MuiModal
    open={open}
    onClose={onClose}
    onBackdropClick={onClose}
    className={css.modalWrapper}
    disableEnforceFocus={true}
    disableAutoFocus={true}
  >
    <Paper elevation={0} className={css.modalContentWrapper}>
      <div className={css.titleWrapper}>
        <Typography variant="h6" component="h2">
          {title}

          <IconButton
            aria-label="close"
            className={css.closeButton}
            onClick={onClose}
          >
            <CloseRoundedIcon fontSize="small" />
          </IconButton>
        </Typography>
      </div>

      <div>{children}</div>

      {footer && <div className={css.footerWrapper}>footer</div>}
    </Paper>
  </MuiModal>
);
