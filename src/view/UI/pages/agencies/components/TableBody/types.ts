import { IAgencyResponseDTO } from "src/data/domainModels/Agency/types";

export interface ITableBodyTemplateProps {
  rows: IAgencyResponseDTO[];
  selected: any;
  handleSelect: (event: React.MouseEvent<unknown>, name: string) => void;
}
