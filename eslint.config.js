// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

const simpleImportSort = require("eslint-plugin-simple-import-sort")
const importPlugin = require("eslint-plugin-import");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      importPlugin.flatConfigs.recommended,
    ],
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    processor: angular.processInlineTemplates,
    settings: {
      'import/resolver': {
        node: {
          extensions: [".ts"],
          modulesDirectories: ["node_modules", "src"],
        },
      },
      "import/ignore": [ 'node_modules' ],
    },
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "import/first": "error",
      "import/newline-after-import": ["error", { "count": 1 }],
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // Packages. Things that start with a letter (or digit or underscore), or `@` followed by a letter.
            ["^@?\\w"],
            // Absolute imports and other imports such as Vue-style `@/foo`.
            // Anything not matched in another group.
            ["^"],
            // Relative imports. Anything that starts with a dot.
            ["^\\."],
          ]
        }
      ],
      "dot-notation": ["error", { allowPattern: "^[a-z]+(_[a-z]+)+$" }],
      "eqeqeq": "error",
      "new-cap": [
        "error", {
          "capIsNewExceptions": ["Directive", "Component", "Injectable", "Pipe"]
        }
      ],
      "no-eval": "error",
      "no-extra-label": "error",
      "no-undef-init": "error",
      "no-undefined": "error",
      "no-unneeded-ternary": "error",
      "no-useless-return": "error",
      "prefer-arrow-callback": "error",
      "no-console": [
        "error",
        {
          "allow": ["warn", "error", "info"]
        }
      ]
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);
