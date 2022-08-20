import { IAgencyEntity } from "src/data/Agency/entity/types";

export interface ITableBodyTemplateProps {
  rows: IAgencyEntity[];
  isLoadingItem: (id: ID) => boolean;
}
