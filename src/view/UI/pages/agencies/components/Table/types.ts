import { IAgencyDomain } from "../../../../../../data/domainModels/Agency/types";
import * as React from "react";

export type TOrderAgencies = "asc" | "desc";

export interface IAgenciesData
  extends Pick<
    IAgencyDomain,
    "agencyName" | "phoneValues" | "createDate" | "id"
  > {}

export interface ITableBodyTemplateProps {
  rows: IAgenciesData[];
  order: TOrderAgencies;
  orderBy: string;
  selected: IAgenciesData[];
  handleClick: (event: React.MouseEvent<unknown>, name: string) => void;
}
