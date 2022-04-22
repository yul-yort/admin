export interface IUserRepository {
  login: () => Promise<void>;
  logout: () => Promise<void>;
}
