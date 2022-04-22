export function createData(
  id: ID,
  origin: string,
  destination: string,
  price: number,
) {
  return { id, origin, destination, price };
}

export interface IRoutesCreateModal {
  stateModal: boolean,
  handleCancelCloseEditModal: any,
  handleSaveEdit: any,
}

export interface IRoutesHeader {
  changeStateModal: any,
}

export interface IRoutesCreateForm {
  handleSaveEdit: any,
}