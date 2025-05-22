// eslint.config.js
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginReactNative from "eslint-plugin-react-native";
import eslintJs from "@eslint/js";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // ✅ IMPORTANTE para que entienda <JSX />
        },
      },
    },
    plugins: {
      react: pluginReact,
      "react-native": pluginReactNative,
    },
    rules: {
      ...eslintJs.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...pluginReactNative.configs.all.rules,

      // Opcional: desactivar reglas de formato si no las quieres
      "react/jsx-indent": "off",
      "react/jsx-curly-spacing": "off",
      "react/jsx-tag-spacing": "off",
      "react/jsx-wrap-multilines": "off",
      "react/jsx-first-prop-new-line": "off",
      "react/jsx-indent-props": "off",
      "react/jsx-closing-tag-location": "off",
      "react/jsx-props-no-multi-spaces": "off",
      'react-native/sort-styles': 'off',
      'react-native/no-color-literals': 'off',
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
