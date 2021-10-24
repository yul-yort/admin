import { FC } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { IAppBar } from "./types";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useRoute } from "react-router5";
import { IRoute } from "../../../../router/types";
import css from "./styles.module.scss";

export const Header: FC<IAppBar> = ({ onOpen }) => {
  const router = useRoute();

  const title = router.router
    .getDependencies()
    .routes.find((route: IRoute) => route.name === router.route.name).title;

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onOpen}
        >
          <MenuRoundedIcon />
        </IconButton>

        <Typography variant="h6" noWrap component="div" className={css.title}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
