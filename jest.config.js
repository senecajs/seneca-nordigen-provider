module.exports = {
  transform: {
    "^.+\\.tsx?$": ["esbuild-jest", {sourcemap:true}]
  },
  transformIgnorePatterns: ["nordigen-loader.js"],
  testEnvironment: 'node',
  testMatch: ['**/test/**/*.test.ts'],
  watchPathIgnorePatterns: ['dist\\/'],
  collectCoverageFrom: ['src/**/*.ts'],
  coverageProvider: 'v8'
}
