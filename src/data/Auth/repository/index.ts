import { IAuthRepository, IAuthRepositoryParams } from "./types";
import { signInWithEmailAndPassword } from "firebase/auth";
import { BaseRepository } from "src/data/BaseRepository";

export class AuthRepository extends BaseRepository implements IAuthRepository {
  async signIn({
    auth,
    email,
    password,
  }: IAuthRepositoryParams): Promise<void> {
    await signInWithEmailAndPassword(auth, email, password);
  }
}
