module.exports = {
  processors: [[
    "stylelint-processor-styled-components", {
      "ignoreFiles": [
        "**/*.css",
      ]
    }]
  ],
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-styled-components",
    "stylelint-config-prettier"
  ],
  syntax: "scss",
  rules: {
    "declaration-block-no-duplicate-properties": [
      true,
      {"ignore": ["consecutive-duplicates"]}
    ],
    "selector-type-case": null,
    "selector-type-no-unknown": null,
    "declaration-empty-line-before": null,
    "font-family-no-missing-generic-family-keyword": null
  }
}
