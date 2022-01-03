import { FC } from "react";
import { observer } from "mobx-react-lite";
import { useViewModel } from "../../hooks/useViewModel";
import { Detail } from "./components/Detail";
import Error from "./components/Error";
import Loading from "./components/Loading";

const Agency: FC = observer(() => {
  const agencyVM = useViewModel("agency");

  return (
    <div>
      {agencyVM.loading && <Loading />}

      {agencyVM.error && !agencyVM.loading && <Error error={agencyVM.error} />}

      {!agencyVM.error && !agencyVM.loading && agencyVM.agency && (
        <Detail agency={agencyVM.agency} />
      )}
    </div>
  );
});

export default Agency;
