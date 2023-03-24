import { FC } from "react";
import {
  AppBar,
  Button,
  CircularProgress,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link as RouterLink } from "react-router5";
import { ISideBar } from "./types";
import css from "./styles.module.scss";
import routes from "../../../../../router/routes";
import { icons } from "./icons";
import { CONSTANTS } from "../../../../../common";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import NightsStayRoundedIcon from "@mui/icons-material/NightsStayRounded";

export const SideBar: FC<ISideBar> = ({
  open,
  onClose,
  onLogout,
  loading,
  onSetTheme,
  theme,
}) => {
  const handleChangeTheme = () => {
    onSetTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Drawer
      variant={"temporary"}
      anchor="left"
      open={open}
      onClose={onClose}
      container={() => document.getElementById("yy-body-wrapper")}
    >
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" noWrap component="div" className={css.title}>
            {CONSTANTS.projectName}
          </Typography>

          <IconButton
            onClick={onClose}
            color="inherit"
            aria-label="close drawer"
          >
            <CloseRoundedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <div className={css.menuWrapper}>
        <List>
          {routes.map((route) =>
            icons[route.name] ? (
              <ListItem
                key={route.name}
                onClick={() => {
                  onClose();
                }}
                className={css.listItem}
              >
                <RouterLink routeName={route.name} className={css.link}>
                  <ListItemIcon>{icons[route.name]}</ListItemIcon>
                  <ListItemText>{route.title}</ListItemText>
                </RouterLink>
              </ListItem>
            ) : null
          )}
        </List>

        <div className={css.logoutButtonWrapper}>
          <IconButton onClick={handleChangeTheme}>
            {theme === "dark" ? (
              <LightModeRoundedIcon />
            ) : (
              <NightsStayRoundedIcon color="action" />
            )}
          </IconButton>

          <Button
            aria-label="logout"
            variant="outlined"
            onClick={onLogout}
            className={css.logoutButton}
          >
            {loading ? <CircularProgress size={25} /> : "Выйти"}
          </Button>
        </div>
      </div>
    </Drawer>
  );
};
