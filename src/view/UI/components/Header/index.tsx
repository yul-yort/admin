import { FC } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { IAppBar } from "./types";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import css from "./styles.module.scss";

export const Header: FC<IAppBar> = ({ openDrawer, title }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={openDrawer}
        >
          <MenuRoundedIcon />
        </IconButton>

        {title && (
          <Typography variant="h6" noWrap component="div" className={css.title}>
            {title}
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
};
