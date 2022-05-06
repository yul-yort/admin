import { FC, useEffect } from "react";
import { IconButton, LinearProgress, Paper, TextField } from "@mui/material";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import { useForm } from "react-hook-form";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import Tooltip from "@mui/material/Tooltip";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import { IForm, IFormData } from "../types";
import styles from "../styles.module.scss";
import { getErrorText } from "src/libs/utils";

export const Form: FC<IForm> = ({
  loading,
  origin = "",
  destination = "",
  onSearch,
  onExpand,
  onReset,
  minified = false,
  className = "",
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<IFormData>();

  useEffect(() => {
    if (origin) {
      setValue("origin", origin);
    }
    if (destination) {
      setValue("destination", destination);
    }
  }, [setValue, origin, destination]);

  const handleChangeRoute = () => {
    const originValue = getValues("origin");
    const destinationValue = getValues("destination");

    setValue("origin", destinationValue);
    setValue("destination", originValue);
  };

  const handleReset = () => {
    onExpand();
    onReset?.();
  };

  return (
    <Paper elevation={3} className={`${styles.formWrapper} ${className}`}>
      <form onSubmit={handleSubmit(onSearch)} className={styles.wrapper}>
        <TextField
          className={styles.input}
          id="origin"
          label="Откуда"
          placeholder="Откуда"
          variant="outlined"
          autoFocus
          size="small"
          type="search"
          error={!!errors.origin}
          disabled={loading}
          helperText={getErrorText(errors, "origin")}
          {...register("origin", {
            required: true,
          })}
        />

        {origin && destination ? (
          <IconButton
            color="inherit"
            disabled={loading}
            className={styles.arrows}
            onClick={handleChangeRoute}
          >
            <SwapHorizIcon fontSize="inherit" />
          </IconButton>
        ) : (
          <ArrowRightAltOutlinedIcon className={styles.arrows} />
        )}

        <TextField
          className={styles.input}
          id="destination"
          label="Куда"
          placeholder="Куда"
          variant="outlined"
          size="small"
          type="search"
          disabled={loading}
          error={!!errors.destination}
          helperText={getErrorText(errors, "destination")}
          {...register("destination", {
            required: true,
          })}
        />

        <div className={styles.actions}>
          {minified && (
            <Tooltip title="Свернуть">
              <span>
                <IconButton
                  color="primary"
                  onClick={onExpand}
                  disabled={loading}
                  aria-label="collapse search form"
                >
                  <KeyboardArrowLeftOutlinedIcon
                    className={styles.rollUpButtonIcon}
                  />
                </IconButton>
              </span>
            </Tooltip>
          )}

          <Tooltip title="Поиск">
            <span>
              <IconButton
                type="submit"
                color="primary"
                disabled={loading}
                aria-label="search orders"
              >
                <SearchRoundedIcon />
              </IconButton>
            </span>
          </Tooltip>

          {onReset && (
            <Tooltip title="Сбросить">
              <span>
                <IconButton
                  onClick={handleReset}
                  disabled={loading}
                  aria-label="reset search form"
                >
                  <HighlightOffSharpIcon color="error" />
                </IconButton>
              </span>
            </Tooltip>
          )}
        </div>
      </form>

      {loading && <LinearProgress />}
    </Paper>
  );
};
