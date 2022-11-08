import { ILocalityEntity } from "src/data/Locality/entity/types";

export interface ITableToolbar {
  filterByAgency: (value: string) => void;
  filterByPhone: (value: string) => void;
  filterByOrigin: (value: ID) => void;
  filterByDestination: (value: ID) => void;
  localities: ILocalityEntity[];
  localitiesLoading: boolean;
  getLocalities: () => Promise<void>;
}
