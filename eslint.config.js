module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      "airbnb",
      "airbnb/hooks",
      "airbnb-typescript"
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', 'tailwind.config.js', 'postcss.config.js'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
          project: true,
          ecmaFeatures: {
              jsx: true,
          }
    },
    plugins: ["@typescript-eslint/eslint-plugin", "simple-import-sort", "no-inline-styles", "prettier"],
    settings: {
          react: {
              version: "detect",
          },
      },
    rules: {
      // React component definitions
      "react/function-component-definition": ["error", { "namedComponents": "arrow-function", "unnamedComponent": [] }],
      // suppress errors for missing 'import React' in files
     "react/react-in-jsx-scope": "off",
      // allow jsx syntax in src files
     "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
     // double quotes
     "@typescript-eslint/quotes": ["error", "double"],
     // do not use default exports
     "import/no-default-export": "error",
     "import/prefer-default-export": "off",
     // don't look for indentation
     "@typescript-eslint/indent": "off",
  
     // server can console
     "no-console": "off",
  
     // allow braces to be whatever
     "arrow-body-style": "off",
    },
  }
  