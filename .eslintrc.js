module.exports = {
  parser: `@typescript-eslint/parser`,
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    'plugin:react/recommended'
  ],
  plugins: ["@typescript-eslint", "prettier", "react"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  rules: {
    quotes: "off",
    "@typescript-eslint/quotes": [
      2,
      "backtick",
      {
        avoidEscape: true
      }
    ],
    indent: ["error", 2, { SwitchCase: 1 }],
    "prettier/prettier": [
      "error",
      {
        trailingComma: "none",
        semi: false,
        singleQuote: false
      }
    ]
  },
  overrides: [
    {
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": 0
      }
    }
  ],
  settings: {
    react: {
      version: "detect"
    }
  }
}
