import { IAgenciesData, TOrderAgencies } from "../Table/types";

export interface ITableHeaderProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof IAgenciesData) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: TOrderAgencies;
  orderBy: string;
  rowCount: number;
}

export interface ITableHeaderCell {
  disablePadding: boolean;
  id: keyof IAgenciesData;
  label: string;
  numeric: boolean;
}

export const TableHeaderCells: readonly ITableHeaderCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Название',
  },
  {
    id: 'dateСreation',
    numeric: true,
    disablePadding: false,
    label: 'Дата создания',
  },
  {
    id: 'rating',
    numeric: true,
    disablePadding: false,
    label: 'Рейтинг',
  },
  {
    id: 'phone',
    numeric: true,
    disablePadding: false,
    label: 'Телефон',
  }
];

