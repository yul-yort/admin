import { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import { useViewModel } from "../../hooks";
import { ILocalityVM } from "src/view/viewModels/Locality/types";
import LocalityList from "./components/LocalityList";
import LocalitiesHeader from "./components/Header";
import Error from "../../components/shared/Error";
import Loading from "../../components/common/Loading";
import CreateLocality from "./components/CreateLocality";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal";
import {
  ILocalityCreateFormFields,
  ILocalityEditFormFields,
} from "./components/CreateLocality/types";
import { ILocalityEntity } from "src/data/Locality/entity";

const Localities: FC = observer(() => {
  const localityVM = useViewModel<ILocalityVM>("locality");
  const [modalType, setModalType] = useState<"" | "create" | "edit">("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedLocality, setSelectedLocality] =
    useState<ILocalityEntity | null>(null);

  const handleShowCreateModal = () => {
    setModalType("create");
  };

  const handleShowEditModal = (id: ID) => {
    handleSelectedLocality(id);
    setModalType("edit");
  };

  const handleCloseCreateModal = () => {
    setModalType("");
    setSelectedLocality(null);
  };

  const handleSelectedLocality = (id: ID) => {
    const localities = localityVM.localities;

    if (!localities || !localities.length) {
      return;
    }

    const locality = localities.find((item) => item.id.toString() === id);
    if (locality) {
      setSelectedLocality(locality);
    }
  };

  //DELETE MODAL
  const handleShowDeleteModal = (id: ID) => {
    handleSelectedLocality(id);
    setShowDeleteModal(true);
  };

  const handleCancelDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedLocality(null);
  };

  const handleDeleteModal = async () => {
    selectedLocality?.id &&
      (await localityVM.deleteLocality(selectedLocality.id));
    handleCancelDeleteModal();
  };

  const editOrCreateHandler = async (
    fields: ILocalityEditFormFields | ILocalityCreateFormFields
  ) => {
    if (modalType === "create") {
      await localityVM.createLocality(fields);
    } else if (modalType === "edit" && selectedLocality) {
      await localityVM.editLocality({
        ...fields,
        id: selectedLocality.id,
      });
    }
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
          <LocalitiesHeader
            searchValue={localityVM.searchValue}
            handleShowCreateModal={handleShowCreateModal}
            onSearch={localityVM.searchLocality}
          />
          <LocalityList
            handleShowEditModal={handleShowEditModal}
            handleShowDeleteModal={handleShowDeleteModal}
            localities={localityVM.localities || []}
          />
          <CreateLocality
            loading={localityVM.createOrEditLoading}
            onSave={editOrCreateHandler}
            showModal={Boolean(modalType)}
            handleCloseCreateModal={handleCloseCreateModal}
            titleModal={
              modalType === "create"
                ? "Добавить населенный пункт"
                : "Редактировать населенный пункт"
            }
            selectedLocality={selectedLocality}
          />
          <ConfirmDeleteModal
            onCancelDeleteModal={handleCancelDeleteModal}
            showDeleteModal={showDeleteModal}
            onDelete={handleDeleteModal}
          />
        </>
      )}
    </div>
  );
});

export default Localities;
