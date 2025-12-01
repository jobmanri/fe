import tseslint from "typescript-eslint";
import next from "@next/eslint-plugin-next";
import jsxA11y from "eslint-plugin-jsx-a11y";

const eslintConfig = [
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "@next/next": next,
      "jsx-a11y": jsxA11y,
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
    },
  },
  {
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
  },
];

export default eslintConfig;
