module.exports = {
  preset: 'ts-jest',
  modulePaths: ['<rootDir>/src'],
  moduleFileExtensions: ['tsx', 'ts', 'js'],
  moduleNameMapper: {
    '^api$': '<rootDir>/src/api',
    '^components$': '<rootDir>/src/components',
    '^features$': '<rootDir>/src/features',
    '^utils$': '<rootDir>/src/utils',
  },
  modulePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
  testEnvironment: 'node',
};
