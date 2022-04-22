export interface ITableToolbarProps {
  selected: string[];
}

export interface IToolbarActionIconsProps {
  selected: ID[];
  deleteAgency: () => void;
  addAgency: () => void;
  editAgency: () => void;
}
