module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [
    {
      files: ["src/*/**", ".eslintrc.cjs"],
      excludedFiles: ["src/serviceWorkerRegistration.ts"],
      rules: {
        "no-undef": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-empty-interface": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {},
};
