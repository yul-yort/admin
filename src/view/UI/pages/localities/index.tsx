import { FC } from "react";
import { observer } from "mobx-react-lite";
import { useViewModel } from "../../hooks/useViewModel";
import { ILocalityVM } from "src/view/viewModels/Locality/types";
import Loading from "../orders/components/Loading";
import LocalityList from "./components/LocalityList";

const Localities: FC = observer(() => {
  const localityVM = useViewModel<ILocalityVM>("locality");

  console.log(localityVM.localities);
  return (
    <div>
      {localityVM.loading && <Loading />}

      {!localityVM.loading && !localityVM.error && localityVM.localities && (
        <LocalityList localities={localityVM.localities || []} />
      )}
    </div>
  );
});

export default Localities;
