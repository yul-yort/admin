import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import css from "./styles.module.scss";
import { useViewModel } from "../../hooks/useViewModel";
import { Detail } from "./components/Detail/Detail";

const Agency: FC = observer(() => {
  const agencyVM = useViewModel("agency");

  return (
    <div className={css.page}>
      {/*{agencyVM.loading && <Loading />}*/}

      {/*{agencyVM.error && <Error error={agencyVM.error} />}*/}

      {!agencyVM.error && !agencyVM.loading && agencyVM.agency && (
        <Detail agency={agencyVM.agency} />
      )}
    </div>
  );
});

export default Agency;
