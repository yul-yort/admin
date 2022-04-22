import React from "react";
import { IAgencyEntity } from "src/data/entities/Agency/types";

export interface ITableBodyTemplateProps {
  rows: IAgencyEntity[];
  selected: string[];
  handleSelect: (event: React.MouseEvent<unknown>, name: string) => void;
}
