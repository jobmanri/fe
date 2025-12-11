module.exports = {
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
  tabWidth: 2,
  printWidth: 100,

  importOrder: [
    "^react",
    "^next",
    "<THIRD_PARTY_MODULES>",

    "^(@/app)(.*)$",
    "^(@/entities)(.*)$",
    "^(@/features)(.*)$",
    "^(@/pages)(.*)$",
    "^(@/shared)(.*)$",
    "^(@/widgets)(.*)$",

    "^(.*)/(.*)$",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: false,
};
