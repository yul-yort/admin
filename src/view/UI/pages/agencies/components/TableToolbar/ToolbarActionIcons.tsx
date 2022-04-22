import { FC } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import { IToolbarActionIconsProps } from "./types";
import { Link } from "react-router5";

const ToolbarActionIcons: FC<IToolbarActionIconsProps> = ({
  selected,
  deleteAgency,
  addAgency,
  editAgency,
}) => {
  const AgencyActionIconsTemplate = () => {
    return (
      <Stack spacing={2} direction="row">
        {selected.length === 1 ? (
          <>
            <Link routeName="agencies.agency" routeParams={{ id: selected[0] }}>
              Подробнее
            </Link>

            <Tooltip title="Редактировать">
              <IconButton size="small" onClick={editAgency}>
                <EditIcon />
              </IconButton>
            </Tooltip>
          </>
        ) : null}
        <Tooltip title="Удалить">
          <IconButton size="small" onClick={deleteAgency}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    );
  };
  return (
    <>
      {selected.length > 0 ? (
        <AgencyActionIconsTemplate />
      ) : (
        <Tooltip title="Добавить агенство">
          <IconButton size="small" onClick={addAgency}>
            <AddIcon />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
};

export default ToolbarActionIcons;
