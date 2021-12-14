import { IAgencyResponseDTO } from "../../../../../../data/domainModels/Agency/types";

export interface ITableHeaderProps {
  numSelected: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowCount: number;
}

export interface ITableHeaderCell {
  id: keyof IAgencyResponseDTO;
  label: string;
  numeric: boolean;
}
