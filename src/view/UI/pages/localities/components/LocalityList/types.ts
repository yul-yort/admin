import { ILocalityEntity } from "../../../../../../data/Locality/entity/types";

export interface ILocalityList {
  localities: ILocalityEntity[];
  handleShowEditModal: (id: ID) => void;
  handleShowDeleteModal: () => void;
}
