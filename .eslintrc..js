module.exports = {
  extends: [
    '@roseys/eslint-config',

  ],
  plugins:['@typescript-eslint'],
  parserOptions: {
    tsconfigRootDir:__dirname,
    ecmaVersion: 2018,
    sourceType: 'module',
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
  },


}
