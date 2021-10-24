import { FC, useEffect } from "react";
import {
  Button,
  IconButton,
  LinearProgress,
  Paper,
  TextField,
} from "@mui/material";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import { useForm } from "react-hook-form";
import { IForm, IFormData } from "../types";
import styles from "../styles.module.scss";
import { FormErrorsDictionary } from "../../../../../constants/FormErrorsDictionary";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

export const Form: FC<IForm> = ({
  loading,
  origin = "",
  destination = "",
  onSearch,
  onExpand,
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
          helperText={
            errors?.origin?.type && FormErrorsDictionary[errors.origin.type]
          }
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
          helperText={
            errors?.destination?.type &&
            FormErrorsDictionary[errors.destination.type]
          }
          {...register("destination", {
            required: true,
          })}
        />

        <div className={styles.actions}>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            size="large"
            className={styles.formButton}
            disabled={loading}
          >
            Найти
          </Button>

          {minified && (
            <Button
              startIcon={
                <KeyboardArrowLeftOutlinedIcon
                  className={styles.rollUpButtonIcon}
                />
              }
              size="large"
              color="primary"
              variant="text"
              onClick={onExpand}
              className={styles.formButton}
            >
              Свернуть
            </Button>
          )}
        </div>
      </form>

      {loading && <LinearProgress />}
    </Paper>
  );
};
