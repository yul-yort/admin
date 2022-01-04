import { IBaseVM, IError } from "./types";
import { action, makeObservable, observable } from "mobx";
import { errorMapper } from "./mappers";

// переименовать в Controller?
export class BaseVM implements IBaseVM {
  loading: boolean = false;
  error: IError | null = null;

  constructor() {
    makeObservable(this, {
      loading: observable,
      error: observable,
      setLoading: action,
      unsetLoading: action,
      setError: action,
      unsetError: action,
    });
  }

  setLoading(): void {
    this.loading = true;
  }

  unsetLoading(): void {
    this.loading = false;
  }

  setError(err: unknown): void {
    this.error = errorMapper(err);
    throw err;
  }

  unsetError(): void {
    this.error = null;
  }
}
