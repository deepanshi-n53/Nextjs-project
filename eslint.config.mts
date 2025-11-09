import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";
import unusedImports from "eslint-plugin-unused-imports";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "**/.next/**/*",
      "node_modules/**/*",
      "**/*.d.ts",
      "next-env.d.ts",
      "**/*.mjs",
      "dist/**/*",
      "build/**/*",
    ],

    files: ["**/*.{js,ts,tsx}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin,
      "unused-imports": unusedImports,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,

      // React 17+ no longer needs React in scope
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",

      // Allow both ' and " without Prettier error
      quotes: "off",

      // Formatting & cleanup
      "prettier/prettier": [
        "warn",
        {
          singleQuote: false,
          endOfLine: "lf",
        },
      ],
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": [
        "warn",
        { vars: "all", varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
      ],
    },

    settings: {
      react: { version: "detect" },
    },
  },
]);
