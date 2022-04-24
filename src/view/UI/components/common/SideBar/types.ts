export interface ISideBar {
  onClose: () => void;
  onLogout: () => Promise<void>;
  open: boolean;
  loading: boolean;
}
