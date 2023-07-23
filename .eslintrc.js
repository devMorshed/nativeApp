module.exports = {
  root: true,
  extends: [
    '@react-native',
    '@react-native-community/eslint-config',
  ],
  rules: {
    // Add custom rules here
    "prettier/prettier": ["error", { "endOfLine": "auto" }],
  },
};
