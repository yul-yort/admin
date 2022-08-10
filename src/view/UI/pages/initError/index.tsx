import { FC, useState } from "react";
import { IInitErrorPageProps } from "./types";
import { Collapse, IconButton, Typography } from "@mui/material";
import css from "./styles.module.scss";
import SentimentVeryDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentVeryDissatisfiedOutlined";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const InitError: FC<IInitErrorPageProps> = ({ error }) => {
  const [expand, setExpand] = useState<boolean>(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  return (
    <div className={css.page}>
      <div className={css.pageContainer}>
        <Typography align="center" className={css.icon} color="error.main">
          <SentimentVeryDissatisfiedOutlinedIcon fontSize="inherit" />
        </Typography>

        <Typography variant="h6" align="center" color="error.main">
          Произошла ошибка при инициализации приложения
        </Typography>

        {error instanceof Error && (
          <div>
            <Typography align="center" color="error.main">
              {error.name}
            </Typography>

            <Typography
              align="center"
              color="error.main"
              onClick={handleExpand}
              className={css.title}
            >
              {error.message}

              <IconButton aria-label="expand">
                {expand ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </Typography>

            <Collapse in={expand} timeout="auto" unmountOnExit>
              <Typography align="center">{error.toString()}</Typography>
              <br />
              <Typography align="center">{error.stack}</Typography>
            </Collapse>
          </div>
        )}
      </div>
    </div>
  );
};

export default InitError;
