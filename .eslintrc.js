module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['module-resolver'],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
