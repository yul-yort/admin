import { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import { useViewModel } from "../../hooks/useViewModel";
import { ILocalityVM } from "src/view/viewModels/Locality/types";
import LocalityList from "./components/LocalityList";
import LocalitiesHeader from "./components/Header";
import Error from "../../components/shared/Error";
import Loading from "../../components/common/Loading";
import CreateLocality from "./components/CreateLocality";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal";

const Localities: FC = observer(() => {
  const localityVM = useViewModel<ILocalityVM>("locality");
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");

  const handleShowCreateModal = () => {
    setTitleModal("Добавить населенный пункт");
    setShowModal(true);
  };

  const handleShowEditModal = () => {
    setTitleModal("Редактировать населенный пункт");
    setShowModal(true);
  };

  const handleCloseCreateModal = () => {
    setShowModal(false);
  };

  //DELETE MODAL
  const handleShowDeleteModal = () => {
    setShowDeleteModal(true);
  };

  const handleCancelDeleteModal = () => {
    setShowDeleteModal(false);
  };

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
          <LocalitiesHeader handleShowCreateModal={handleShowCreateModal} />
          <LocalityList
            handleShowEditModal={handleShowEditModal}
            handleShowDeleteModal={handleShowDeleteModal}
            localities={localityVM.localities || []}
          />
          <CreateLocality
            showModal={showModal}
            handleCloseCreateModal={handleCloseCreateModal}
            titleModal={titleModal}
          />
          <ConfirmDeleteModal
            showDeleteModal={showDeleteModal}
            handleCancelDeleteModal={handleCancelDeleteModal}
          />
        </>
      )}
    </div>
  );
});

export default Localities;
