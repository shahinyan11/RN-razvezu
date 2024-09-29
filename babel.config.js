module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-transform-export-namespace-from'],
    [
      'react-native-reanimated/plugin',
      {
        globals: ['__labelImage', '__scanFaces', '__detectObjects'],
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@httpClient': './src/httpClient',
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@store': './src/store',
          '@utils': './src/utils',
          '@validations': './src/validations',
          '@hooks': './src/hooks',
          '@helpers': './src/helpers',
          '@services': './src/services',
        },
      },
    ],
  ],
};
