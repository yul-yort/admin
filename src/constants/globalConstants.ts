export const CONSTANTS = {
  isDev: process.env.NODE_ENV === "development",
  projectName: "Yul-Yort Admin",
  tokenKey: "yy-admin-access-token",
  publicAdminInfoKey: "yy-public-admin-info",
  themeKey: "yy-theme",
  defaultRoute: "dashboard",
  numberPattern: /^[1-9]\d*(\d+)?$/i,
  publicUrl: process.env.PUBLIC_URL || "/",
  devBaseUrl: "http://localhost:9000/",
  prodBaseUrl: "http://localhost/api",
};
