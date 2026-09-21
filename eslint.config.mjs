import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.js"],
    rules: {
      semi: "error",
      quotes: ["error", "double"],
    },
  },
  {
    files: ["**/*.ts"],
    languageOptions: { parser: tsParser },
  },
];