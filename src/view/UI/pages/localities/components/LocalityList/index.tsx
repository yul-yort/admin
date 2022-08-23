import { ILocalityList } from "./types";
import { FC, MouseEventHandler } from "react";
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
  const handleEdit: MouseEventHandler<Element> = ({ target }) => {
    if (target instanceof Element) {
      const $button = target.closest("[data-edit-id]");

      if ($button && $button instanceof HTMLElement) {
        const id = $button.dataset.editId;
        id && handleShowEditModal(id);
      }
    }
  };

  const handleDelete: MouseEventHandler<Element> = ({ target }) => {
    if (target instanceof Element) {
      const $button = target.closest("[data-delete-id]");

      if ($button && $button instanceof HTMLElement) {
        const id = $button.dataset.deleteId;
        id && handleShowDeleteModal(id);
      }
    }
  };

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
                  onClick={handleEdit}
                  aria-label="edit order"
                  data-edit-id={item.id}
                >
                  <EditRoundedIcon fontSize="small" />
                </IconButton>
                <IconButton
                  onClick={handleDelete}
                  aria-label="delete order"
                  color="error"
                  data-delete-id={item.id}
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
