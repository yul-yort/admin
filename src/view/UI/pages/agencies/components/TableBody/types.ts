import React from "react";
import { IAgencyResponseDTO } from "src/data/entities/Agency/types";

export interface ITableBodyTemplateProps {
  rows: IAgencyResponseDTO[];
  selected: string[];
  handleSelect: (event: React.MouseEvent<unknown>, name: string) => void;
}
