import { FC } from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import { ITableToolbarProps } from "./types";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ToolbarActionIcons from "./ToolbarActionIcons";

const TableToolbar: FC<ITableToolbarProps> = ({ numSelected }) => {
  const deleteAgency = () => {
    console.log("delete Agency");
  };

  const editAgency = () => {
    console.log("edit Agency");
  };

  const addAgency = () => {
    console.log("add Agency");
  };

  const toolbarStyle = {
    pl: { sm: 2 },
    pr: { xs: 1, sm: 1 },
    ...(numSelected > 0 && {
      bgcolor: (theme: any) =>
        alpha(
          theme.palette.primary.main,
          theme.palette.action.activatedOpacity
        ),
    }),
  };

  return (
    <Toolbar sx={toolbarStyle}>
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Search />
      )}
      <ToolbarActionIcons
        numSelected={numSelected}
        deleteAgency={deleteAgency}
        addAgency={addAgency}
        editAgency={editAgency}
      />
    </Toolbar>
  );
};

export default TableToolbar;

//FIXME: common component
function Search() {
  return (
    <Box sx={{ flex: "1 1 100%" }}>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Поиск по названию"
          variant="standard"
        />
      </Box>
    </Box>
  );
}
