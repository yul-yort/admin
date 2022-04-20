import { FC } from "react";
import { IconButton, Typography} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import sharedCss from "../shared/styles.module.scss";

export const RoutesHeader: FC = () => {
  return (
    <div className={sharedCss.header}>
      <Typography variant="h6">Маршруты</Typography>
      <IconButton aria-label="add">
        <AddRoundedIcon />
      </IconButton>
    </div>
  );
};
