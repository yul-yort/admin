import { TTheme } from "../../../../viewModels/App/types";

export interface ISideBar {
  onClose: () => void;
  onLogout: () => void;
  open: boolean;
  loading: boolean;
  theme: TTheme;
  onSetTheme: (theme: TTheme) => void;
}
