//TODO:
export function createData(
  id: ID,
  origin: string,
  destination: string,
  price: number,
) {
  return { id, origin, destination, price };
}

export interface IRoutesHeader {
  handleShowModal: () => void,
}