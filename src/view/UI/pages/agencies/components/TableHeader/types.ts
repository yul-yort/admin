import { IAgencyEntity } from "src/data/Agency/entity/types";

export interface ITableHeaderCell {
  id: keyof IAgencyEntity;
  label: string;
}
