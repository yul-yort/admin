export type TOrderAgencies = 'asc' | 'desc';

export interface IAgenciesData {
  name: string;
  dateСreation: string;
  rating: number;
  phone: string;
}

export interface ITableBodyTemplateProps {
  rows: any,
  order: any,
  orderBy: any,
  selected: any,
  handleClick: any,
}

