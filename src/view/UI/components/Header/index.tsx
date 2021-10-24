import { FC } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

export const Header: FC = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
        >
          =
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Yul-Yort Admin
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
