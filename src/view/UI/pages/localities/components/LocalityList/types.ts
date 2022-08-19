import { ILocalityEntity } from "src/data/Locality/entity";

export interface ILocalityList {
  localities: ILocalityEntity[];
  handleShowEditModal: (id: ID) => void;
  handleShowDeleteModal: (id: ID) => void;
}
