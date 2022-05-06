import { FC } from "react";
import { IconButton, LinearProgress, Paper, Typography } from "@mui/material";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import Tooltip from "@mui/material/Tooltip";

import { IMinifiedForm } from "../types";
import css from "../styles.module.scss";

export const MinifiedForm: FC<IMinifiedForm> = ({
  loading = false,
  origin,
  destination,
  onExpand,
  className = "",
  onReset,
}) => {
  return (
    <Paper elevation={3} className={`${css.formWrapper} ${className}`}>
      <div className={css.minifiedRouteWrapper}>
        {!origin || !destination ? (
          <Typography variant="h6" className={css.title}>
            Маршрут не указан
          </Typography>
        ) : (
          <div className={css.route}>
            <Typography variant="h6" className={css.title} align="center">
              {origin}
            </Typography>

            <ArrowRightAltOutlinedIcon className={css.icon} />

            <Typography variant="h6" className={css.title} align="center">
              {destination}
            </Typography>
          </div>
        )}

        <div>
          <Tooltip title="Изменить">
            <IconButton
              onClick={onExpand}
              color="primary"
              aria-label="expand search form"
            >
              <EditRoundedIcon />
            </IconButton>
          </Tooltip>

          {onReset && (
            <Tooltip title="Сбросить">
              <IconButton onClick={onReset} aria-label="reset search form">
                <HighlightOffSharpIcon color="error" />
              </IconButton>
            </Tooltip>
          )}
        </div>
      </div>

      {loading && <LinearProgress />}
    </Paper>
  );
};
