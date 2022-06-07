import { IOrderItemEntity } from "src/data/entities/Order/types";
import { ILocalityEntity } from "src/data/entities/Locality/types";

export interface IListProps {
  list: IOrderItemEntity[];
  filterByAgency: (value: string) => void;
  filterByPhone: (value: string) => void;
  filterByOrigin: (value: string) => void;
  filterByDestination: (value: string) => void;
  localities: ILocalityEntity[];
  localitiesLoading: boolean;
  getLocalities: () => Promise<void>;
}
