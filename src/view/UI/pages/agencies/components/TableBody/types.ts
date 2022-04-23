import { IAgencyItemEntity } from "src/data/entities/Agency/types";

export interface ITableBodyTemplateProps {
  rows: IAgencyItemEntity[];
  isLoadingItem: (id: ID) => boolean;
}
