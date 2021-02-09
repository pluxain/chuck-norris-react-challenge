module.exports = {
  preset: 'ts-jest',
  modulePaths: ['<rootDir>src'],
  moduleFileExtensions: ['tsx', 'ts', 'js'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  testEnvironment: 'node',
};
