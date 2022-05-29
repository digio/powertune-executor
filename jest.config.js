/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  // The test environment that will be used for testing
  testEnvironment: 'node',

  // See https://jestjs.io/docs/ecmascript-modules
  transform: {},

  // All imported modules in your tests should be mocked automatically
  automock: false,

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  reporters: ['default'],

  collectCoverageFrom: ['src/**/*.js', '!src/logger.js'],
  coverageReporters: ['json-summary', 'lcov', 'text', 'html'],
  coverageDirectory: '<rootDir>/test-reports/coverage',
  coverageThreshold: {
    global: {
      statements: 30,
      branches: 80,
      functions: 12,
      lines: 30,
    },
  },

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  moduleDirectories: ['node_modules'],

  // https://github.com/chalk/chalk/issues/532

  moduleNameMapper: {
    '#(.*)': '<rootDir>/node_modules/$1',
  },
};
