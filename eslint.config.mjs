import tseslint from "typescript-eslint";
import next from "@next/eslint-plugin-next";
import jsxA11y from "eslint-plugin-jsx-a11y";
import pluginQuery from "@tanstack/eslint-plugin-query"

const eslintConfig = [...tseslint.configs.recommended, {
  files: ["**/*.{js,jsx,ts,tsx}"],
  plugins: {
    "@next/next": next,
    "jsx-a11y": jsxA11y,
    "@tanstack/query":pluginQuery,
  },
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      project: ["./tsconfig.json"],
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  rules: {
    ...next.configs.recommended.rules,
    ...next.configs["core-web-vitals"].rules,
    ...jsxA11y.flatConfigs.recommended.rules,
    "jsx-a11y/alt-text": "error",
    "@tanstack/query/exhaustive-deps":"error",
    "@tanstack/query/no-rest-destructuring":"warn",
    "@tanstack/query/stable-query-client":"error",
    "@tanstack/query/no-unstable-deps":"warn",
    "@tanstack/query/infinite-query-property-order":"warn",
    "@tanstack/query/no-void-query-fn":"error",
    "@tanstack/query/mutation-property-order":"warn",
  },
}, {
  ignores: [
    "node_modules/**",
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    ".pnp.cjs",
    ".pnp.loader.mjs",
    ".yarn/**",
  ],
}
];

export default eslintConfig;
