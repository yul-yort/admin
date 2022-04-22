import { IAgencyItemResponseDTO } from "src/data/entities/Agency/types";

export interface ITableHeaderCell {
  id: keyof IAgencyItemResponseDTO;
  label: string;
}
