import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useMemo, useState } from "react";
import { IFormValues } from "src/view/UI/pages/login/types";

const useAuth = () => {
  const auth = useMemo(() => getAuth(), []);

  const [isAuthState, setIsAuthState] = useState<boolean | null>(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthState(true);
      } else {
        setIsAuthState(false);
        console.log("Пользовательне не зарегистрирован");
      }
    });

    //TODO: получаем token и записываем в localStorage
    if (!auth?.currentUser) return;
    auth?.currentUser
      .getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        localStorage.setItem("idToken", idToken);
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, [auth]);

  const signUp = async ({ email, password }: IFormValues) => {
    try {
      createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
        }
      );
    } catch (error) {
      console.log("error", error);
    }
  };

  const signIn = async ({ email, password }: IFormValues) => {
    try {
      signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
        }
      );
    } catch (error) {
      console.log("error", error);
    }
  };

  const logOut = () => {
    auth
      .signOut()
      .then(() => {
        // Пользователь успешно разлогинился
      })
      .catch((error) => {
        console.error("Ошибка разлогинивания:", error);
      });
  };

  // Возвращаем необходимые значения и функции
  return {
    logOut,
    isAuthState,
    signUp,
    signIn,
  };
};

export { useAuth };
