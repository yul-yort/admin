import { ILocalityEntity } from "src/data/Locality/entity/types";

export interface ITableToolbar {
  filterByAgency: (value: string) => void;
  filterByPhone: (value: string) => void;
  filterByOrigin: (value: string) => void;
  filterByDestination: (value: string) => void;
  localities: ILocalityEntity[];
  localitiesLoading: boolean;
  getLocalities: () => Promise<void>;
}
