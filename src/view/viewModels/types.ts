export interface IBaseVM {
  loading: boolean;
  error: Error | null;

  setLoading: () => void;
  unsetLoading: () => void;
  setError: (err: unknown) => void;
  unsetError: () => void;
}

export interface IError {
  name: string;
  message: string;
}

export interface INotification {
  type: "success" | "error";
  message: string;
}

export interface INotificationsVM {
  notification: INotification | null;

  addNotification(notification: INotification): void;
  removeNotification(): void;
}
