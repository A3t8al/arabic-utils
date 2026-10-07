export default {
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.js'],
  coverageThreshold: {
    global: { lines: 90, functions: 90, statements: 90, branches: 80 }
  }
};
