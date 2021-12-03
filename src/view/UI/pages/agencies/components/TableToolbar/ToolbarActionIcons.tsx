import { FC } from "react";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { IToolbarActionIconsProps } from "./types";

const ToolbarActionIcons: FC<IToolbarActionIconsProps> = ({numSelected, deleteAgency, addAgency, editAgency}) => {

  const AgencyActionIconsTemplate = () => {
    return (
      <Stack spacing={2} direction="row">
      {numSelected === 1
         ? <Stack spacing={2} direction="row">
             <Button variant="text">Подробнее</Button>
             <Tooltip title="Edit">
                 <IconButton onClick={() => editAgency()}>
                   <EditIcon/>
                 </IconButton>
             </Tooltip>
           </Stack>
         : null
       }
       <Tooltip title="Delete">
         <IconButton onClick={() => deleteAgency()}>
           <DeleteIcon />
         </IconButton>
       </Tooltip>
      </Stack>
    )
  }
  return (
    <>
      {numSelected > 0 
        ? <AgencyActionIconsTemplate/>
        : <Tooltip title="Добавить">
            <IconButton onClick={() => addAgency()}>
              <AddIcon fontSize="large"/>
            </IconButton>
          </Tooltip>
      }
    </>
  )
}

export default ToolbarActionIcons;