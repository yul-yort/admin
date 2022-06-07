import { FC } from "react";
import { observer } from "mobx-react-lite";
import { useViewModel } from "../../hooks/useViewModel";
import { ILocalityVM } from "src/view/viewModels/Locality/types";
import Loading from "../orders/components/Loading";
import LocalityList from "./components/LocalityList";
import LocalitiesHeader from "./components/Header";
import Error from "../../components/shared/Error";

const Localities: FC = observer(() => {
  const localityVM = useViewModel<ILocalityVM>("locality");

  console.log(localityVM.localities);
  return (
    <div>
      {localityVM.loading && <Loading />}

      {localityVM.error && !localityVM.loading && (
        <Error
          title="Ошибка при получении списка населенных пунктов"
          error={localityVM.error}
        />
      )}

      {!localityVM.loading && !localityVM.error && localityVM.localities && (
        <>
          <LocalitiesHeader />
          <LocalityList localities={localityVM.localities || []} />
        </>
      )}
    </div>
  );
});

export default Localities;
