import { Button, Paper, Typography } from "@mui/material";
import { forwardRef } from "react";
import { IConfirmBody } from "./types";
import css from "./styles.module.scss";
import classnames from "classnames";

export const ConfirmBody = forwardRef<HTMLDivElement, IConfirmBody>(
  (
    {
      text = "Подтвердить выполнение действия?",
      title,
      confirmColor = "success",
      cancelColor = "info",
      cancelText = "Отмена",
      confirmText = "Подтвердить",
      onCancel,
      onConfirm,
      className,
    },
    ref
  ) => {
    return (
      <Paper
        elevation={5}
        className={classnames(css.contentWrapper, className)}
        ref={ref}
      >
        <div>
          {title && (
            <Typography variant="h6" component="h2">
              {title}
            </Typography>
          )}

          {text && <Typography>{text}</Typography>}
        </div>

        <div className={css.actions}>
          <Button
            variant="text"
            color={cancelColor}
            onClick={onCancel}
            aria-label="cancel"
          >
            {cancelText}
          </Button>
          <Button
            variant="text"
            color={confirmColor}
            onClick={onConfirm}
            aria-label="confirm"
          >
            {confirmText}
          </Button>
        </div>
      </Paper>
    );
  }
);

ConfirmBody.displayName = "ConfirmBody";
