module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "prettier",
    "prettier/react",
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "vite.config.ts",
    "tailwind.config.js",
    "postcss.config.js",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "simple-import-sort",
    "no-inline-styles",
    "prettier",
  ],
  settings: {
    "import/resolver": {
      typescript: {
        project: "packages/*/tsconfig.json", // monorepo
      },
    },
    react: {
      version: "detect",
    },
  },
  rules: {
    // React component definitions
    "react/function-component-definition": [
      "error",
      { namedComponents: "arrow-function", unnamedComponent: [] },
    ],
    // suppress errors for missing 'import React' in files
    "react/react-in-jsx-scope": "off",
    // allow jsx syntax in src files
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    // allow prop spreading
    "react/jsx-props-no-spreading": "off",
    // do not require default props
    "react/require-default-props": "off",
    // double quotes
    "@typescript-eslint/quotes": ["error", "double"],
    // don't look for indentation
    "@typescript-eslint/indent": "off",
    // do not use default exports
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/no-default-export": "off",
    "import/order": [
      "error",
      {
        alphabetize: {
          caseInsensitive: true,
          order: "asc",
        },
        "newlines-between": "always",
        pathGroups: [
          {
            group: "builtin",
            pattern: "@*/**",
            position: "after",
          },
          {
            group: "external",
            pattern: "~*/**",
            position: "after",
          },
        ],
      },
    ],
    "import/prefer-default-export": "off",

    // server can console
    "no-console": "off",

    // allow braces to be whatever
    "arrow-body-style": "off",
  },
  reportUnusedDisableDirectives: true,
};
