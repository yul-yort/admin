import { ILocalityEntity } from "src/data/Locality/entity";

export interface ILocalityList {
  localities: ILocalityEntity[];
  handleShowEditModal: (id: string) => void;
  handleShowDeleteModal: (id: string) => void;
}
