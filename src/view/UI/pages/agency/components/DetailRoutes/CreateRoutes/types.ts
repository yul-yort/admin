export interface ICreateRoutes {
  showModal: boolean;
  handleCloseModal: () => void;
}

//FIXME: исправить any
export interface IRoutesCreateModal {
  showModal: boolean;
  showConfirm: boolean;
  onClose: () => void;
  onSave: (a: IRoutesCreateFormFields) => Promise<void>;
  onConformClose: () => void;
  onCancelClose: () => void;
}

export interface IRoutesCreateForm
  extends Pick<IRoutesCreateModal, "onSave" | "onClose"> {}

export interface IRoutesCreateFormFields {
  origin: string;
  destination: string;
  price: string;
}
