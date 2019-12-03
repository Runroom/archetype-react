module.exports = {
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  transform: { '^.+\\.(ts|tsx|js)?$': 'babel-jest' },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgr-mock.js'
  }
};
