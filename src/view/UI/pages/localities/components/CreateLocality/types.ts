export interface ICreateLocality {
  showModal: boolean;
  loading: boolean;
  handleCloseCreateModal: () => void;
  titleModal: string;
  selectedLocality: ILocalityFormFields | null;
  createLocality: (fields: ILocalityFormFields) => Promise<void>;
}

export interface ICreateLocalityModal {
  showModal: boolean;
  titleModal: string;
  onSave: (fields: ILocalityFormFields) => void;
  loading: boolean;
  onClose: () => void;
  showConfirm: boolean;
  handleConfirmClose: () => void;
  handleConfirmCloseModal: () => void;
}

export interface ICreateLocalityForm {
  onSave: (fields: ILocalityFormFields) => void;
  onClose: () => void;
}

export interface ILocalityFormFields {
  name: string;
  region?: string;
  district?: string;
  description?: string;
}
