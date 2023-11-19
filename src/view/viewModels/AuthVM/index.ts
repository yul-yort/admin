import { getAuth, onAuthStateChanged, Auth } from "firebase/auth";
import { BaseVM } from "../BaseVM";
import { INotificationsVM } from "../types";
import { action, makeObservable, observable, runInAction } from "mobx";
import { IFormValues } from "src/view/UI/pages/login/types";
import { IAuthService } from "src/data/Auth/service/types";

//TODO: вынести в service
//signOut(), onAuthStateChanged(), getIdToken()
export class AuthVM extends BaseVM {
  private _auth: Auth | null;
  public isAuth: boolean | null = null;

  constructor(
    notificationsVM: INotificationsVM,
    private authService: IAuthService
  ) {
    super(notificationsVM);
    this._auth = getAuth();
    this.userVerification();
    makeObservable(this, {
      signIn: action,
      isAuth: observable,
    });
  }

  //Проверка пользователя
  private userVerification = async (): Promise<void> => {
    try {
      if (!this._auth) return;
      await onAuthStateChanged(this._auth, (user) => {
        runInAction(() => {
          this.isAuth = !!user;
          this.isAuth && this.setTokenonLocalStorage();
        });
      });
    } catch {
      this.notify.errorNotification("Ошибка при проверке пользователя.");
    }
  };

  //Добавляем актуальный token в LocalStorage
  private setTokenonLocalStorage = async (): Promise<void> => {
    try {
      const currentUser = this._auth?.currentUser;

      if (!currentUser) return;
      const idToken: string = await currentUser.getIdToken(
        /* forceRefresh */ true
      );
      localStorage.setItem("idToken", idToken);
    } catch {
      this.notify.errorNotification("Ошибка записи tokena в Local storage");
    }
  };

  //Аутентификация с помощью email и password
  signIn = async ({ email, password }: IFormValues): Promise<void> => {
    try {
      if (!this._auth) return;
      await this.authService.singIn({ auth: this._auth, email, password });
      await this.userVerification();
    } catch (error) {
      this.notify.errorNotification("Ошибка входа");
    }
  };

  logout = () => {
    try {
      if (!this._auth) return;
      this._auth.signOut();
    } catch {
      this.notify.errorNotification("Ошибка разлогинивания:");
    }
  };
}
