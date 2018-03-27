module.exports = {
  env: {
    "react-native/react-native": true,
    "jest/globals": true,
  },
  plugins: ["react", "react-native", "jest"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:jest/recommended",
  ],
  parser: "babel-eslint",
  rules: {
    "react-native/no-unused-styles": "warn",
    "react-native/split-platform-components": "warn",
    "no-console": [
      "warn",
      {
        allow: ["warn", "error"],
      },
    ],
  },
  overrides: {
    files: ["*.spec.js"],
    rules: {
      "no-global-assign": 0,
    },
  },
}
