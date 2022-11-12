import { IOrderItemEntity } from "src/data/Order/entity/types";
import { ILocalityEntity } from "src/data/Locality/entity/types";

export interface IListProps {
  list: IOrderItemEntity[];
  filterByAgency: (value: string) => void;
  filterByPhone: (value: string) => void;
  filterByOrigin: (value: number) => void;
  filterByDestination: (value: number) => void;
  localities: ILocalityEntity[];
  localitiesLoading: boolean;
  getLocalities: () => Promise<void>;
}
