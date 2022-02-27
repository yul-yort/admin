export interface IAgencyCreateEditModal {
  open: boolean;
  loading?: boolean;
  onClose: () => void;
  onSave: (a?: any) => Promise<void>;
  onConformClose: () => void;
  onCancelClose: () => void;
  showConfirm: boolean;
  title: string;
}
