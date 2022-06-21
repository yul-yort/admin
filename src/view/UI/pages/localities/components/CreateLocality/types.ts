export interface ICreateLocality {
  showModal: boolean;
  handleCloseCreateModal: () => void;
  titleModal: string;
}

export interface ICreateLocalityModal {
  showModal: boolean;
  handleCloseCreateModal: () => void;
  titleModal: string;
  onSave: (fields: any) => void;
  onClose: () => void;
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
