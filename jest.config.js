module.exports = {
  collectCoverage: true,
  coverageReporters: ['lcov'],
  clearMocks: true,
  modulePathIgnorePatterns: [
    '<rootDir>/packages/*.*/dist/*.*',
    '<rootDir>/packages/*.*/public/*.*',
    '<rootDir>/packages/*.*/.cache/*.*'
  ],
  roots: ['<rootDir>/packages'],
  setupFiles: ['<rootDir>/jest.env.js'],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  transform: {
    '^.+\\.(ts|tsx?)$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '\\.(css)$': '<rootDir>/packages/patternfly-4/react-styles/jest-transform.js'
  },
  preset: 'ts-jest/presets/js-with-babel',
  globals: {
    'ts-jest': {
      tsConfig: 'packages/patternfly-4/tsconfig.jest.json'
    }
  }
};
