import { FC } from "react";
import { LocalityCreateModal } from "./LocalityCreateModal";
import { ICreateLocality } from "./types";

const CreateLocality: FC<ICreateLocality> = ({
  showModal,
  handleCloseCreateModal,
}) => {
  return (
    <>
      <LocalityCreateModal
        showModal={showModal}
        handleCloseCreateModal={handleCloseCreateModal}
      />
    </>
  );
};

export default CreateLocality;
