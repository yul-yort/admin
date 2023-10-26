import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useMemo, useState } from "react";

const useAuth = () => {
  const googleAuthProvider = new GoogleAuthProvider();
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
  }, [auth]);

  const handleGoogleSignIn = async () => {
    try {
      // Откройте окно аутентификации Google
      const result = await signInWithPopup(auth, googleAuthProvider);

      // Пользователь успешно аутентифицирован через Google
      const user = result.user;
      console.log("Пользователь успешно аутентифицирован через Google:", user);
    } catch (error) {
      // Обработка ошибок аутентификации через Google
      console.error("Ошибка аутентификации через Google:", error);
    }
  };

  const logOut = () => {
    auth
      .signOut()
      .then(() => {
        // Пользователь успешно разлогинился
      })
      .catch((error) => {
        // Обработка ошибки разлогинивания
        console.error("Ошибка разлогинивания:", error);
      });
  };

  // Возвращаем необходимые значения и функции
  return {
    logOut,
    isAuthState,
    handleGoogleSignIn,
  };
};

export { useAuth };
