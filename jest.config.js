module.exports = {
  setupFiles: ['<rootDir>/setupTests.js'],
  bail: 1,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**',
    '!<rootDir>/src/index.js',
  ],
  modulePathIgnorePatterns: [
    "__mocks__",
    "__snapshots",
    "node_modules"
  ],
  coverageDirectory: '<rootDir>/coverage',
  testMatch: ['**/src/**/*.test.js'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
};
