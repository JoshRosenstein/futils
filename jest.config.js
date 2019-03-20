'use strict'

module.exports = {
  preset: '@roseys/jest-preset',

  // transform: {
  //   //  '\\.css$': '<rootDir>/test/styleTransform.js',
  //   '^.+\\.js?$': 'babel-jest',
  //   '\\.ts$': 'ts-jest',
  // },
  // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: [
    '**/__tests__/**/*.js?(x)',
    '**/?(*.)+(spec).js?(x)',
    '**/__tests__/**/*.ts?(x)',
    '**/?(*.)+(spec).ts?(x)',
  ],
  testPathIgnorePatterns: [
    '/pkg/',
    '/node_modules/',
    '/__fixtures__/',
    '/__utils__/',
    '/es/',
    '/lib/',
  ],
  // coveragePathIgnorePatterns: ['/node_modules/'],
}
