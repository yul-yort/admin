import { Skeleton } from "@mui/material";
import css from "./styles.module.scss";

export const OrderSkeleton = () => {
  return (
    <Skeleton
      variant="rectangular"
      height={80}
      className={css.order}
      animation="wave"
    />
  );
};
