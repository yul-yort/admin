import { ILocalityList } from "./types";
import { FC } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { IconButton } from "@mui/material";
import css from "./styles.module.scss";

const LocalityList: FC<ILocalityList> = ({ localities }) => {
  console.log(localities);
  return (
    // FIXME: высота карточек исправить
    <div className={css.lists}>
      {localities.map((item) => {
        return (
          <div key={item.id}>
            <Card>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Республика Башкортстан
                </Typography>
                <Typography variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Зилаир
                </Typography>
                <Typography variant="body2">{item.description}</Typography>
              </CardContent>
              <CardActions>
                <IconButton aria-label="edit order">
                  <EditRoundedIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="delete order" color="error">
                  <DeleteForeverIcon fontSize="small" />
                </IconButton>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default LocalityList;
