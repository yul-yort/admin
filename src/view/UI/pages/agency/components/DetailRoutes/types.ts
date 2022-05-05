export interface IRoutesHeader {
  handleCreateRouteClick: () => void;
}

export interface IRoute {
  id: string;
  origin: string;
  destination: string;
  price: number;
}

//TODO: исправить any
export interface IAgencyRoutes {
  handleEditRouteClick: (id: string) => void;
  agencyRoutes: Array<IRoute>;
  handleDeleteRouteClick: (id: string) => void;
}
