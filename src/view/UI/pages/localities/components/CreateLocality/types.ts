import { ILocalityEntity } from "src/data/Locality/entity";

export interface ICreateLocality {
  showModal: boolean;
  loading: boolean;
  handleCloseCreateModal: () => void;
  titleModal: string;
  selectedLocality: ILocalityCreateFormFields | null;
  onSave: (fields: ILocalityCreateFormFields) => Promise<void>;
}

export interface ICreateLocalityModal {
  showModal: boolean;
  titleModal: string;
  onSave: (fields: ILocalityCreateFormFields) => void;
  loading: boolean;
  onClose: () => void;
  showConfirm: boolean;
  handleConfirmClose: () => void;
  handleConfirmCloseModal: () => void;
}

export interface ICreateLocalityForm {
  onSave: (fields: ILocalityCreateFormFields) => void;
  onClose: () => void;
}

export type ILocalityCreateFormFields = Pick<
  ILocalityEntity,
  "name" | "district" | "region" | "description"
>;

export type ILocalityEditFormFields = Pick<
  ILocalityEntity,
  "name" | "district" | "region" | "description" | "id"
>;
