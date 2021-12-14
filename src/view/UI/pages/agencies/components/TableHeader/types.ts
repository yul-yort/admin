import React from "react";
import { IAgencyResponseDTO } from "../../../../../../data/entities/Agency/types";

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
