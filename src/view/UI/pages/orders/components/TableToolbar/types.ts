import { ILocalityEntity } from "src/data/Locality/entity/types";

export interface ITableToolbar {
  filterByAgency: (value: string) => void;
  filterByPhone: (value: string) => void;
  filterByOrigin: (value: number) => void;
  filterByDestination: (value: number) => void;
  localities: ILocalityEntity[];
  localitiesLoading: boolean;
  getLocalities: () => Promise<void>;
}
