import {
  AppBar,
  Divider,
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

export const SideBar: FC = () => {
  return (
    <Drawer variant="temporary" anchor="left" open={true}>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Yul-Yort Admin
          </Typography>
          <IconButton>X</IconButton>
        </Toolbar>
      </AppBar>
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text) => (
          <ListItem button key={text}>
            <ListItemIcon>=</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text) => (
          <ListItem button key={text}>
            <ListItemIcon>=</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
