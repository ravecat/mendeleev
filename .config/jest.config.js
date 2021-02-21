module.exports = {
  rootDir: "../",
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/**/*.d.ts",
  ],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}",
  ],
  testURL: "http://localhost",
  testEnvironment: "node",
  maxWorkers: 1,
  moduleDirectories: ["node_modules"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/.config/fileTransform.js",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  moduleNameMapper: {
    "^react-native$": "react-native-web",
  },
  moduleFileExtensions: [
    "web.js",
    "js",
    "jsx",
    "ts",
    "tsx",
    "json",
    "web.jsx",
    "node",
    "mjs",
  ],
  modulePaths: ["<rootDir>/src"],
};
