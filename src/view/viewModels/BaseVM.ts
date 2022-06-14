import { IBaseVM, IError, INotificationsVM } from "./types";
import { action, makeObservable, observable } from "mobx";
import { errorMapper } from "./mappers";

export abstract class BaseVM implements IBaseVM {
  loading: boolean = false;
  error: IError | null = null;

  protected constructor(protected notify: INotificationsVM) {
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

    this.notify.errorNotification(`${this.error.name} ${this.error.message}`);
    throw err;
  }

  unsetError(): void {
    this.error = null;
  }
}
