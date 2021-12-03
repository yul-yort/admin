export interface ITableToolbarProps {
  numSelected: number;
}

export interface IToolbarActionIconsProps {
  numSelected: number,
  deleteAgency: () => void,
  addAgency: () => void,
  editAgency: () => void,
}