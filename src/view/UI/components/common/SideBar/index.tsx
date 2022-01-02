import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { ISideBar } from "./types";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import css from "./styles.module.scss";
import routes from "../../../../../router/routes";
import { icons } from "./icons";
import { useRouter } from "react-router5";
import { CONSTANTS } from "../../../../../constants/globalConstants";

export const SideBar: FC<ISideBar> = ({ open, onClose, isUnauthorized }) => {
  const { navigate } = useRouter();

  return (
    <Drawer variant={"temporary"} anchor="left" open={open} onClose={onClose}>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" noWrap component="div" className={css.title}>
            {CONSTANTS.projectName}
          </Typography>

          <IconButton onClick={onClose} color="inherit">
            <CloseRoundedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {!isUnauthorized ? (
        routes.map((route) =>
          icons[route.name] ? (
            <List key={route.name}>
              <ListItem
                button
                onClick={() => {
                  //TODO вынести, а лучше переписать на ссылки
                  navigate(route.name);
                  onClose();
                }}
              >
                <ListItemIcon>{icons[route.name]}</ListItemIcon>
                <ListItemText>{route.title}</ListItemText>
              </ListItem>
            </List>
          ) : null
        )
      ) : (
        <div>Требуется авторизация</div>
      )}
    </Drawer>
  );
};
