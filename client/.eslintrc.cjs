module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      "plugin:react/recommended",
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/jsx-indent": [2, 2],
      "react/jsx-curly-spacing": 2,
      "react/jsx-equals-spacing": [2, "always"],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "keyword-spacing": [ "warn" ],
      "indent": [ "error", 2, {
        "VariableDeclarator": "first",
        "ArrayExpression": "first",
        "ObjectExpression": 1,
        "ImportDeclaration": 1,
        "flatTernaryExpressions": true,
        "SwitchCase": 1

      } ],
      "no-unused-vars": "off",
      "@typescript-eslint/no-useless-empty-export": "error",
      //"@typescript-eslint/no-unsafe-return": "error",
      //"@typescript-eslint/no-duplicate-type-constituents": "error",'
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/no-extra-non-null-assertion": "error",
     //"@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/no-duplicate-enum-values": "error",
      //"@typescript-eslint/consistent-type-exports": "warn",
      "@typescript-eslint/ban-types": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/type-annotation-spacing": "error",
      "@typescript-eslint/space-before-function-paren": [ "error", "always" ],
      // to enforce using type for object type definitions, can be type or interface
      "@typescript-eslint/consistent-type-definitions": [ "warn", "type" ],
      "array-bracket-spacing": [ "error", "always", { arraysInArrays: false } ],
      "space-in-parens": [ "error", "always" ],
      quotes: [ "warn", "double" ],
      semi: [ "warn", "always" ],
      "comma-spacing": [ "error", { before: false, after: true } ],
      "object-curly-spacing": [ "error", "always" ],
      "template-curly-spacing": [ "error", "always" ],
      "max-len": [ "warn", { code: 120 } ]
    },
  }
