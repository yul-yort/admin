import { FC } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { IAppBar } from "./types";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import css from "./styles.module.scss";

export const Header: FC<IAppBar> = ({ openDrawer, title, user }) => {
  return (
    <AppBar position="fixed">
      <Toolbar className={css.toolbar}>
        <div className={css.leftColumn}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={openDrawer}
          >
            <MenuRoundedIcon />
          </IconButton>

          {title && (
            <Typography variant="h6" noWrap className={css.title}>
              {title}
            </Typography>
          )}
        </div>

        <Typography variant="h6" noWrap className={css.title}>
          {user?.lastName} {user?.firstName[0]}.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
