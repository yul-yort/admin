import { FC, HTMLAttributes, useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { IOrdersCreateForm, IOrdersCreateFormFields } from "./types";
import { getErrorText } from "src/libs/utils";
import { CONSTANTS } from "src/constants/globalConstants";
import css from "./styles.module.scss";
import Autocomplete from "@mui/material/Autocomplete";
import { ILocalityEntity } from "../../../../../../../data/Locality/entity";

//TODO нужно сделать обязательное поле "Выбор валюты". (https://trello.com/c/wXEG7n0j)
export const OrdersCreateForm: FC<IOrdersCreateForm> = ({
  onSave,
  onClose,
  localities,
  getLocality,
  localitiesLoading,
  selectedOrder,
}) => {
  const {
    handleSubmit,
    register,
    clearErrors,
    formState: { errors, isSubmitting, isDirty },
  } = useFormContext<IOrdersCreateFormFields>();

  const noOptionsText = "Не найдено";
  const loadingText = "Загрузка...";
  const [originId, setOriginId] = useState<Nullable<number>>(null);
  const [destinationId, setDestinationId] = useState<Nullable<number>>(null);

  useEffect(() => {
    originId && clearErrors("originId");
    destinationId && clearErrors("destinationId");
  }, [originId, destinationId, clearErrors]);

  useEffect(() => {
    if (selectedOrder) {
      setOriginId(selectedOrder?.route.origin.id);
      setDestinationId(selectedOrder?.route.destination.id);
    }
  }, [selectedOrder]);

  const handleOpen = async () => {
    await getLocality();
  };

  const renderOption = (
    props: HTMLAttributes<HTMLLIElement>,
    option: ILocalityEntity
  ) => (
    <li {...props} key={option.id}>
      {option.name}
    </li>
  );

  return (
    <form onSubmit={handleSubmit(onSave)}>
      <div className={css.row}>
        <Autocomplete
          disabled={Boolean(selectedOrder)}
          defaultValue={selectedOrder?.route.origin}
          size="small"
          fullWidth
          id="originId"
          options={localities}
          loading={localitiesLoading}
          loadingText={loadingText}
          getOptionLabel={(option) => option.name}
          noOptionsText={noOptionsText}
          onOpen={handleOpen}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          renderOption={renderOption}
          onChange={(_, newValue) => {
            const originID = newValue?.id || null;
            setOriginId(originID);
          }}
          renderInput={(params) => {
            return (
              <TextField
                autoFocus
                {...params}
                {...register("originId", {
                  required: true,
                  valueAsNumber: true,
                })}
                error={!!getErrorText(errors, "originId")}
                helperText={getErrorText(errors, "originId")}
                label="Откуда"
                placeholder="Откуда"
              />
            );
          }}
        />
      </div>

      <div className={css.row}>
        <Autocomplete
          disabled={Boolean(selectedOrder)}
          defaultValue={selectedOrder?.route.destination}
          size="small"
          fullWidth
          id="destinationId"
          options={localities}
          loading={localitiesLoading}
          loadingText={loadingText}
          getOptionLabel={(option) => option.name}
          noOptionsText={noOptionsText}
          onOpen={handleOpen}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          renderOption={renderOption}
          onChange={(_, newValue) => {
            const destinationID = newValue?.id || null;
            setDestinationId(destinationID);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              {...register("destinationId", {
                required: true,
                valueAsNumber: true,
              })}
              error={!!getErrorText(errors, "destinationId")}
              helperText={getErrorText(errors, "destinationId")}
              label="Куда"
              placeholder="Куда"
            />
          )}
        />
      </div>

      <div className={css.row}>
        <TextField
          id="price"
          label="Цена"
          placeholder="Цена"
          variant="outlined"
          size="small"
          fullWidth
          error={!!getErrorText(errors, "price")}
          disabled={isSubmitting}
          helperText={getErrorText(errors, "price")}
          {...register("price", {
            required: true,
            valueAsNumber: true,
            pattern: {
              value: CONSTANTS.numberPattern,
              message: "Введите числовое значение без пробелов",
            },
          })}
        />
      </div>

      <div className={css.footerWrapper}>
        <Button disabled={isSubmitting} onClick={onClose} aria-label="cancel">
          Отмена
        </Button>
        <Button
          disabled={isSubmitting || !isDirty}
          type="submit"
          aria-label="save"
        >
          Сохранить
        </Button>
      </div>
    </form>
  );
};
