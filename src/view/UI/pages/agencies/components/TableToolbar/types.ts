export interface ITableToolbarProps {
  selected: string[];
}

export interface IToolbarActionIconsProps {
  selected: string[];
  deleteAgency: () => void;
  addAgency: () => void;
  editAgency: () => void;
}
