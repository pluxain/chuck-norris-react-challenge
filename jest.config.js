module.exports = {
  preset: 'ts-jest',
  modulePaths: ['<rootDir>/src'],
  moduleFileExtensions: ['tsx', 'ts', 'js'],
  moduleNameMapper: {
    '^api$': '<rootDir>/src/api',
    '^features$': '<rootDir>/src/features',
  },
  modulePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
  testEnvironment: 'node',
};
