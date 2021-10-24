import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import css from "./styles.module.scss";

const Agency: FC = observer(() => {

  return (
    <div className={css.page}>
      Agency
    </div>
  );
});

export default Agency;
