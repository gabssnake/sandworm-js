module.exports = {
  displayName: 'node',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage/node',
  coveragePathIgnorePatterns: ['/tests/', '/node_modules/'],
  coverageProvider: 'babel',
  reporters: ['default', ['jest-junit', {outputName: 'junit-node-unit.xml'}]],
  rootDir: '../../',
  testEnvironment: 'node',
  testMatch: ['**/tests/unit/*.test.js', '**/tests/unit/*.test.node.js'],
};
