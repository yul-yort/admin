import * as cookieUtils from "cookie";
import { CONSTANTS } from "../../../constants/globalConstants";

type TCookieData = [
  name: string,
  value: string,
  options: cookieUtils.CookieSerializeOptions
];

export const getAuthCookie = (method?: "login" | "logout"): TCookieData => {
  let expires: Date = new Date();
  expires.setDate(new Date().getDate() + 1);

  if (method === "logout") {
    expires = new Date(0);
  }

  return [
    CONSTANTS.tokenCookieKey,
    "abc - 123",
    {
      expires,
      path: "/",
    },
  ];
};
