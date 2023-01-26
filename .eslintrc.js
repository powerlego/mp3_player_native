module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    es2022: true,
    node: true,
    es6: true,
    "react-native/react-native": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "@react-native-community",
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },

  overrides: [
    {
      files: ["*.js"],
      parser: "@babel/eslint-parser",
      plugins: ["ft-flow"],
      rules: {
        // Flow Plugin
        // The following rules are made available via `eslint-plugin-ft-flow`

        "ft-flow/define-flow-type": "warn",
        "ft-flow/use-flow-type": "warn",
      },
    },
    {
      files: ["*.jsx"],
      parser: "@babel/eslint-parser",
    },
    {
      files: ["*.{spec,test}.{js,ts,tsx}", "**/__{mocks,tests}__/**/*.{js,ts,tsx}"],
      env: {
        jest: true,
        "jest/globals": true,
      },
      rules: {
        "react-native/no-inline-styles": "off",
        quotes: ["warn", "double", { avoidEscape: true, allowTemplateLiterals: true }],
      },
    },
  ],

  plugins: ["react", "react-hooks", "react-native", "@typescript-eslint"],
  rules: {
    "arrow-parens": ["error", "always"],
    camelcase: ["error", { properties: "always" }],
    "brace-style": ["error", "stroustrup", { allowSingleLine: true }],
    "operator-linebreak": ["error", "before", { overrides: { "?": "before", ":": "before" } }],
    curly: ["error", "all"],
    eqeqeq: ["error", "always"],
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "func-call-spacing": ["error", "never"],
    "function-paren-newline": ["error", "multiline-arguments"],
    "no-lonely-if": "error",
    "no-tabs": "error",
    "no-trailing-spaces": "error",
    "multiline-ternary": ["error", "always-multiline"],
    "max-len": ["error", { code: 120 }],
    yoda: ["error", "never", { exceptRange: true }],
    "quote-props": ["error", "as-needed"],
    "no-unused-vars": "off", // ts lint will take care of it
    "no-alert": "off",
    "eol-last": "error",
    "no-empty": ["error", { allowEmptyCatch: true }],
    "no-undefined": "error",
    "no-use-before-define": "off", // ts lint will take care of it
    "no-multi-assign": "error",
    "no-useless-concat": "error",
    "no-useless-return": "error",
    "no-shadow-restricted-names": "error",
    "no-useless-constructor": "warn",
    "no-constant-condition": ["error", { checkLoops: false }],
    "no-duplicate-imports": ["error", { includeExports: true }],
    "no-useless-computed-key": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "space-before-blocks": "error",
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": ["error", { words: true, nonwords: false }],
    "object-shorthand": "error",
    "object-curly-spacing": ["error", "always"],
    "prefer-const": "error",
    "prefer-arrow-callback": "error",
    "template-curly-spacing": ["error", "never"],
    "comma-spacing": ["error", { before: false, after: true }],
    "comma-dangle": ["error", "always-multiline"],
    "@typescript-eslint/naming-convention": [
      "warn",
      { selector: "default", format: ["camelCase"] },
      { selector: "variable", format: ["camelCase", "UPPER_CASE"] },
      { selector: "parameter", format: ["camelCase"], leadingUnderscore: "allow" },
      { selector: "memberLike", modifiers: ["private"], format: ["camelCase"], leadingUnderscore: "require" },
      { selector: "typeLike", format: ["PascalCase"] },
      { selector: "class", format: ["PascalCase"] },
      { selector: "interface", format: ["PascalCase"] },
      { selector: "function", format: ["camelCase", "PascalCase"] },
    ],
    "react/jsx-pascal-case": ["error", { allowAllCaps: true }],
    "react/jsx-uses-react": "error",
    "react/jsx-closing-tag-location": "error",
    "react/jsx-closing-bracket-location": ["error", "line-aligned"],
    "react/jsx-newline": ["error", { prevent: true }],
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        shorthandFirst: true,
        shorthandLast: false,
        ignoreCase: true,
        multiline: "last",
      },
    ],
    "react/jsx-wrap-multilines": [
      "error",
      {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "parens-new-line",
        prop: "parens-new-line",
      },
    ],
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
    "react/sort-prop-types": [
      "error",
      {
        callbacksLast: true,
        ignoreCase: true,
        requiredFirst: true,
        sortShapeProp: true,
      },
    ],
    "react/void-dom-elements-no-children": "error",
  },
};
