import { Link, Typography } from "@mui/material";
import { FC } from "react";
import css from "./styles.module.scss";

interface IProps {
  phones?: string[];
}

export const Phones: FC<IProps> = ({ phones }) => {
  return (
    <>
      {phones && phones.length ? (
        phones.map((phone, index) => (
          <Link
            className={css.phone}
            key={phone + index}
            href={`tel:${phone}`}
            underline="none"
            variant="subtitle2"
            align="left"
          >
            {phone}
          </Link>
        ))
      ) : (
        <Typography
          className={css.phone}
          variant="subtitle2"
          align="left"
          color="text.secondary"
        >
          Телефон не указан
        </Typography>
      )}
    </>
  );
};
