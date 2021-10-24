import { IBaseVM, IError } from "./types";
import { action, makeObservable, observable } from "mobx";

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
    if (err instanceof Error) {
      this.error = {
        name: err.name,
        message: err.message,
      };
    } else if (typeof err === "string") {
      this.error = {
        name: "Неопределенная ошибка",
        message: err,
      };
    } else {
      throw new Error("Не удалось распознать ошибку");
    }
  }

  unsetError(): void {
    this.error = null;
  }
}
