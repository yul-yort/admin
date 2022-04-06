import { FC } from "react";
import { useRoute } from "react-router5";
import AuthApp from "./AuthApp";

import AuthorizedApp from "./AuthorizedApp";

export const App: FC = () => {
  const {
    route: { name },
  } = useRoute();

  // TODO: тут наверное проверять на наличие токена в localstorage или где то еще 
  const isUnauthorized = name === "registration";

  return (
    <>
      {isUnauthorized 
        ? <AuthApp/>
        : <AuthorizedApp />
      }
    </>
  );
};

export default App;
