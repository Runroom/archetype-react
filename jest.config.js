module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgr-mock.js'
  }
};
