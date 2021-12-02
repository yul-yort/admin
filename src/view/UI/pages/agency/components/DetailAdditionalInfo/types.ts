export interface IAdditionalInfo {
  handleEdit: () => void;
  agencyName: string;
  createDate: Date;
  editedDate?: Date;
  phoneValues?: string[];
  description?: string;
}
