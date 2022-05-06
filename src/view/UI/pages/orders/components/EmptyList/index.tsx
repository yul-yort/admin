import SearchOffRoundedIcon from "@mui/icons-material/SearchOffRounded";
import { Typography } from "@mui/material";
import css from "./styles.module.scss";

export const EmptyList = () => {
  return (
    <div className={css.wrapper}>
      <SearchOffRoundedIcon fontSize="large" />
      <Typography variant="h6" align="center">
        По данному маршруту предложений не найдено
      </Typography>
    </div>
  );
};
