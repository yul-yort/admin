export interface IUserService {
  login(): Promise<void>;
  logout(): Promise<void>;
}
