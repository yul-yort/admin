export interface ICreateLocality {
  showModal: boolean;
  handleCloseCreateModal: () => void;
  titleModal: string;
  selectedLocality: ILocalityFormFields | null;
}

export interface ICreateLocalityModal {
  showModal: boolean;
  titleModal: string;
  onSave: (fields: any) => void;
  onClose: () => void;
  showConfirm: boolean;
  handleConfirmClose: () => void;
  handleConfirmCloseModal: () => void;
}

export interface ICreateLocalityForm {
  onSave: (fields: any) => void;
  onClose: () => void;
}

export interface ILocalityFormFields {
  name: string;
  region?: string;
  district?: string;
  description?: string;
}
