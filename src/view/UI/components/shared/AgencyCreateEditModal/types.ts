export interface IAgencyCreateEditModal {
  open: boolean;
  loading?: boolean;
  onClose: () => void;
  onSave: (a?: never) => Promise<void>;
  onConformClose?: () => void;
  onCancelClose?: () => void;
  showConfirm?: boolean;
  title: string;
}
