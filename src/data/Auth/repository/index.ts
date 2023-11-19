import { IAuthRepository } from "./types";
import { signInWithEmailAndPassword } from "firebase/auth";
import { BaseRepository } from "src/data/BaseRepository";
import { IAuthServiceParams } from "../service/types";

export class AuthRepository extends BaseRepository implements IAuthRepository {
  async signIn({ auth, email, password }: IAuthServiceParams): Promise<void> {
    await signInWithEmailAndPassword(auth, email, password);
  }
}
