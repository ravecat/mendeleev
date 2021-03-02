module.exports = {
  plugins: [
    "@reatom/babel-plugin",
    [
      "babel-plugin-styled-components",
      {
        displayName: process.env.NODE_ENV === "development",
      },
    ],
  ],
};
