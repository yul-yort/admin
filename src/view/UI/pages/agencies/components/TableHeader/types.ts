import { IAgencyResponseDTO } from "src/data/Agency/entity/types";

export interface ITableHeaderCell {
  id: keyof IAgencyResponseDTO;
  label: string;
}
