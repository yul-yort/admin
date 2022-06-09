import { IAgencyItemResponseDTO } from "src/data/Agency/entity/types";

export interface ITableHeaderCell {
  id: keyof IAgencyItemResponseDTO;
  label: string;
}
