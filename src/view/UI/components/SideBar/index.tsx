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
import routes from "../../../../router/routes";
import { icons } from "./icons";
import { useRouter } from "react-router5";

export const SideBar: FC<ISideBar> = ({ open, onClose }) => {
  const { navigate } = useRouter();

  return (
    <Drawer variant={"temporary"} anchor="left" open={open} onClose={onClose}>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" noWrap component="div" className={css.title}>
            Yul-Yort Admin
          </Typography>

          <IconButton onClick={onClose} color="inherit">
            <CloseRoundedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {routes.map((route) => (
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
      ))}
    </Drawer>
  );
};
