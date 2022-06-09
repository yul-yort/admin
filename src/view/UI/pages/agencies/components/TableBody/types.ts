import { IAgencyItemEntity } from "src/data/Agency/entity/types";

export interface ITableBodyTemplateProps {
  rows: IAgencyItemEntity[];
  isLoadingItem: (id: ID) => boolean;
}
