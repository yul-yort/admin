export interface IBaseVM {
  loading: boolean;
  error: Error | null;

  setLoading: () => void;
  unsetLoading: () => void;
}

export interface IError {
  name: string;
  message: string;
}
