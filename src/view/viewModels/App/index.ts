import { BaseVM } from "../BaseVM";
import { IAppVM, TTheme } from "./types";
import { CONSTANTS } from "../../../constants";
import { action, makeObservable, observable } from "mobx";
import { INotificationsVM } from "../types";

export class AppVM extends BaseVM implements IAppVM {
  theme: TTheme;

  constructor(notificationsVM: INotificationsVM) {
    super(notificationsVM);
    makeObservable(this, {
      theme: observable,
      setTheme: action,
    });
    // TODO получать через сервис?
    this.theme =
      localStorage.getItem(CONSTANTS.themeKey) === "dark" ? "dark" : "light";
  }

  setTheme = (theme: TTheme) => {
    // TODO сохранять через сервис?
    localStorage.setItem(CONSTANTS.themeKey, theme);
    this.theme = theme;
  };
}
