export interface IUserRepository {
  login: () => Promise<void>;
}
