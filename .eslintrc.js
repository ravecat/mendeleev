module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: [
      ".config/tsconfig.eslint.json"
    ],
  },
  extends: [
    ".config/.eslintrc.common.js",
    "react-app",
    "react-app/jest",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jest/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": 2,
    "@typescript-eslint/ban-ts-comment": 1,
    "simple-import-sort/imports": [
      2,
      {
        groups: [
          // Node.js builtins. You could also generate this regex if you use a `.js` config.
          // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
          [
            "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)",
          ],
          // Packages. `react` related packages come first.
          ["^@?\\w"],
          // Side effect imports.
          ["^\\u0000"],
          // Internal packages.
          ["^(@|api|app|components|connections|screen|utils|common|ConnectedApp)(/.*|$)"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Style imports.
          ["^.+\\.s?css$"],
        ],
      },
    ],
    "react/jsx-sort-props": [
      2,
      {
        noSortAlphabetically: false,
      },
    ],
    "react/jsx-wrap-multilines": [
      2,
      {
        assignment: "parens-new-line",
        arrow: "parens-new-line",
      },
    ],
    "prettier/prettier": 2,
  },
};
