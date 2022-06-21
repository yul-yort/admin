import { ILocalityList } from "./types";
import { FC } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { IconButton } from "@mui/material";
import css from "./styles.module.scss";

const LocalityList: FC<ILocalityList> = ({
  localities,
  handleShowEditModal,
  handleShowDeleteModal,
}) => {
  return (
    // FIXME: высота карточек исправить
    <div className={css.lists}>
      {localities.map((item) => {
        return (
          <div key={item.id}>
            <Card className={css.card}>
              <Typography color="text.secondary" gutterBottom>
                {item.region}
              </Typography>
              <Typography variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {item.district}
              </Typography>
              <Typography variant="body2">{item.description}</Typography>
              <div className={css.actionButtons}>
                <IconButton
                  onClick={handleShowEditModal}
                  aria-label="edit order"
                >
                  <EditRoundedIcon fontSize="small" />
                </IconButton>
                <IconButton
                  onClick={handleShowDeleteModal}
                  aria-label="delete order"
                  color="error"
                >
                  <DeleteForeverIcon fontSize="small" />
                </IconButton>
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default LocalityList;
