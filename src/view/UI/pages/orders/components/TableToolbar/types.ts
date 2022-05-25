import { ILocalityEntity } from "src/data/entities/Locality/types";

export interface ITableToolbar {
  filterByAgency: (value: string) => void;
  filterByPhone: (value: string) => void;
  localities: ILocalityEntity[];
  localitiesLoading: boolean;
  getLocalities: () => Promise<void>;
}
